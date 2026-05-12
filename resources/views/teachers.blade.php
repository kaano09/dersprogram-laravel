@extends('layouts.app')

@section('title', 'Öğretmenler')

@section('content')
<div class="container">
    <div class="header-actions">
        <div>
            <h1>Öğretmen Yönetimi</h1>
            <p style="color: #94a3b8;">Sisteme öğretmen ekleyip, hangi branşta olduğunu ayarlayabilirsiniz.</p>
        </div>
        <button class="btn btn-primary" onclick="saveTeachers()">
            <i class="fa-solid fa-floppy-disk"></i> Değişiklikleri Kaydet
        </button>
    </div>
    
    <div class="glass-panel" style="margin-bottom: 2rem;">
        <h3>Yeni Öğretmen Ekle</h3>
        <div style="display: flex; gap: 1rem; align-items: flex-end; flex-wrap: wrap;">
            <div class="form-group" style="margin-bottom: 0; flex: 1; min-width: 200px;">
                <label for="teacherName">Ad Soyad</label>
                <input type="text" id="teacherName" placeholder="Örn: Ahmet Yılmaz">
            </div>
            <div class="form-group" style="margin-bottom: 0; flex: 1; min-width: 200px;">
                <label for="teacherBranch">Branş (Bölüm veya Ortak Ders)</label>
                <select id="teacherBranch" onchange="handleBranchSelect()">
                    <optgroup label="Ortak / Kültür Dersleri (A'dan Z'ye Ana Branşlar)">
                        <option value="Ortak">Ortak (Genel Kültür)</option>
                        <option value="Türk Dili ve Edebiyatı">Türk Dili ve Edebiyatı</option>
                        <option value="Tarih">Tarih</option>
                        <option value="Matematik">Matematik</option>
                        <option value="Fizik">Fizik</option>
                        <option value="Kimya">Kimya</option>
                        <option value="Biyoloji">Biyoloji</option>
                        <option value="Coğrafya">Coğrafya</option>
                        <option value="İngilizce">İngilizce</option>
                        <option value="Din Kültürü">Din Kültürü</option>
                        <option value="Beden Eğitimi">Beden Eğitimi</option>
                        <option value="Rehberlik">Rehberlik</option>
                    </optgroup>
                    <optgroup label="Meslek ve Teknik Alanlar">
                        <option value="Bilişim">Bilişim Teknolojileri Alanı</option>
                        <option value="Motor">Motorlu Araçlar Teknolojisi Alanı</option>
                        <option value="Elektrik">Elektrik-Elektronik Teknolojisi Alanı</option>
                        <option value="Otomasyon">Endüstriyel Otomasyon Alanı</option>
                    </optgroup>
                </select>
            </div>
            <div class="form-group" id="subBranchGroup" style="margin-bottom: 0; flex: 1; min-width: 200px; display: none;">
                <label for="subBranch">Alan Dersini Seçin</label>
                <select id="subBranch">
                    <!-- JS ile dolacak -->
                </select>
            </div>
            <button class="btn btn-success" onclick="addTeacher()">
                <i class="fa-solid fa-plus"></i> Ekle
            </button>
        </div>
    </div>

    <div class="glass-panel">
        <h3>Mevcut Öğretmenler</h3>
        <div id="teachersList" style="margin-top: 1rem; display: grid; gap: 1rem;">
            <!-- Öğretmenler buraya JS ile yüklenecek -->
        </div>
    </div>
</div>

<!-- Toast Notification -->
<div id="toast" class="toast">Kaydedildi!</div>
@endsection

@push('scripts')
<script>
    function handleBranchSelect() {
        const branch = document.getElementById('teacherBranch').value;
        const subGrp = document.getElementById('subBranchGroup');
        const subSel = document.getElementById('subBranch');
        
        if (branch === 'Bilişim' || branch === 'Motor' || branch === 'Elektrik' || branch === 'Otomasyon') {
            subGrp.style.display = 'block';
            subSel.innerHTML = '';
            const lessons = BASE_LESSONS[branch];
            lessons.forEach(l => {
                const opt = document.createElement('option');
                opt.value = l;
                opt.textContent = l;
                subSel.appendChild(opt);
            });
        } else {
            subGrp.style.display = 'none';
        }
    }

    // Sayfa yüklendiğinde öğretmenleri listele
    document.addEventListener('DOMContentLoaded', () => {
        renderTeachers();
        handleBranchSelect();
    });
</script>
@endpush
