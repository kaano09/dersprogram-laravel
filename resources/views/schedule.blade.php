@extends('layouts.app')

@section('title', 'Program Hazırla')

@section('content')
<div class="container" style="max-width: 1400px;">
    <div class="header-actions">
        <div style="flex: 1;">
            <h1>Ders Programı Düzenleyici</h1>
            <p style="color: #94a3b8; margin-bottom: 1rem;">Dersleri sağdaki takvime sürükleyip bırakarak programı oluşturun. Sınıfınızı seçmeyi unutmayın.</p>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: flex-end;">
                <div class="form-group" style="margin-bottom: 0;">
                    <label>Sınıf / Şube Seçin</label>
                    <select id="classSelector" onchange="changeClass()"></select>
                </div>
                <div class="form-group" style="margin-bottom: 0;">
                    <label>Sınıf Öğretmeni</label>
                    <select id="classTeacherSelector" onchange="saveClassTeacher()">
                        <!-- JS ile dolacak -->
                    </select>
                </div>
                <button class="btn btn-primary" onclick="saveSchedule()">
                    <i class="fa-solid fa-save"></i> Programı Kaydet
                </button>
            </div>
        </div>
        <div style="align-self: flex-end; display: flex;">
            <button class="btn btn-success" onclick="autoGenerateSchedule()" style="margin-right: 10px;">
                <i class="fa-solid fa-wand-magic-sparkles"></i> Otomatik Dağıt
            </button>
            <button class="btn btn-danger" onclick="clearSchedule()">
                <i class="fa-solid fa-trash"></i> Temizle
            </button>
        </div>
    </div>

    <div class="schedule-container">
        <!-- Sol Panel: Dersler ve Öğretmenler -->
        <div class="glass-panel course-box">
            <h3>Kategoriler</h3>
            <div class="tab-buttons">
                <button class="tab-btn active" onclick="filterCategory('Meslek')">Meslek Dersleri</button>
                <button class="tab-btn" onclick="filterCategory('Ortak')">Kültür Dersleri</button>
            </div>
            
            <h4 style="margin-bottom: 0.5rem; margin-top: 1rem; color: #cbd5e1;">Bu Bölümdeki Öğretmenler</h4>
            <div id="lessonsList">
                <!-- Sürüklenebilir Dersler Buraya Gelecek -->
            </div>
        </div>

        <!-- Sağ Panel: Ders Programı Tablosu -->
        <div class="glass-panel">
            <table class="timetable">
                <thead>
                    <tr>
                        <th>Saat</th>
                        <th>Pazartesi</th>
                        <th>Salı</th>
                        <th>Çarşamba</th>
                        <th>Perşembe</th>
                        <th>Cuma</th>
                    </tr>
                </thead>
                <tbody id="scheduleBody">
                    <!-- Satırlar JS ile oluşturulacak 1. Saat, 2. Saat vs. -->
                </tbody>
            </table>
        </div>
    </div>
</div>

<!-- Toast Notification -->
<div id="toast" class="toast">Kaydedildi!</div>
@endsection

@push('scripts')
<script>
    document.addEventListener('DOMContentLoaded', () => {
        initSchedule();
    });
</script>
@endpush
