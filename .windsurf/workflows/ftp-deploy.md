---
description: FTP deployment workflow for Laravel application
---

# FTP Deployment Workflow

This workflow handles FTP deployment of your Laravel application to a remote server.

## Prerequisites

1. PHP installed on your local machine
2. FTP access to your hosting server
3. Composer and Node.js dependencies installed

## Setup

1. **Configure FTP Settings**
   - Edit `ftp-config.json` with your FTP credentials:
     ```json
     {
         "host": "your-ftp-server.com",
         "port": 21,
         "username": "your-username",
         "password": "your-password",
         "remote_path": "/public_html",
         "passive": true,
         "ssl": false,
         "timeout": 30
     }
     ```

2. **Security Note**
   - Never commit `ftp-config.json` to version control
   - Add it to `.gitignore` if not already present

## Deployment Commands

### Basic Deployment
```bash
php deploy.php
```

### Production Deployment (with optimization)
```bash
php deploy.php --optimize
```

## What Gets Deployed

The deployment script automatically excludes:
- Development files: `node_modules`, `.git`, `tests`
- Configuration templates: `.env.example`
- Logs and cache files
- Backup directories
- Development tools: `phpunit.xml`, `README.md`

## Production Optimization

When using `--optimize` flag, the script will:
1. Clear Laravel caches
2. Cache configuration and routes
3. Optimize views
4. Run `php artisan optimize`
5. Build frontend assets with `npm run build`

## Deployment Process

1. **Connect** to FTP server using credentials from config
2. **Change** to remote directory specified in config
3. **Upload** all necessary files recursively
4. **Create** directories as needed on remote server
5. **Skip** excluded files and directories automatically

## Troubleshooting

### Connection Issues
- Verify FTP server details in `ftp-config.json`
- Check firewall settings
- Ensure passive mode is enabled if required

### Permission Issues
- Verify FTP user has write permissions
- Check remote directory permissions

### File Upload Failures
- Check available disk space on server
- Verify file size limits
- Ensure stable internet connection

## Security Best Practices

1. Use SFTP instead of FTP when possible (set `"ssl": true`)
2. Use strong FTP passwords
3. Limit FTP user permissions to necessary directories only
4. Regularly rotate FTP credentials
5. Monitor deployment logs for unusual activity

## Alternative Deployment Methods

For more robust deployments, consider:
- Git-based deployment
- CI/CD pipelines (GitHub Actions, GitLab CI)
- Docker containerization
- Platform-as-a-Service (Heroku, DigitalOcean App Platform)
