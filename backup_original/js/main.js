// --- VERİ MODELİ VE DEPOLAMA ---

// Varsayılan Sabit Dersler (Bölümlere Göre)
const BASE_LESSONS = {
    'Ortak': ['Türk Dili ve Edebiyatı', 'Tarih', 'Matematik', 'Fizik', 'Kimya', 'Biyoloji', 'İngilizce', 'Coğrafya', 'Din Kültürü', 'Beden Eğitimi', 'Rehberlik'],
    'Bilişim': ['Programlama Temelleri', 'Web Tasarım ve Programlama', 'Grafik ve Animasyon', 'Ağ ve Sistem Yönetimi', 'Veritabanı Organizasyonu'],
    'Motor': ['Motor Mekaniği', 'Otomotiv Elektromekanik', 'Dizel Yakıt Sistemleri', 'Araç Teknolojisi', 'İş Güvenliği'],
    'Elektrik': ['Elektrik Devreleri', 'Tesisat Çizimi', 'Pano Tasarımı ve Montajı', 'Endüstriyel Kontrol', 'Zayıf Akım Tesisleri'],
    'Otomasyon': ['Otomatik Kontrol Sistemleri', 'PLC Programlama', 'Robotik Sensörler', 'Pnömatik Sistemler', 'Mekatronik Temelleri']
};

let teachers = JSON.parse(localStorage.getItem('teachers')) || [];

