<?php

/**
 * FTP Deployment Script for Laravel Application
 * 
 * This script handles FTP deployment of your Laravel application
 * with proper file exclusions and optimization.
 */

class FTPDeployment
{
    private $ftpConnection;
    private $config;
    private $excludedPaths = [
        'node_modules',
        '.git',
        '.github',
        'tests',
        'backup_original',
        'storage/logs',
        'storage/framework/cache',
        'storage/framework/sessions',
        'storage/framework/views',
        'storage/app/cache',
        '.env',
        '.env.example',
        '.editorconfig',
        '.gitattributes',
        '.gitignore',
        'phpunit.xml',
        'README.md',
        'composer.lock',
        'package-lock.json',
        'artisan',
        'deploy.php',
        'ftp-config.json'
    ];

    private $excludedExtensions = [
        'log',
        'tmp',
        'cache'
    ];

    public function __construct($configFile = 'ftp-config.json')
    {
        if (!file_exists($configFile)) {
            $this->createDefaultConfig($configFile);
            throw new Exception("Configuration file '{$configFile}' created. Please edit it with your FTP credentials and run again.");
        }

        $this->config = json_decode(file_get_contents($configFile), true);
        if (!$this->config) {
            throw new Exception("Invalid configuration file format");
        }
    }

    private function createDefaultConfig($configFile)
    {
        $defaultConfig = [
            "host" => "your-ftp-server.com",
            "port" => 21,
            "username" => "your-username",
            "password" => "your-password",
            "remote_path" => "/public_html",
            "passive" => true,
            "ssl" => false,
            "timeout" => 30
        ];

        file_put_contents($configFile, json_encode($defaultConfig, JSON_PRETTY_PRINT));
    }

    public function connect()
    {
        $ssl = $this->config['ssl'] ?? false;
        $function = $ssl ? 'ftp_ssl_connect' : 'ftp_connect';
        
        $this->ftpConnection = $function(
            $this->config['host'],
            $this->config['port'] ?? 21,
            $this->config['timeout'] ?? 30
        );

        if (!$this->ftpConnection) {
            throw new Exception("Failed to connect to FTP server");
        }

        $login = ftp_login($this->ftpConnection, $this->config['username'], $this->config['password']);
        if (!$login) {
            throw new Exception("FTP login failed");
        }

        if ($this->config['passive'] ?? true) {
            ftp_pasv($this->ftpConnection, true);
        }

        echo "Connected to FTP server successfully\n";
    }

    public function disconnect()
    {
        if ($this->ftpConnection) {
            ftp_close($this->ftpConnection);
            echo "Disconnected from FTP server\n";
        }
    }

    public function deploy()
    {
        echo "Starting deployment...\n";
        
        // Change to remote directory
        if (!ftp_chdir($this->ftpConnection, $this->config['remote_path'])) {
            throw new Exception("Failed to change to remote directory: " . $this->config['remote_path']);
        }

        // Upload files
        $this->uploadDirectory('.', '');

        echo "Deployment completed successfully!\n";
    }

    private function uploadDirectory($localPath, $remotePath)
    {
        $items = scandir($localPath);
        
        foreach ($items as $item) {
            if ($item === '.' || $item === '..') {
                continue;
            }

            $fullLocalPath = $localPath . '/' . $item;
            $fullRemotePath = $remotePath . '/' . $item;

            if ($this->shouldExclude($fullLocalPath)) {
                echo "Skipping: {$fullLocalPath}\n";
                continue;
            }

            if (is_dir($fullLocalPath)) {
                $this->createRemoteDirectory($fullRemotePath);
                $this->uploadDirectory($fullLocalPath, $fullRemotePath);
            } else {
                $this->uploadFile($fullLocalPath, $fullRemotePath);
            }
        }
    }

    private function shouldExclude($path)
    {
        $normalizedPath = str_replace('\\', '/', $path);
        
        // Check excluded paths
        foreach ($this->excludedPaths as $excludedPath) {
            if (strpos($normalizedPath, $excludedPath) !== false) {
                return true;
            }
        }

        // Check excluded extensions
        $extension = pathinfo($path, PATHINFO_EXTENSION);
        if (in_array($extension, $this->excludedExtensions)) {
            return true;
        }

        return false;
    }

    private function createRemoteDirectory($remotePath)
    {
        if (!ftp_mkdir($this->ftpConnection, $remotePath)) {
            // Directory might already exist, which is fine
            echo "Note: Directory {$remotePath} might already exist\n";
        }
        echo "Created directory: {$remotePath}\n";
    }

    private function uploadFile($localPath, $remotePath)
    {
        echo "Uploading: {$localPath} -> {$remotePath}\n";
        
        if (!ftp_put($this->ftpConnection, $remotePath, $localPath, FTP_BINARY)) {
            throw new Exception("Failed to upload file: {$localPath}");
        }
    }

    public function optimizeForProduction()
    {
        echo "Optimizing application for production...\n";
        
        // Clear Laravel caches
        $commands = [
            'php artisan config:clear',
            'php artisan config:cache',
            'php artisan route:clear',
            'php artisan route:cache',
            'php artisan view:clear',
            'php artisan view:cache',
            'php artisan optimize'
        ];

        foreach ($commands as $command) {
            echo "Running: {$command}\n";
            shell_exec($command);
        }

        // Build assets
        echo "Building frontend assets...\n";
        shell_exec('npm run build');

        echo "Production optimization completed\n";
    }
}

// Usage example
if (php_sapi_name() === 'cli') {
    try {
        $deployment = new FTPDeployment();
        
        // Optional: Optimize for production before deployment
        if (in_array('--optimize', $argv)) {
            $deployment->optimizeForProduction();
        }
        
        $deployment->connect();
        $deployment->deploy();
        $deployment->disconnect();
        
    } catch (Exception $e) {
        echo "Deployment failed: " . $e->getMessage() . "\n";
        exit(1);
    }
}
