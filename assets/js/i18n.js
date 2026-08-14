const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About Me",
        nav_projects: "My Projects",
        nav_contact: "Contact",
        welcome: "Welcome!",
        intro1: "I'm Onur Demircan.",
        intro2: "I am a game developer and the founder of Gravity Vortex.",
        contact_title: "Let's Connect",
        contact_greeting: "I'm always open to discussing new projects or opportunities.",
        label_name: "Full Name:",
        label_email: "Email:",
        label_message: "Message:",
        btn_send: "Send",
        alert_sent: "Your message has been sent!",
        about_title: "About Me",
        about_p1: "I am a game developer.",
        about_p3: "I have improved my coding skills by working both individually and in groups. I continued to improve my skills by solving algorithms on the Leetcode platform. Thanks to the different groups I have worked with, I am prone to teamwork and can solve problems quickly with my analytical thinking skills.",
        show_more: "Show more...",
        show_less: "...show less",
        proj_filter: "Filter:",
        proj_oldest: "Oldest",
        proj_newest: "Newest",
        proj_title: "Projects",
        lbrs_desc: "A simple game that improves concentration. You try to reach the end by hitting rocks of the same color as the object you control and overcoming obstacles. You change the color of your object by passing through different colored panels.",
        medbot_desc: "A game we made in a bootcamp competition with a team of 5 people. You play a nanobot injected into the human body fighting viruses. You try to destroy the viruses you encounter to save humanity.",
        riddle_desc: "A game we developed for a game jam with a team of 4 people. A riddle competition is held in a classroom environment. You are a contestant trying to guess the answers.",
        rapid_desc: "A game I developed along with a Udemy course. You control a rocket and try to reach the green platform using your fuel efficiently.",
        btn_view_details: "View Details",
        btn_back: "← Back to Projects",
        btn_store: "Play Store",
        btn_privacy: "Privacy Policy",
        btn_terms: "Terms of Use",
        error_not_found: "Project not found."
    },
    tr: {
        nav_home: "Anasayfa",
        nav_about: "Hakkımda",
        nav_projects: "Projelerim",
        nav_contact: "İletişim",
        welcome: "Hoş Geldiniz!",
        intro1: "Ben Onur Demircan.",
        intro2: "Oyun geliştiricisiyim ve Gravity Vortex'in kurucusuyum.",
        contact_title: "İletişime Geçin",
        contact_greeting: "Yeni projeler veya iş fırsatları üzerine konuşmaya her zaman açığım.",
        label_name: "Ad Soyad:",
        label_email: "Email:",
        label_message: "Mesaj:",
        btn_send: "Gönder",
        alert_sent: "Mesajınız gönderildi!",
        about_title: "Hakkımda",
        about_p1: "Oyun geliştiricisiyim.",
        about_p3: "Kodlama becerilerim için hem tek başıma hem de grup halinde beraber çalışıp projeler yaparak kendimi geliştirdim. Leetcode platformunda algoritmalar çözerek becerilerimi geliştirmeye devam ettim. Birlikte çalışmış olduğum farklı gruplar sayesinde takım çalışmasına yatkınım ve analitik düşünme becerilerimle problemleri hızlıca çözebiliyorum.",
        show_more: "Daha fazla göster...",
        show_less: "...daha az göster",
        proj_filter: "Filtre:",
        proj_oldest: "En Eski",
        proj_newest: "En Yeni",
        proj_title: "Projeler",
        lbrs_desc: "Konsantrasyon geliştiren basit bir oyun. Kontrol ettiğiniz objenin aynı rengindeki kayalara çarparak ve engelleri aşarak sona ulaşmaya çalışıyorsunuz. Farklı renkteki panellerden geçerek kontrol ettiğiniz objenin rengini değiştiriyorsunuz.",
        medbot_desc: "5 kişilik bir ekiple bootcamp yarışmasında yaptığımız bir oyun. İnsan vücudunda enjekte edilen ve virüslerle savaşan bir nanobotu oynuyorsunuz. İnsanlığı kurtarabilmek için karşınıza çıkan virüsleri yok etmeye çalışıyorsunuz.",
        riddle_desc: "4 kişilik bir ekiple game jam için geliştirdiğimiz bir oyun. Bir sınıf ortamında bir bilmece yarışması düzenleniyor. Siz de bir yarışmacısınız ve soruları bilmeye çalışıyorsunuz.",
        rapid_desc: "Bir Udemy kursu ile beraber geliştirdiğim bir oyun. Bir roketi kontrol edip yakıtınızı verimli kullanarak yeşil platforma ulaşmaya çalışıyorsunuz.",
        btn_view_details: "İncele",
        btn_back: "← Projelere Dön",
        btn_store: "Play Store",
        btn_privacy: "Gizlilik Politikası",
        btn_terms: "Kullanım Koşulları",
        error_not_found: "Proje bulunamadı."
    }
};

let currentLang = localStorage.getItem('lang') || 'en';
window.currentLang = currentLang;

function setLanguage(lang) {
    currentLang = lang;
    window.currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // Update texts
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Update active state in language selector
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    
    // Add event listeners to language buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.currentTarget.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});