// Okul öğretmenleri veritabanı (Zorunlu liste)
const defaultTeachers = [
    { id: generateId(), name: "Meltem CESUR", branch: "Bilişim" },
        { id: generateId(), name: "Ertan GÜNEŞ", branch: "Bilişim" },
        { id: generateId(), name: "Emrah UZUN", branch: "Bilişim" },
        { id: generateId(), name: "Tuğba UZUN AK", branch: "Bilişim" },
        { id: generateId(), name: "Barış SADIKOĞLU", branch: "Bilişim" },
        { id: generateId(), name: "Müjgan AVCIOĞULLARI", branch: "Bilişim" },
        { id: generateId(), name: "Cenk KARACAN", branch: "Bilişim" },
        { id: generateId(), name: "Emine BAYSAL", branch: "Bilişim" },
        { id: generateId(), name: "Erol ALTEKİN", branch: "Bilişim" },
        { id: generateId(), name: "İbrahim HALAVURT", branch: "Bilişim" },
        { id: generateId(), name: "Recep YAVUZ", branch: "Bilişim" },
        { id: generateId(), name: "Melike GÜNEŞ", branch: "Bilişim" },
        { id: generateId(), name: "Ali Hadi ÖZKIR", branch: "Bilişim" },

        { id: generateId(), name: "Onur ÖZ", branch: "Elektrik" },
        { id: generateId(), name: "Cem MERDİN", branch: "Elektrik" },
        { id: generateId(), name: "Hasan ÇOLAKOĞLU", branch: "Elektrik" },
        { id: generateId(), name: "İlker DOĞANAY", branch: "Elektrik" },
        { id: generateId(), name: "İsmail TURA", branch: "Elektrik" },
        { id: generateId(), name: "Recep ARINÇ", branch: "Elektrik" },
        { id: generateId(), name: "Şükriye DOĞANAY", branch: "Elektrik" },
        { id: generateId(), name: "Serkan ÇIBIKÇI", branch: "Elektrik" },
        { id: generateId(), name: "Erkan ÖZKAN", branch: "Elektrik" },
        { id: generateId(), name: "Erkan ÖZYILMAZ", branch: "Elektrik" },
        { id: generateId(), name: "Turhan ÇAVAÇ", branch: "Elektrik" },
        { id: generateId(), name: "Fatih CEBECİ", branch: "Elektrik" },
        { id: generateId(), name: "Halil KESİM", branch: "Elektrik" },
        { id: generateId(), name: "Hatice Kübra ULUDAĞ", branch: "Elektrik" },
        { id: generateId(), name: "Vural DİNDAR", branch: "Elektrik" },
        { id: generateId(), name: "Ammar KAYA", branch: "Otomasyon" },
        { id: generateId(), name: "Halil İbrahim GÜRBÜZ", branch: "Otomasyon" },
        { id: generateId(), name: "Yusuf KURT", branch: "Otomasyon" },
        { id: generateId(), name: "Salih KIR", branch: "Otomasyon" },

        { id: generateId(), name: "Mehmet KESKİN", branch: "Motor" },
        { id: generateId(), name: "Serkan TÖNGELCİ", branch: "Motor" },
        { id: generateId(), name: "Taner KEREM", branch: "Motor" },
        { id: generateId(), name: "Sami TÜKEK", branch: "Motor" },
        { id: generateId(), name: "Adem CAN", branch: "Motor" },
        { id: generateId(), name: "Emre ÖZTÜRK", branch: "Motor" },
        { id: generateId(), name: "Erkan AKKOYUNLU", branch: "Motor" },
        { id: generateId(), name: "Yasin BARUT", branch: "Motor" },

        { id: generateId(), name: "Ahmet AKIN", branch: "Biyoloji" },
        { id: generateId(), name: "Abdulkerim KUŞMAN", branch: "Biyoloji" },
        { id: generateId(), name: "Merve MARANGOZ", branch: "Biyoloji" },

        { id: generateId(), name: "Gamze GÜLEN", branch: "Coğrafya" },
        { id: generateId(), name: "Burcu MEZGİL ARICI", branch: "Coğrafya" },

        { id: generateId(), name: "Sena TORLAK", branch: "Felsefe" },

        { id: generateId(), name: "Feriha AYDEMİR", branch: "Fizik" },
        { id: generateId(), name: "Kadir ÖZÜPAK", branch: "Fizik" },
        { id: generateId(), name: "Şerife DÖKME", branch: "Fizik" },

        { id: generateId(), name: "Ahmet GÜNARSLAN", branch: "İngilizce" },
        { id: generateId(), name: "Haşim NASIRLI", branch: "İngilizce" },
        { id: generateId(), name: "Aylin ŞEN", branch: "İngilizce" },
        { id: generateId(), name: "Başak BABACAN", branch: "İngilizce" },

        { id: generateId(), name: "Ece EROĞLU", branch: "Kimya" },
        { id: generateId(), name: "Elif KÜÇÜKÇAKAN", branch: "Kimya" },

        { id: generateId(), name: "Ebru ÖZDEMİR CAN", branch: "Matematik" },
        { id: generateId(), name: "Enes ÖZEL", branch: "Matematik" },
        { id: generateId(), name: "Sezgi GAZİ TUNA", branch: "Matematik" },
        { id: generateId(), name: "Fulya HASANÇEBİOĞLU", branch: "Matematik" },
        { id: generateId(), name: "Handan KARAHAN TAŞDEMİR", branch: "Matematik" },
        { id: generateId(), name: "Nevin GÜNEY", branch: "Matematik" },
        { id: generateId(), name: "Zübeyde TUĞLU GÜNAŞTI", branch: "Matematik" },

        { id: generateId(), name: "Mehmet ÇAKIR", branch: "Tarih" },
        { id: generateId(), name: "Sinem ERTAŞ", branch: "Tarih" },
        { id: generateId(), name: "Çağla NACAR", branch: "Tarih" },
        { id: generateId(), name: "Ayşe Gül ÖZİÇ", branch: "Tarih" },
        { id: generateId(), name: "Özlem YILMAZ ORAK", branch: "Tarih" },

        { id: generateId(), name: "Emine BAŞARAN", branch: "Türk Dili ve Edebiyatı" },
        { id: generateId(), name: "Habib ÇAPLI", branch: "Türk Dili ve Edebiyatı" },
        { id: generateId(), name: "Name AKINCI", branch: "Türk Dili ve Edebiyatı" },
        { id: generateId(), name: "Zehra ŞENAD", branch: "Türk Dili ve Edebiyatı" },
        { id: generateId(), name: "Vildan HAYKIR", branch: "Türk Dili ve Edebiyatı" },

        { id: generateId(), name: "Feyzanur KAYAN", branch: "Din Kültürü" },
        { id: generateId(), name: "Nafiye Yeşil ALAGÖZ", branch: "Din Kültürü" },
        { id: generateId(), name: "Züleyha ULAŞ", branch: "Din Kültürü" },

        { id: generateId(), name: "Muhammed EMRE", branch: "Beden Eğitimi" },
        { id: generateId(), name: "İsmail İSTİM", branch: "Beden Eğitimi" },
        { id: generateId(), name: "Betül AYDIN GENÇ", branch: "Rehberlik" }
];

