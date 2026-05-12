<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'AhiEvran Yönetim Paneli') - AhiEvran Program Oluşturucu</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>
    @auth
    <nav class="navbar">
        <div style="font-weight: 600; font-size: 1.2rem; display: flex; align-items: center; gap: 10px;">
            <img src="{{ asset('img/logo.jpg') }}" alt="Logo" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover; border: 2px solid var(--primary-color);">
            AhiEvran Yönetim Paneli
        </div>
        <div class="nav-links">
            <a href="{{ route('home') }}" style="color: {{ Route::is('home') ? 'var(--primary-color)' : 'inherit' }};">Ana Sayfa</a>
            <a href="{{ route('teachers') }}" style="color: {{ Route::is('teachers') ? 'var(--primary-color)' : 'inherit' }};">Öğretmenler</a>
            <a href="{{ route('schedule') }}" style="color: {{ Route::is('schedule') ? 'var(--primary-color)' : 'inherit' }};">Program Hazırla</a>
            <a href="{{ route('ayarlar') }}" style="color: {{ Route::is('ayarlar') ? 'var(--primary-color)' : 'inherit' }};">Ayarlar</a>
            <a href="#" onclick="event.preventDefault(); toggleTheme()"><i class="fa-solid fa-moon"></i> Tema</a>
            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
            </form>
            <a href="#" onclick="event.preventDefault(); document.getElementById('logout-form').submit();" style="color: var(--danger-color);"><i class="fa-solid fa-power-off"></i> Çıkış</a>
        </div>
    </nav>
    @endauth

    @yield('content')

    <!-- Logic scripts -->
    <script src="{{ asset('js/main.js') }}"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => { applySavedTheme(); });
    </script>
    @stack('scripts')
</body>
</html>
