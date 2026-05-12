@extends('layouts.app')

@section('title', 'Ayarlar')

@section('content')
<div class="container">
    <div class="header-actions">
        <div>
            <h1>Yönetici Ayarları</h1>
            <p style="color: #64748b;">Siteye yönetici girişini yapabilecek yetkili hesapları ekleyin veya silin.</p>
        </div>
        <button class="btn btn-primary" onclick="saveAdminsLocally()">
            <i class="fa-solid fa-floppy-disk"></i> Değişiklikleri Kaydet
        </button>
    </div>
    
    <div class="glass-panel" style="margin-bottom: 2rem;">
        <h3>Yeni Yetkili Ekle</h3>
        <div style="display: flex; gap: 1rem; align-items: flex-end; flex-wrap: wrap;">
            <div class="form-group" style="margin-bottom: 0; flex: 1; min-width: 200px;">
                <label for="adminUser">Kullanıcı Adı</label>
                <input type="text" id="adminUser" placeholder="Örn: mehmet_mudur">
            </div>
            <div class="form-group" style="margin-bottom: 0; flex: 1; min-width: 200px;">
                <label for="adminPass">Şifre</label>
                <input type="text" id="adminPass" placeholder="Şifre belirleyin">
            </div>
            <button class="btn btn-success" onclick="addAdmin()">
                <i class="fa-solid fa-plus"></i> Ekle
            </button>
        </div>
    </div>

    <div class="glass-panel">
        <h3>Kayıtlı Yetkililer</h3>
        <div id="adminsList" style="margin-top: 1rem; display: grid; gap: 1rem;">
            <!-- Yöneticiler js ile buraya eklenecek -->
        </div>
    </div>
</div>

<!-- Toast Notification -->
<div id="toast" class="toast">Kaydedildi!</div>
@endsection

@push('scripts')
<script>
    document.addEventListener('DOMContentLoaded', () => {
        renderAdmins();
    });

    function addAdmin() {
        const userInp = document.getElementById('adminUser').value.trim();
        const passInp = document.getElementById('adminPass').value.trim();
        
        if (!userInp || !passInp) return alert("Kullanıcı adı ve şifre boş bırakılamaz!");
        // Check if exists
        if (admins.find(a => a.user === userInp)) return alert("Bu kullanıcı adı zaten mevcut!");

        admins.push({ user: userInp, pass: passInp });
        saveAdminsLocallyRaw();
        renderAdmins();
        document.getElementById('adminUser').value = '';
        document.getElementById('adminPass').value = '';
        showToast("Yetkili Eklendi!");
    }

    function deleteAdmin(user) {
        if(admins.length <= 1) return alert("En az 1 yönetici sistemi idare etmelidir, silinemez!");
        if(confirm(user + " yetkilisini silmek istediğinize emin misiniz?")) {
            admins = admins.filter(a => a.user !== user);
            saveAdminsLocallyRaw();
            renderAdmins();
            showToast("Yetkili Silindi!");
        }
    }

    function saveAdminsLocallyRaw() {
        localStorage.setItem('admins', JSON.stringify(admins));
    }

    function saveAdminsLocally() {
        saveAdminsLocallyRaw();
        showToast("Tüm yönetici bilgileri kaydedildi!");
    }

    function renderAdmins() {
        const list = document.getElementById('adminsList');
        if(!list) return;
        list.innerHTML = '';
        
        admins.forEach(a => {
            const div = document.createElement('div');
            div.style.display = 'flex';
            div.style.justifyContent = 'space-between';
            div.style.alignItems = 'center';
            div.style.padding = '1rem';
            div.style.background = 'rgba(255,255,255,0.05)';
            div.style.borderRadius = '8px';
            div.style.border = '1px solid var(--glass-border)';

            div.innerHTML = `
                <div>
                    <strong><i class="fa-solid fa-user-shield"></i> ${a.user}</strong>
                    <span style="color:#64748b; margin-left:10px;">Şifre: ${a.pass}</span>
                </div>
                <button class="btn btn-danger" style="padding: 0.5rem 1rem;" onclick="deleteAdmin('${a.user}')">
                    <i class="fa-solid fa-trash"></i>
                </button>
            `;
            list.appendChild(div);
        });
    }
</script>
@endpush