// Kullanıcıdan gelen sil-ekle isteğine göre veriyi SIFIRLAYARAK kaydet
// Bir kere yüklenmiş mi diye bayrak atıyoruz (refresh ile silinmemesi için)
if (!localStorage.getItem('v3_teachers_force_loaded')) {
    localStorage.setItem('teachers', JSON.stringify(defaultTeachers));
    localStorage.setItem('v3_teachers_force_loaded', 'true');
    teachers = defaultTeachers;
}

// Orijinal varsayılan sahte öğretmenleri sil (varsa kalıntılar vb)
teachers = teachers.filter(t => !["Ahmet Hoca (Ortak)", "Ayşe Hoca (Bilişim)", "Mehmet Hoca (Motor)", "Ali Hoca (Elektrik)"].includes(t.name));
localStorage.setItem('teachers', JSON.stringify(teachers));

// Tüm sınıfların listesi
const CLASSES_LIST = [
    '9-A Bilişim', '9-B Motor', '9-C Elektrik', 
    '10-A Bilişim', '10-B Motor', '10-C Elektrik',
    '11-A Bilişim', '11-B Motor', '11-C Elektrik',
    '12-A Bilişim', '12-B Motor', '12-C Elektrik'
];

let allScheduleData = JSON.parse(localStorage.getItem('allScheduleData')) || {}; 
let activeClassName = CLASSES_LIST[0]; // Varsayılan seçim

let scheduleData = JSON.parse(JSON.stringify(allScheduleData[activeClassName] || {}));
// scheduleData yapısı: { "1-Pazartesi": {teacherName, lessonName, branch}, ... }

const DAYS = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'];
const HOURS = 10; // Günde 10 saat

let classTeachers = JSON.parse(localStorage.getItem('classTeachers')) || {};

