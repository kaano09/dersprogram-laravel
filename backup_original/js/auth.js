// Sistem yöneticileri (Varsayılan Kaan / 1234)
let admins = JSON.parse(localStorage.getItem('admins'));
if (!admins || admins.length === 0) {
    admins = [{ user: "kaan", pass: "1234" }];
    localStorage.setItem('admins', JSON.stringify(admins));
}

function checkAuth() {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    const currentPath = window.location.pathname;

    // Login sayfasındaysak ve zaten giriş yapılmışsa, anasayfaya yönlendir
    if (currentPath.endsWith('index.html') || currentPath === '/' || currentPath.endsWith('kaan/')) {
        if (isLoggedIn === "true") {
            window.location.replace("home.html");
        }
    } else {
        // Diğer sayfalardaysak ve giriş yapılmamışsa login sayfasına yönlendir
        if (isLoggedIn !== "true") {
            window.location.replace("index.html");
        }
    }
}

function handleLogin(e) {
    if(e) e.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    let validAdmin = admins.find(a => a.user === user && a.pass === pass);

    if (validAdmin) {
        sessionStorage.setItem("isLoggedIn", "true");
        window.location.replace("home.html");
    } else {
        alert("Hatalı kullanıcı adı veya şifre!");
    }
}

function handleLogout(e) {
    if(e) e.preventDefault();
    sessionStorage.removeItem("isLoggedIn");
    window.location.replace("index.html");
}

// Sayfa yüklendiğinde oturum kontrolü yap
document.addEventListener("DOMContentLoaded", checkAuth);
