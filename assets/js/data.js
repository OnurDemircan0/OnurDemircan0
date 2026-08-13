// Project Database
// You can easily add new projects here.
// Make sure the 'id' is unique for each project.

const projectsData = [
    {
        id: "lbrs",
        date: "2023-11-01",
        title: "Let's Break The Stones!",
        logo: "assets/images/lbrs/LBS Logo.png",
        images: [
            "assets/images/lbrs/Play Store 1.png",
            "assets/images/lbrs/Play Store 2.png",
            "assets/images/lbrs/Play Store 3.png",
            "assets/images/lbrs/Play Store 4.png",
            "assets/images/lbrs/Play Store 5.png"
        ],
        storeLink: "https://play.google.com/store/apps/details?id=com.GravityVortex.LetsBreakIt",
        privacyLink: "#", // Replace '#' with your actual privacy policy URL
        
        // Translations
        desc_short: {
            en: "A simple game that improves concentration. Change colors to break stones and overcome obstacles.",
            tr: "Konsantrasyon geliştiren basit bir oyun. Taşları kırmak ve engelleri aşmak için renk değiştirin."
        },
        desc_long: {
            en: "A simple game that improves concentration. You try to reach the end by hitting rocks of the same color as the object you control and overcoming obstacles. You change the color of your object by passing through different colored panels. This game was designed to challenge your reflexes and color coordination in a fast-paced environment.",
            tr: "Konsantrasyon geliştiren basit bir oyun. Kontrol ettiğiniz objenin aynı rengindeki kayalara çarparak ve engelleri aşarak sona ulaşmaya çalışıyorsunuz. Farklı renkteki panellerden geçerek kontrol ettiğiniz objenin rengini değiştiriyorsunuz. Bu oyun, hızlı tempolu bir ortamda reflekslerinizi ve renk koordinasyonunuzu zorlamak için tasarlandı."
        }
    },
    {
        id: "msc",
        date: "2024-05-01", // Tarihi kendinize göre güncelleyebilirsiniz
        title: "MindSharp Challenges",
        logo: "assets/images/msc/MindSharp Challenges Logo 1024x1024.png",
        images: [
            "assets/images/msc/Multiple Games Showcase Play Store en.png",
            "assets/images/msc/Color Confusion Play Store en.png",
            "assets/images/msc/Memory Order Play Store en.png",
            "assets/images/msc/Sliding Puzzle Play Store 2.png",
            "assets/images/msc/Sliding Puzzle Play Store 3.png",
            "assets/images/msc/Stack Play Store.png",
            "assets/images/msc/Stack Play Store 3.png",
            "assets/images/msc/Two Cars Play Store 2.png",
            "assets/images/msc/Zig Zag Play Store 2.png",
            "assets/images/msc/Zig Zag Play Store 4.png"
        ],
        storeLink: "https://play.google.com/store/apps/details?id=com.gravity_vortex.mindsharp_challenges",
        privacyLink: "#", 
        desc_short: {
            en: "A brain-training app featuring a variety of mini-games to improve reflexes, logic, and memory.",
            tr: "Refleks, mantık ve hafızayı geliştirmek için mini oyunlar içeren bir beyin jimnastiği uygulaması."
        },
        desc_long: {
            en: "MindSharp Challenges is a comprehensive brain-training and puzzle game collection. It features a variety of mini-games designed to test and improve reflexes, logic, and memory. The app includes solo challenges and local 2-player games that can be played on the same screen without an internet connection. Dive into logic games like Sudoku and Sliding Puzzle, test your speed with Orbit Dodge and Aim, or improve your focus with Memory Sequence and Color Confusion. Earn gems as you play to unlock visual themes and custom styles!",
            tr: "MindSharp Challenges, kapsamlı bir beyin jimnastiği ve zeka oyunu koleksiyonudur. Reflekslerinizi, mantığınızı ve hafızanızı test edip geliştirmek için tasarlanmış çeşitli mini oyunlar içerir. Uygulama, hem tek oyunculu zorluklar hem de internet bağlantısı gerektirmeden aynı ekranda oynanabilen yerel 2 oyunculu modlar sunar. Sudoku ve Kaydırma Bulmacası gibi mantık oyunlarına dalın, Orbit Dodge ve Aim ile hızınızı test edin veya Hafıza Dizisi ve Renk Karmaşası ile odaklanmanızı geliştirin. Oynadıkça elmas kazanarak yeni görsel temaların ve stillerin kilidini açın!"
        }
    },
    {
        id: "igt",
        date: "2024-08-01", // Tarihi kendinize göre güncelleyebilirsiniz
        title: "Islamic Games Together",
        logo: "assets/images/igt/IGT Logo 1024x1024.png",
        images: [
            "assets/images/igt/Play Store Screenshot En 1.png",
            "assets/images/igt/Play Store Screenshot Codenames En.png",
            "assets/images/igt/Play Store Screenshot Taboo En.png",
            "assets/images/igt/Play Store Screenshot Word Search En.png",
            "assets/images/igt/Play Store Screenshot Anagram En.png",
            "assets/images/igt/Play Store Screenshot Dictionary En.png",
            "assets/images/igt/Play Store Screenshot Room Settings En.png"
        ],
        storeLink: "https://play.google.com/store/apps/details?id=com.gravityvortex.islamicwordgames",
        appStoreLink: "#",
        privacyLink: "#", 
        desc_short: {
            en: "A multiplayer word game featuring anagrams, word searches, and taboo-style challenges for Muslim families.",
            tr: "Müslüman aileler için anagram, kelime arama ve tabu tarzı modlar içeren çok oyunculu kelime oyunu."
        },
        desc_long: {
            en: "\"Islamic Games Together\" is a multiplayer word game perfectly designed for Muslim families and friends. It features various engaging game modes like anagrams, word searches, and taboo-style challenges, all enriched with content related to Islamic themes such as Quranic terms and the Asmaul Husna. The game supports both online multiplayer (up to 24 players) and offline play. To ensure a family-friendly and clean environment, it features no voice or text chat. Currently playable in English, Turkish, and Arabic!",
            tr: "\"Islamic Games Together\", Müslüman aileler ve arkadaşlar için özel olarak tasarlanmış çok oyunculu bir kelime oyunudur. Anagramlar, kelime arama ve tabu benzeri zorluklar gibi çeşitli eğlenceli oyun modları içerir; tamamı Kur'ani terimler ve Esmaül Hüsna gibi İslami temalarla zenginleştirilmiştir. Oyun, hem çevrimiçi çok oyunculu (24 oyuncuya kadar) hem de çevrimdışı oynamayı destekler. Aile dostu ve temiz bir ortam sağlamak amacıyla sesli veya yazılı sohbet içermez. Şu anda İngilizce, Türkçe ve Arapça dillerinde oynanabilir!"
        }
    }
];
