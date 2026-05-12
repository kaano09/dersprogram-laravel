@extends('layouts.app')

@section('title', 'Ana Sayfa')

@section('content')
<div class="container">
    <h1>Hoş Geldiniz</h1>
    <p style="color: #94a3b8; margin-bottom: 2rem;">Meslek lisesi bölümleri ve ortak dersler için program yönetim paneline ulaştınız.</p>
    
    <div class="dashboard-grid">
        <a href="{{ route('teachers') }}" class="glass-panel dashboard-card">
            <i class="fa-solid fa-chalkboard-user"></i>
            <h2>Öğretmen Ayarları</h2>
            <p style="color: #94a3b8; font-size: 0.9rem;">Kurumda çalışan öğretmenleri ekleyin, silin ve yönetin.</p>
        </a>
        
        <a href="{{ route('schedule') }}" class="glass-panel dashboard-card" style="border-color: rgba(59, 130, 246, 0.3);">
            <i class="fa-solid fa-calendar-days"></i>
            <h2>Program Hazırla</h2>
            <p style="color: #64748b; font-size: 0.9rem;">Bilişim, Motor, Elektrik meslek dersleri ve normal lise derslerini kullanarak ders programı oluşturun.</p>
        </a>
        
        <a href="{{ route('view-all') }}" class="glass-panel dashboard-card" style="border-color: rgba(16, 185, 129, 0.3);">
            <i class="fa-solid fa-eye"></i>
            <h2>Tüm Programlar</h2>
            <p style="color: #64748b; font-size: 0.9rem;">Tüm sınıflara ait hazırlanmış olan ders programlarını toplu halde görüntüleyin veya yazdırın.</p>
        </a>
    </div>
</div>
@endsection
