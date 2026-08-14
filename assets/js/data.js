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
            "assets/images/msc/Sliding Puzzle Play Store 2.png",
            "assets/images/msc/Sliding Puzzle Play Store 3.png",
            "assets/images/msc/Memory Order Play Store en.png",
            "assets/images/msc/Color Confusion Play Store en.png",
            "assets/images/msc/Stack Play Store 3.png",
            "assets/images/msc/Stack Play Store.png",
            "assets/images/msc/Zig Zag Play Store 4.png",
            "assets/images/msc/Zig Zag Play Store 2.png",
            "assets/images/msc/Two Cars Play Store 2.png"
        ],
        storeLink: "https://play.google.com/store/apps/details?id=com.gravity_vortex.mindsharp_challenges",
        privacyLink: "privacy-msc.html", 
        desc_short: {
            en: "A brain-training app featuring a variety of mini-games to improve reflexes, logic, and memory.",
            tr: "Refleks, mantık ve hafızayı geliştirmek için mini oyunlar içeren bir beyin jimnastiği uygulaması."
        },
        desc_long: {
            en: `Train your brain with MindSharp Challenges—an engaging brain training game and puzzle collection for solo players and friends!<br><br>Welcome to MindSharp Challenges, a selection of mind games designed to test your reflexes, logic, and memory. Whether you are looking for a relaxing brain workout or thrilling 2 player games to play on the same screen, this app offers a beneficial and educational entertainment experience.<br><br>🎮 <b>Fun Mini Games & Brain Games</b><br>Discover a massive variety of engaging offline puzzle games and memory games built to sharpen your intelligence:<br><br><b>Logic & Strategy:</b> Master world famous favorites like Sudoku or challenge yourself with the Sliding Puzzle.<br><br><b>Reflexes & Speed:</b> Test your reaction time in Orbit Dodge and lock in your precision in Aim.<br><br><b>Memory & Focus:</b> Train your mind with Memory Sequence and outsmart the clock in Color Confusion and Color Guess.<br><br>🔴🆚🔵 <b>Local 2 Player Games (No WiFi Needed)</b><br>Looking for exciting two player games to play with friends or family? You do not need an internet connection! Gather around a single device and compete head to head across our collection of local multiplayer minigames to see who has the sharper mind in a fun, friendly environment.<br><br>✨ <b>Earn Gems & Customize</b><br>Visit the in game shop to personalize your puzzle experience! Collect gems through your gameplay victories or choose to unlock premium items directly through convenient in app purchases. Use your resources to get unique visual themes, custom game styles, and profile photos to make the game truly yours.<br><br>💡 <b>Why You’ll Love This Brain Exercise App:</b><br><br>• A diverse puzzle collection featuring both well known favorites and original logic games.<br><br>• A great choice for a quick daily brain test or relaxing sessions of wholesome entertainment.<br><br>• Fully offline games support—play anywhere, anytime, without using data.<br><br>• Clean, family friendly gameplay that encourages focus and mental sharpness across all our mini games.<br><br>Download MindSharp Challenges today and start your brain training journey!`,
            tr: `MindSharp Challenges ile beyninizi eğitin—tek oyunculu ve arkadaşlarla oynanabilen keyifli bir beyin egzersizi oyunu ve bulmaca koleksiyonu!<br><br>Reflekslerinizi, mantığınızı ve hafızanızı test etmek için özenle geliştirilmiş bir zeka oyunları koleksiyonu olan MindSharp Challenges'a hoş geldiniz. İster rahatlatıcı bir beyin egzersizi ister aynı ekranda oynayabileceğiniz heyecan verici 2 kişilik oyunlar arıyor olun, bu uygulama faydalı ve eğitici bir eğlence deneyimi sunar.<br><br>🎮 <b>Eğlenceli Mini Oyunlar & Beyin Oyunları</b><br>Zekanızı keskinleştirmek için geliştirilmiş, birbirinden sürükleyici çok çeşitli internetsiz bulmaca oyunları ve hafıza oyunları keşfedin:<br><br><b>Mantık & Strateji:</b> Dünya çapında popüler olan Sudoku oyununda ustalaşın veya Kaydırmalı Yapboz ile kendinize meydan okuyun.<br><br><b>Refleks & Hız:</b> Yörünge Kaçışı oyununda tepki sürenizi test edin ve Hedef oyununda hassasiyetinizi gösterin.<br><br><b>Hafıza & Odaklanma:</b> Hafıza Sırası ile zihninizi eğitin, Renk Karmaşası ve Renk Tahmini oyunlarında zamana karşı yarışın.<br><br>🔴🆚🔵 <b>Yerel 2 Kişilik Oyunlar (WiFi Gerekmez)</b><br>Arkadaşlarınızla veya ailenizle oynayabileceğiniz heyecan verici iki kişilik oyunlar mı arıyorsunuz? İnternet bağlantısına ihtiyacınız yok! Tek bir cihaz etrafında toplanın, eğlenceli ve arkadaşça bir ortamda kimin zihninin daha keskin olduğunu görmek için yerel çok oyunculu mini oyunlar koleksiyonumuzda baş başa mücadele edin.<br><br>✨ <b>Elmas Kazanın & Özelleştirin</b><br>Bulmaca deneyiminizi kişiselleştirmek için oyun içi mağaza bölümünü ziyaret edin! Oyun galibiyetlerinizle elmas toplayın veya kullanışlı uygulama içi satın alımlar aracılığıyla premium içerikleri doğrudan açmayı seçin. Oyunu tamamen kendinize özel hale getirmek için kaynaklarınızı kullanarak benzersiz görsel temalar, özel oyun stilleri ve profil fotoğrafları edinin.<br><br>💡 <b>Bu Beyin Egzersizi Uygulamasını Neden Çok Seveceksiniz:</b><br><br>• Hem herkes tarafından bilinen popüler oyunları hem de orijinal mantık oyunları seçeneklerini içeren zengin bir bulmaca koleksiyonu.<br><br>• Günlük hızlı bir beyin testi veya dinlendirici, temiz bir eğlence seansı için güzel bir tercih.<br><br>• Tam internetsiz oyunlar desteği—veri paketinizden harcamadan, her yerde ve her zaman oynayın.<br><br>• Tüm mini oyunlar genelinde odaklanmayı ve zihinsel keskinliği teşvik eden temiz, aile dostu oynanış.<br><br>MindSharp Challenges oyununu hemen bugün indirin ve beyin egzersizi yolculuğunuza başlayın!`
        }
    },
    {
        id: "igt",
        date: "2024-08-01", // Tarihi kendinize göre güncelleyebilirsiniz
        title: {
            en: "Islamic Games Together",
            tr: "Arkadaşlarla İslami Oyunlar"
        },
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
        appStoreLink: "https://apps.apple.com/us/app/islamic-games-together/id6761419571",
        privacyLink: "privacy-igt.html", 
        termsLink: "terms-igt.html",
        desc_short: {
            en: "A multiplayer word game featuring anagrams, word searches, and taboo-style challenges for Muslim families.",
            tr: "Müslüman aileler için anagram, kelime arama ve tabu tarzı modlar içeren çok oyunculu kelime oyunu."
        },
        desc_long: {
            en: `Islamic Games Together brings together a wide variety of word games the whole family can enjoy. Designed for Muslims of all ages, we've done our best to ensure every category stays clean, appropriate, and suitable for halal-conscious players.<br><br>Play online with friends & family (up to 24 players), or enjoy offline play anytime. No voice chat, no text chat — just pure gameplay.<br><br><b>GAME MODES</b><br>• Anagram — rearrange letters and find the correct word<br>• Word Search — find hidden words inside the grid<br>• Taboo — explain the main word without using forbidden words<br>• Word Links — connect clues and words with your team<br><br><b>CUSTOMIZE YOUR MATCH</b><br>• Choose categories to include or exclude<br>• Set difficulty<br>• Adjust time limit (or turn it off)<br>• Pick round count<br>• Play free-for-all or teams (when available)<br><br><b>BUILT-IN DICTIONARY</b><br>Don’t know a word? Open the in-game Dictionary to view:<br>• Meaning<br>• Related words<br>• Helpful context for learning while playing<br><br><b>LANGUAGES</b><br>• English<br>• Turkish<br>• Arabic`,
            tr: `Arkadaşlarla İslami Oyunlar, tüm ailenin keyifle oynayabileceği çok çeşitli kelime oyunlarını bir araya getirir. Her yaştan Müslümana yönelik tasarlanan bu uygulamada, tüm kategorilerin temiz, uygun ve helal bilinçli oyuncular için elverişli olması adına elimizden gelenin en iyisini yapmaya çalıştık.<br><br>24 oyuncuya kadar çevrim içi oynayın veya istediğin zaman çevrim dışı eğlenin. Sesli/yazılı iletişim yok — sadece oyun keyfi.<br><br><b>OYUN MODLARI</b><br>• Anagram — harfleri sırala, doğru kelimeyi bul<br>• Kelime Avı — tabloda gizli kelimeleri bul<br>• Tabu — yasaklı kelimeleri kullanmadan anlat<br>• Kelime Bağları — ipuçlarıyla kelimeleri bağlayın, takımınla kazan<br><br><b>OYUNU İSTEDİĞİN GİBİ AYARLA</b><br>• İstediğin kategorileri seç, istemediklerini kapat<br>• Zorluk ayarı yap<br>• Süre limitini ayarla (istersen kapat)<br>• Tur sayısını belirle<br>• Uygunsa takımlara ayrıl veya herkes tek oynasın<br><br><b>OYUN İÇİ SÖZLÜK</b><br>Bir kelimeyi bilmiyor musun? Sözlük bölümünden:<br>• Anlamını<br>• İlgili kelimeleri<br>• Öğrenmeyi kolaylaştıran bilgileri görebilirsin<br><br><b>DİLLER</b><br>• İngilizce<br>• Türkçe<br>• Arapça`
        }
    }
];
