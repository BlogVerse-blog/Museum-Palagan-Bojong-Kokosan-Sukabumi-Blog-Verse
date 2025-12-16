const articleData = {
    id: 1,
    title: "Museum Palagan Bojong Kokosan Sukabumi",
    excerpt: "Pengalaman jalan-jalan di Museum Palagan Bojong Kokosan untuk mempelajari sejarahnya.",
    category: "Sejarah",
    date: "28 Mei 2025",
    author: {
        name: "Sammy",
        avatar: "./Penulis/Sammy.jpg",
        bio: "Perjalanan di Museum Palagan Bojong Kokosan Sukabumi"
    },
    heroImage: "./images/Foto (1).jpg",
    tags: ["Museum", "Jalan-jalan", "Sejarah"],
    content: [
        {
            type: "section",
            id: "pendahuluan",
            title: "Apa itu Museum Palagan Bojong Kokosan?",
            content: `
                <p>Museum Palagan adalah museum yang meyimpan peninggalan barang dan sejarah perang yang terjadi di Sukabumi. Nama perangnya itu "Perang Panjang / Perang Konvoi Bogor Sukabumi - Cianjur". Secara singkat aku akan menjelaskan tentang perang yang terjadi di Sukabumi.</p>
            `
        },
        {
            type: "section", 
            id: "koleksi benda",
            title: "Koleksi benda apa saja yang ada?",
            content: `
                <p>Museum tidak akan terpisah dengan yang namanya koleksi benda peninggalan sejarah di temapat itu. Koleksi benda di Museum Palagan Bojong Kokosan sebagai berikut;</p>
                
                <h3>1. Senjata</h3>
                <p>Senjata di Museum Palagan adalah senjata yang digunakan oleh rakyat Sukabumi melawan penjajah.</p>
                
                <h3>2. Foto-foto pahlawan</h3>
                <p>Foto-foto pahlawan dipajang untuk mengenang jasanya di pertempuran</p>

                <h3>3. Diorama</h3>
                <p>Diorama yang menampilkan kegiatan yang dilakukan oleh para pahlwawan dengan urutan sesuai kejadian aslinya</p>
                
            `
        },
        {
            type: "section",
            id: "cerita sejarah",
            title: "Sejarah singkat peperangan di Sukabumi", 
            content: `
                <p>Perang ini terjadi pada tanggal 9 Desember 1945 sampai 12 Desember 1945. Sejarah singkat terjadinya perang Bojong Kokosan adalah pasukan sekutu dan NICA datang ke Sukabumi untuk menguasai Sukabumi, Jawa Barat, dan Pulau Jawa. Perjalanan dimulai dari Jakarta menuju Bandung melalui jalur Bogor-Sukabumi-Cianjur (BOSUCI). Pasukan datang dengan senjata tempur lengkap seperti tank sherman, tank stuart, panser, bren Carriers, dan +150 truk. Perang konvoi ini terjadi dengan panjangnya + 12km (“Ular Berbisa”). Pada saat tank sherman mencoba mendorongnya terjadi ledakan akibat mengenai ranjau darat. Pada saat ini para pribumi mencoba melawan pasukan sekutu dengan taktik “Hit and Run” dari ujung kepala hingga ekor pasukan yang berada di Cigombong. Dengan peralatan dan senjata seadanya perang pun dimenangi oleh pihak pribumi. Para pahlawan yang terlibat dalam perang ini adalah Ir. Soekarno, J.Sudirman, C.Oerif Soemohardjo, Mayjen R.Didi Kartasasmita, Letkol Eddie Soekardi, Mayor Yahya Bahran Rangkuti, Mayor Harry Soekardi, Kapten Anwar Padmawijaya, dan Mayor Abdurachman.</p>
            `
        }
    ]
};

const relatedPosts = [
    {
        id: 2,
        title: "Museum Tionghoa Sukabumi",
        date: "28 Mei 2025", 
        image: "./images/Foto 4.jpeg",
        href : "https://museum-tionghoa-sukabumi-blog-verse.vercel.app/"
    }
];