// --- YARDIMCI FONKSİYONLAR ---
function showToast(message) {
    const toast = document.getElementById('toast');
    if(toast) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// rastgele id üretici
function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

// --- ÖĞRETMEN YÖNETİMİ (teachers.html) ---

function addTeacher() {
    const nameInput = document.getElementById('teacherName');
    const branchInput = document.getElementById('teacherBranch');
    
    if(!nameInput || !branchInput) return;
    
    const name = nameInput.value.trim();
    let branch = branchInput.value;
    const subGroup = document.getElementById('subBranchGroup');
    const subSelect = document.getElementById('subBranch');

    if (subGroup && subGroup.style.display !== 'none' && subSelect) {
        branch = subSelect.value;
    }
    
    if (branch === 'Ortak (Matematik, Tarih vb.)') {
        branch = 'Ortak';
    }

    if (!name) {
        alert("Lütfen öğretmen adını girin!");
        return;
    }

    const newTeacher = {
        id: generateId(),
        name: name,
        branch: branch
    };

    teachers.push(newTeacher);
    saveTeachersLocally();
    nameInput.value = '';
    renderTeachers();
    showToast("Öğretmen eklendi!");
}

function deleteTeacher(id) {
    if(confirm("Bu öğretmeni silmek istediğinize emin misiniz?")) {
        teachers = teachers.filter(t => t.id !== id);
        saveTeachersLocally();
        renderTeachers();
        showToast("Öğretmen silindi.");
    }
}

function saveTeachersLocally() {
    localStorage.setItem('teachers', JSON.stringify(teachers));
}

function saveTeachers() {
    showToast("Değişiklikler Kaydedildi!");
}

function renderTeachers() {
    const list = document.getElementById('teachersList');
    if (!list) return;

    list.innerHTML = '';
    if (teachers.length === 0) {
        list.innerHTML = '<p style="color:#94a3b8; font-style:italic;">Henüz öğretmen eklenmemiş.</p>';
        return;
    }

    teachers.forEach(t => {
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.alignItems = 'center';
        div.style.padding = '1rem';
        div.style.background = 'rgba(255,255,255,0.05)';
        div.style.borderRadius = '8px';
        div.style.border = '1px solid var(--glass-border)';

        const isCulture = BASE_LESSONS['Ortak'] && BASE_LESSONS['Ortak'].includes(t.branch);
        const isBilisim = t.branch === 'Bilişim' || (BASE_LESSONS['Bilişim'] && BASE_LESSONS['Bilişim'].includes(t.branch));
        const isMotor = t.branch === 'Motor' || (BASE_LESSONS['Motor'] && BASE_LESSONS['Motor'].includes(t.branch));
        const isElektrik = t.branch === 'Elektrik' || (BASE_LESSONS['Elektrik'] && BASE_LESSONS['Elektrik'].includes(t.branch));

        const branchBadgeColor = isCulture ? '#475569' : 
                               isBilisim ? '#3b82f6' : 
                               isMotor ? '#ef4444' : 
                               isElektrik ? '#f59e0b' : '#333';

        let displayBranch = t.branch;
        if(t.branch === 'Bilişim') displayBranch = 'Bilişim Teknolojileri';
        if(t.branch === 'Motor') displayBranch = 'Motorlu Araçlar Tek.';
        if(t.branch === 'Elektrik') displayBranch = 'Elektrik-Elektronik Tek.';
        if(t.branch === 'Ortak') displayBranch = 'Kültür Dersleri (Genel)';

        div.innerHTML = `
            <div>
                <strong>${t.name}</strong>
                <span style="background:${branchBadgeColor}; margin-left:10px; padding:2px 8px; border-radius:12px; font-size:0.8rem; color: white;">${displayBranch}</span>
            </div>
            <button class="btn btn-danger" style="padding: 0.5rem 1rem;" onclick="deleteTeacher('${t.id}')">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;
        list.appendChild(div);
    });
}


// --- DERS PROGRAMI & SÜRÜKLE BIRAK (schedule.html) ---

let dragItemData = null; // Sürüklenen öğenin verisini tutar
let activeCategoryFilter = 'Meslek';

function initSchedule() {
    populateClassSelector();
    activeClassName = document.getElementById('classSelector').value;
    scheduleData = JSON.parse(JSON.stringify(allScheduleData[activeClassName] || {}));
    
    populateClassTeacherSelector(); // Yeni eklenen sınıf öğrt ataması
    
    renderScheduleGrid();
    filterCategory(activeCategoryFilter);
}

function populateClassTeacherSelector() {
    const sel = document.getElementById('classTeacherSelector');
    if (!sel) return;
    sel.innerHTML = '<option value="">(Atanmadı)</option>';
    teachers.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t.name;
        opt.textContent = t.name;
        sel.appendChild(opt);
    });
    
    if (classTeachers[activeClassName]) {
        sel.value = classTeachers[activeClassName];
    }
}

function saveClassTeacher() {
    const sel = document.getElementById('classTeacherSelector');
    if (sel) {
        classTeachers[activeClassName] = sel.value;
        localStorage.setItem('classTeachers', JSON.stringify(classTeachers));
        showToast("Sınıf Öğretmeni Kaydedildi!");
    }
}

function populateClassSelector() {
    const selector = document.getElementById('classSelector');
    if (!selector) return;
    selector.innerHTML = '';
    CLASSES_LIST.forEach(cls => {
        const option = document.createElement('option');
        option.value = cls;
        option.textContent = cls;
        selector.appendChild(option);
    });
}

function changeClass() {
    activeClassName = document.getElementById('classSelector').value;
    scheduleData = JSON.parse(JSON.stringify(allScheduleData[activeClassName] || {}));
    populateClassTeacherSelector();
    renderScheduleGrid();
    filterCategory(activeCategoryFilter);
}

function renderScheduleGrid() {
    const tbody = document.getElementById('scheduleBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    for (let hour = 1; hour <= HOURS; hour++) {
        const tr = document.createElement('tr');
        
        const thHour = document.createElement('th');
        thHour.textContent = hour + ". Saat";
        tr.appendChild(thHour);
        
        DAYS.forEach(day => {
            const td = document.createElement('td');
            td.className = 'drop-zone';
            td.id = `${hour}-${day}`;

            const item = scheduleData[td.id];
            if (item) {
                let bgColor = '#333';
                if(item.branch === 'Bilişim') bgColor = '#3b82f6';
                if(item.branch === 'Motor') bgColor = '#ef4444';
                if(item.branch === 'Elektrik') bgColor = '#f59e0b';
                if(item.branch === 'Otomasyon') bgColor = '#8b5cf6';
                if(item.branch === 'Ortak' || BASE_LESSONS['Ortak'].includes(item.branch)) bgColor = '#475569';

                let blockHtml = `
                    <div class="lesson-block" style="border: 1px solid ${bgColor}; background: ${bgColor}20;">
                        <div style="font-weight: 600; font-size: 0.85rem; margin-bottom: 4px; color: ${bgColor}; filter: brightness(0.85);">${item.lessonName}</div>
                        <div style="font-size: 0.75rem; color: var(--text-color); opacity: 0.85;">
                            ${item.teacherName}
                        </div>
                    </div>`;
                td.innerHTML = blockHtml;
                
                td.querySelector('.lesson-block').addEventListener('click', function(e) {
                    if(confirm("Bu dersi programdan kaldırmak istiyor musunuz?")) {
                        delete scheduleData[td.id];
                        renderScheduleGrid();
                    }
                });
            }

            td.addEventListener('dragover', handleDragOver);
            td.addEventListener('dragleave', handleDragLeave);
            td.addEventListener('drop', handleDrop);

            tr.appendChild(td);
        });
        
        tbody.appendChild(tr);
    }
}

function filterCategory(categoryOrType) {
    let targetFilter = 'Meslek';
    if(typeof categoryOrType === 'string') {
        targetFilter = categoryOrType;
    }

    activeCategoryFilter = targetFilter;
    
    const tabs = document.querySelectorAll('.tab-btn');
    if(tabs.length > 0) {
        tabs.forEach(btn => {
            if(targetFilter === 'Meslek' && btn.textContent.includes('Meslek')) {
                btn.classList.add('active');
            } else if (targetFilter === 'Ortak' && btn.textContent.includes('Kültür')) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    renderDraggableLessons(activeCategoryFilter);
}

function renderDraggableLessons(categoryOrType) {
    const list = document.getElementById('lessonsList');
    if (!list) return;

    list.innerHTML = '';
    
    if (categoryOrType === 'Meslek') {
        let branchKey = '';
        if (activeClassName.includes('Bilişim')) branchKey = 'Bilişim';
        if (activeClassName.includes('Motor')) branchKey = 'Motor';
        if (activeClassName.includes('Elektrik')) branchKey = 'Elektrik';

        const meslekLessons = BASE_LESSONS[branchKey] || [];
        const categoryTeachers = teachers.filter(t => t.branch === branchKey || meslekLessons.includes(t.branch));
        
        if (categoryTeachers.length === 0) {
            meslekLessons.forEach(lesson => renderTeacherDragBlock({ name: "Belirtilmedi", branch: lesson }, [lesson], list, branchKey));
        } else {
            categoryTeachers.forEach(teacher => {
                const lessonsToTeach = teacher.branch === branchKey ? meslekLessons : [teacher.branch];
                renderTeacherDragBlock(teacher, lessonsToTeach, list, branchKey);
            });
            const covered = categoryTeachers.map(t => t.branch);
            meslekLessons.forEach(lesson => {
                if(!covered.includes(lesson) && !covered.includes(branchKey)) {
                    renderTeacherDragBlock({ name: "Doldurulmadı", branch: lesson }, [lesson], list, branchKey);
                }
            });
        }
    } else {
        const cultureLessons = BASE_LESSONS['Ortak'] || [];
        const cultureTeachers = teachers.filter(t => cultureLessons.includes(t.branch) || t.branch === 'Ortak');
        
        if (cultureTeachers.length === 0) {
            cultureLessons.forEach(lesson => renderTeacherDragBlock({ name: "Belirtilmedi", branch: lesson }, [lesson], list, 'Ortak'));
        } else {
            cultureTeachers.forEach(teacher => {
                const lessonsToTeach = teacher.branch === 'Ortak' ? cultureLessons : [teacher.branch];
                renderTeacherDragBlock(teacher, lessonsToTeach, list, 'Ortak');
            });
            const covered = cultureTeachers.map(t => t.branch);
            cultureLessons.forEach(lesson => {
                if(!covered.includes(lesson) && !covered.includes('Ortak')) {
                    renderTeacherDragBlock({ name: "Doldurulmadı", branch: lesson }, [lesson], list, 'Ortak');
                }
            });
        }
    }
}

function renderTeacherDragBlock(teacher, lessonsToTeach, list, branchKey) {
    const teacherBlock = document.createElement('div');
    teacherBlock.style.marginBottom = '1.5rem';
    
    const teacherHeading = document.createElement('h5');
    teacherHeading.style.color = 'var(--primary-color)';
    teacherHeading.style.marginBottom = '0.5rem';
    teacherHeading.textContent = teacher.name;
    teacherBlock.appendChild(teacherHeading);

    lessonsToTeach.forEach(lesson => {
        const div = document.createElement('div');
        div.className = 'lesson-block';
        div.draggable = true;
        
        let bgColor = '#333';
        if(branchKey === 'Bilişim') bgColor = '#3b82f6';
        if(branchKey === 'Motor') bgColor = '#ef4444';
        if(branchKey === 'Elektrik') bgColor = '#f59e0b';
        if(branchKey === 'Otomasyon') bgColor = '#8b5cf6';
        if(branchKey === 'Ortak') bgColor = '#475569';
        
        div.style.borderLeft = `4px solid ${bgColor}`;
        
        const badgeHtml = branchKey !== 'Ortak' 
            ? `<div style="font-size: 0.7rem; background: ${bgColor}20; color: ${bgColor}; padding: 2px 6px; border-radius: 4px; display: inline-block;">${branchKey} Alanı</div>`
            : '';

        div.innerHTML = `
            <div style="font-weight: 600; margin-bottom: 5px; color: ${bgColor}; filter: brightness(0.85);">${lesson}</div>
            <div style="font-size: 0.8rem; margin-bottom: 5px; color: var(--text-color); opacity: 0.85;">
                <i class="fa-solid fa-user-tie"></i> ${teacher.name}
            </div>
            ${badgeHtml}
        `;
        
        div.addEventListener('dragstart', (e) => {
            dragItemData = {
                teacherName: teacher.name,
                lessonName: lesson,
                branch: branchKey
            };
            div.classList.add('dragging');
        });
        
        div.addEventListener('dragend', () => {
            dragItemData = null;
            div.classList.remove('dragging');
        });
        
        teacherBlock.appendChild(div);
    });

    list.appendChild(teacherBlock);
}

// -- Sürükle Bırak Mantığı --

function handleDragOver(e) {
    e.preventDefault(); 
    this.classList.add('hovered'); // CSS efekti
}

function handleDragLeave(e) {
    e.preventDefault();
    this.classList.remove('hovered');
}

function handleDrop(e) {
    e.preventDefault();
    this.classList.remove('hovered');
    
    if (!dragItemData) return;
    
    const cellId = this.id;
    const conflictClass = checkTeacherConflict(dragItemData.teacherName, cellId, activeClassName);
    if (conflictClass) {
        alert(`ÇAKIŞMA HATASI: ${dragItemData.teacherName} aynı gün ve saatte '${conflictClass}' sınıfında derse giriyor!`);
        return;
    }
    
    // Geçici olarak UI tarafında güncelle
    scheduleData[cellId] = dragItemData;
    
    // Ekranda güncelle
    this.innerHTML = '';
    appendDroppedItem(this, dragItemData, cellId);
}

function appendDroppedItem(container, data, cellId) {
    const item = document.createElement('div');
    item.className = 'dropped-item';
    
    let bgColor = 'rgba(255,255,255,0.1)';
    if(data.branch === 'Bilişim') bgColor = 'rgba(59, 130, 246, 0.2)';
    if(data.branch === 'Motor') bgColor = 'rgba(239, 68, 68, 0.2)';
    if(data.branch === 'Elektrik') bgColor = 'rgba(245, 158, 11, 0.2)';
    if(data.branch === 'Ortak') bgColor = 'rgba(100, 116, 139, 0.3)';

    item.style.background = bgColor;
    item.style.padding = '0.5rem';
    item.style.borderRadius = '4px';
    item.style.fontSize = '0.85rem';
    item.style.height = '100%';
    item.style.display = 'flex';
    item.style.flexDirection = 'column';
    item.style.justifyContent = 'center';

    item.innerHTML = `
        <div style="font-weight:bold; margin-bottom:4px;">${data.lessonName}</div>
        <div style="font-size:0.75rem; color:#cbd5e1;">${data.teacherName}</div>
        <button class="remove-btn" onclick="removeLessonFromGrid(event, '${cellId}')"><i class="fa-solid fa-xmark"></i></button>
    `;
    
    container.appendChild(item);
}

function removeLessonFromGrid(event, cellId) {
    event.stopPropagation();
    delete scheduleData[cellId];
    
    const td = document.getElementById(cellId);
    if(td) {
        td.innerHTML = '';
    }
}

function saveSchedule() {
    allScheduleData[activeClassName] = scheduleData;
    localStorage.setItem('allScheduleData', JSON.stringify(allScheduleData));
    showToast(`${activeClassName} Programı Kaydedildi!`);
}

function clearSchedule() {
    if(confirm(`${activeClassName} sınıfının tüm ders programını temizlemek istediğinize emin misiniz? Bu işlem geri alınamaz!`)) {
        scheduleData = {};
        allScheduleData[activeClassName] = scheduleData;
        localStorage.setItem('allScheduleData', JSON.stringify(allScheduleData));
        renderScheduleGrid();
        showToast("Program temizlendi!");
    }
}

function checkTeacherConflict(targetTeacherName, targetCellId, currentClass) {
    if (targetTeacherName === 'Belirtilmedi' || targetTeacherName === 'Doldurulmadı') return null;
    
    for (let className in allScheduleData) {
        if (className === currentClass) continue;
        const classSchedule = allScheduleData[className] || {};
        if (classSchedule[targetCellId] && classSchedule[targetCellId].teacherName === targetTeacherName) {
            return className;
        }
    }
    return null;
}

function autoGenerateSchedule() {
    if(confirm(`${activeClassName} sınıfı için rastgele program yerleştirilecek. Mevcut program silinsin mi?`)) {
        scheduleData = {};
        
        let branchKey = '';
        if (activeClassName.includes('Bilişim')) branchKey = 'Bilişim';
        if (activeClassName.includes('Motor')) branchKey = 'Motor';
        if (activeClassName.includes('Elektrik')) branchKey = 'Elektrik';

        const cultureLessons = BASE_LESSONS['Ortak'] || [];
        const cultureTeachersFiltered = teachers.filter(t => cultureLessons.includes(t.branch) || t.branch === 'Ortak');
        
        const meslekLessons = BASE_LESSONS[branchKey] || [];
        const meslekTeachersFiltered = teachers.filter(t => t.branch === branchKey || meslekLessons.includes(t.branch));

        let allAvailableTeachers = [];
        
        cultureTeachersFiltered.forEach(t => {
             const lessonsToTeach = t.branch === 'Ortak' ? cultureLessons : [t.branch];
             lessonsToTeach.forEach(l => {
                 allAvailableTeachers.push({ teacherName: t.name, lessonName: l, branch: 'Ortak' });
             });
        });

        meslekTeachersFiltered.forEach(t => {
             const lessonsToTeach = t.branch === branchKey ? meslekLessons : [t.branch];
             lessonsToTeach.forEach(l => {
                 allAvailableTeachers.push({ teacherName: t.name, lessonName: l, branch: branchKey });
             });
        });

        if (allAvailableTeachers.length === 0) {
            alert("Sisteme kayıtlı uygun öğretmen bulunamadığı için dağıtım yapılamaz!");
            return;
        }
        
        if (!classTeachers[activeClassName]) {
            const classCTPool = [...cultureTeachersFiltered, ...meslekTeachersFiltered];
            if(classCTPool.length > 0) {
                const rndT = classCTPool[Math.floor(Math.random() * classCTPool.length)];
                classTeachers[activeClassName] = rndT.name;
                localStorage.setItem('classTeachers', JSON.stringify(classTeachers));
                populateClassTeacherSelector();
            }
        }
        
        // Sınıf için her ders başına SABİT BİR ÖĞRETMEN kilitliyoruz.
        // Böylece 9-A sınıfında Biyolojiye hep A hocası, Matematiğe hep B hocası girer.
        const lockedTeachersForLessons = {};
        const uniqueLessons = [...new Set(allAvailableTeachers.map(l => l.lessonName))];
        
        uniqueLessons.forEach(lessonName => {
            const possible = allAvailableTeachers.filter(p => p.lessonName === lessonName);
            if (possible.length > 0) {
               const choosen = possible[Math.floor(Math.random() * possible.length)];
               lockedTeachersForLessons[lessonName] = choosen;
            }
        });
        
        const lockedPool = Object.values(lockedTeachersForLessons);

        for (let day of DAYS) {
            for (let hour = 1; hour <= HOURS; hour++) {
                const cellId = `${hour}-${day}`;
                
                const shuffledPool = [...lockedPool].sort(() => 0.5 - Math.random());
                
                for (let pick of shuffledPool) {
                    if (!checkTeacherConflict(pick.teacherName, cellId, activeClassName)) {
                        scheduleData[cellId] = pick;
                        break;
                    }
                }
            }
        }
        
        allScheduleData[activeClassName] = scheduleData;
        localStorage.setItem('allScheduleData', JSON.stringify(allScheduleData));
        
        renderScheduleGrid();
        showToast("Rastgele Program Oluşturuldu!");
    }
}

// --- TEMA KONTÜROLÜ ---
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}
