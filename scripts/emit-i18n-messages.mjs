import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const ms = {
  Metadata: {
    siteTitle: "NextGen CEO Challenge 2026",
    siteDescription:
      "NextGen CEO Challenge 2026 oleh MyCEO Education — Pitch. Strategize. Win!",
  },
  Nav: {
    home: "Home",
    competition: "Competition",
    contact: "Contact",
    overview: "Gambaran",
    register: "Daftar",
    competitionPages: "Halaman competition",
    mobileCompetition: "Competition — pilih halaman",
    youAreAt: "Anda di:",
    currentPageLabel: "Halaman semasa:",
    mobileOverview: "Gambaran competition",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    navMain: "Utama",
    menu: {
      about: "Gambaran",
      aboutUs: "Tentang kami",
      howTo: "Cara Penyertaan",
      awards: "Anugerah",
      terms: "Terma & Syarat",
      judging: "Penilaian",
      timeline: "Timeline",
      registration: "Pendaftaran",
    },
    menuSub: {
      about: "Gambaran program & pautan",
      aboutUs: "Penganjur & cerita program",
      howTo: "Langkah & alur",
      awards: "Grand Prize & pengiktirafan",
      terms: "Peraturan rasmi",
      judging: "Struktur & peratusan",
      timeline: "Tarikh penting",
      registration: "Daftar sekolah",
    },
  },
  Footer: {
    ctaLine1: "Sedia Untuk Menjadi",
    ctaLine2: "NextGen CEO",
    ctaQ: "?",
    joinCta: "Join The Challenge!",
    company: "MyCEO Education Sdn. Bhd.",
    quote:
      "Ini Bukan Sekadar Pertandingan, Ini Adalah Sebuah Proses.",
    linkHome: "Home",
    linkCompetition: "Competition",
    linkContact: "Contact",
  },
  Contact: {
    eyebrow: "Hubungi Kami",
    title: "Contact",
    intro:
      "Untuk pertanyaan berkaitan pendaftaran dan program, hubungi kami melalui saluran rasmi di bawah.",
    igTitle: "Instagram",
    igDesc: "Eksplorasi impak program & testimoni sekolah.",
    challengeTitle: "Join The Challenge",
    challengeDesc: "Dokumen & maklumat rasmi pertandingan.",
    challengeCta: "Buka pautan",
    regTitle: "Pendaftaran",
    regDesc: "Halaman pendaftaran rasmi dengan terma ringkas.",
    regCta: "Ke Pendaftaran",
  },
  meta: {
    home: {
      title: "NextGen CEO Challenge 2026",
      description:
        "NextGen CEO Challenge 2026 oleh MyCEO Education — Pitch. Strategize. Win!",
    },
    contact: {
      title: "Contact | NextGen CEO Challenge 2026",
      description: "Hubungi MyCEO Education — NextGen CEO Challenge 2026.",
    },
    competition: {
      title: "Competition | NextGen CEO Challenge 2026",
      description:
        "Gambaran NextGen CEO Challenge 2026 — untuk pendidik, apa itu program, dan pautan ke semua maklumat pertandingan.",
    },
    howTo: {
      title: "Cara Penyertaan | NextGen CEO Challenge 2026",
      description:
        "Langkah penyertaan NextGen CEO Challenge 2026 — dari jemputan hingga anugerah.",
    },
    awards: {
      title: "Anugerah | NextGen CEO Challenge 2026",
      description:
        "Grand Prize dan manfaat kepada pelajar — NextGen CEO Challenge 2026.",
    },
    terms: {
      title: "Terma & Syarat | NextGen CEO Challenge 2026",
      description:
        "Terma dan syarat rasmi NextGen CEO Challenge 2026 serta manfaat kepada sekolah.",
    },
    judging: {
      title: "Penilaian | NextGen CEO Challenge 2026",
      description:
        "Struktur penilaian NextGen CEO Challenge 2026 — peratusan dan kriteria.",
    },
    timeline: {
      title: "Timeline | NextGen CEO Challenge 2026",
      description: "Tarikh penting dan timeline NextGen CEO Challenge 2026.",
    },
    registration: {
      title: "Pendaftaran | NextGen CEO Challenge 2026",
      description:
        "Pendaftaran rasmi NextGen CEO Challenge 2026 — saluran rasmi MyCEO Education.",
    },
    about: {
      title: "Tentang kami | NextGen CEO Challenge 2026",
      description:
        "MyCEO Education membentuk pemimpin muda dengan minda keusahawanan — kreatif, yakin, sedia memacu Malaysia ke hadapan.",
    },
  },
  Countdown: {
    finaleLabel: "Kira detik ke Grand Finale (Jun 2026)",
    days: "Hari",
    hours: "Jam",
    min: "Minit",
    sec: "Saat",
    completed: "Kira detik tamat.",
  },
  CompetitionPageHero: {
    eyebrow: "NextGen CEO Challenge 2026",
  },
  HomeHero: {
    badge: "Program Kepimpinan & Keusahawanan Pelajar • Malaysia",
    pitchLine: "Pitch. Strategize. Win!",
    body:
      "Platform pertandingan berprestij untuk membentuk pelajar yang berfikir seperti pemimpin, bertindak seperti inovator, dan menyampaikan idea seperti CEO muda.",
    statNat: "Pengiktirafan kebangsaan",
    statNatVal: "Sijil + PAJSK",
    statGrand: "Grand Prize",
    statTime: "Gelanggang masa",
    statTimeVal: "Mac–Jun 2026",
    highlight: "Sorotan",
    grandPrize: "GRAND PRIZE",
    yearBadge: "2026",
    certLine: "+ National Certificate & PAJSK Recognition",
    hashtag: "#NextGenCEOChallenge2026",
    ctaRegister: "Daftarkan Sekolah Anda",
    ctaCompetition: "Competition",
    miniMac: "Mac",
    miniMei: "Mei",
    miniJun: "Jun",
    miniReg: "Pendaftaran",
    miniBoot: "Bootcamp",
    miniPitch: "Sales & Pitch",
  },
  HomeVideo: {
    eyebrow: "Video sorotan",
    title: "Rasai tenaga NextGen CEO",
    subtitle:
      "Cuplikan ringkas pertandingan — pasukan, pitching, dan momentum di pentas.",
    videoHint:
      "Klip mungkin dimainkan tanpa bunyi — gunakan kawalan pemain untuk menghidupkan audio.",
    posterLabel: "Poster",
    posterAlt: "NextGen CEO Challenge — poster",
    infographicLabel: "Infografik",
    infographicAlt: "NextGen CEO Challenge — gambaran infografik",
  },
  HomeTrust: {
    organiser: "Penganjur",
    edition: "Edisi",
    recognition: "Pengiktirafan",
    hashtag: "Hashtag",
    organiserVal: "MyCEO Education",
    editionVal: "Challenge 2026",
    recognitionVal: "National Certificate & PAJSK",
    hashtagVal: "#NextGenCEOChallenge2026",
  },
  ImportantDates: {
    label: "Tarikh Penting",
    title: "Jadual Ringkas NextGen CEO Challenge 2026",
  },
  HomePreview: {
    kicker: "Competition",
    title: "Terokai Pertandingan",
    subtitle:
      "Semua butiran rasmi dalam halaman Competition — pilih topik di bawah.",
    view: "Lihat →",
    fullCta: "Gambaran penuh Competition",
  },
  HomeApaItu: {
    title: "Apa Itu Next Gen CEO?",
    beforeBrand: "Inisiatif ",
    between: " untuk menyokong ",
    afterPak:
      " dan membuka pengalaman kepimpinan & keusahawanan secara praktikal.",
    pill1: "Critical thinking",
    pill2: "Leadership",
    pill3: "Strategic thinking",
    readMore: "Baca penuh",
  },
  GrandPrize: {
    title: "GRAND PRIZE",
    cert: "+ National Certificate & PAJSK Recognition",
    tagline: "Adakah Sekolah Anda Terbaik Antara Yang Terbaik?",
    hashtag: "#NextGenCEOChallenge2026",
  },
  ManfaatPelajar: {
    title: "Manfaat Pertandingan Kepada Pelajar",
    grandTitle: "Grand Prize {amount}",
    grandDesc: "Sijil penghargaan & peluang mentor profesional",
    c2Title: "Pengalaman Kepimpinan",
    c2Desc:
      "Pelajar diuji dalam strategi, problem-solving, dan pitching sebenar seperti CEO muda.",
    c3Title: "Platform Kompetitif",
    c3Desc:
      "Bersaing dengan pelajar terpilih dari seluruh negara, meningkatkan profil dan reputasi.",
    c4Title: "Kemahiran Kritikal & Kreatif",
    c4Desc:
      "Diasah untuk berfikir kritikal, membuat keputusan pantas, dan bekerjasama sebagai pasukan.",
    c5Title: "Networking & Peluang Masa Depan",
    c5Desc:
      "Bertemu mentor profesional, juri industri dan pelajar berbakat serta membuka peluang masa depan.",
  },
  ManfaatSekolah: {
    title: "Manfaat Pertandingan Kepada Sekolah",
    m1t: "Pengiktirafan Peringkat Kebangsaan",
    m1d:
      "Penyertaan rasmi yang meningkatkan kredibiliti dan kedudukan sekolah di peringkat nasional.",
    m2t: "Meningkatkan Imej & Reputasi Sekolah",
    m2d:
      "Membina persepsi positif sebagai institusi yang aktif, progresif dan berdaya saing.",
    m3t: "Mengukuhkan Program Kelab Keusahawanan / Inovasi",
    m3d:
      "Menjadi platform pengayaan yang menyokong pembangunan aktiviti kokurikulum secara strategik.",
    m4t: "Platform Pendedahan & Akses Industri",
    m4d:
      "Pelajar dan sekolah mendapat akses kepada mentor profesional, usahawan serta rakan industri.",
    m5t: "Pembentukan Pemimpin Pelajar Berimpak",
    m5d:
      "Peserta berpeluang kembali ke sekolah sebagai pembimbing rakan sebaya dan penggerak budaya kepimpinan.",
  },
  Terma: {
    title: "Terma & Syarat Pertandingan",
    i1h: "Kelayakan",
    i1p:
      "Terbuka kepada sekolah menengah terpilih yang menerima jemputan rasmi.",
    i2h: "Pendaftaran",
    i2p: "Semua pendaftaran mesti dibuat melalui saluran rasmi pihak penganjur.",
    i3h: "Pasukan",
    i3p: "Komposisi 4 ahli mesti dikekalkan sepanjang program.",
    i4h: "Terma",
    i4p:
      "Setiap pasukan wajib menyertai kesemua komponen penilaian sepanjang pertandingan.",
    i5h: "Komposisi",
    i5p:
      "Satu pasukan wajib mempunyai 4 pelajar menengah rendah bersama 1 guru pengiring. Sekolah dibenarkan hantar lebih dari satu pasukan.",
    i6h: "Maklumat",
    i6p:
      "Maklumat mesti lengkap & tepat. Pihak penganjur berhak menolak penyertaan tidak sah.",
    i7h: "Pertukaran",
    i7p: "Pertukaran ahli hanya dibenarkan dengan kelulusan pihak penganjur.",
    i8h: "Keputusan",
    i8p: "Penilaian dibuat oleh panel juri, keputusan adalah muktamad.",
  },
  Penilaian: {
    title: "Struktur Penilaian NextGen CEO Challenge 2026",
    s1h: "Teamwork",
    s1p:
      "Keaktifan pasukan, kerjasama, komunikasi dan pembahagian tugas.",
    s2h: "Idea & Kreativiti",
    s2p: "Originaliti produk/idea, nilai tambah dan potensi inovasi.",
    s3h: "Real Market Execution (Sales)",
    s3p:
      "Keberkesanan jualan, promosi dan interaksi dengan pelanggan sebenar.",
    s4h: "Final Pitching (Panel Juri)",
    s4p:
      "Penyampaian idea, keyakinan, struktur pitch dan keupayaan menjawab soalan juri.",
  },
  Timeline: {
    title: "Timeline Pertandingan",
    s1when: "Mac 2026",
    s1title: "Pendaftaran",
    s1desc:
      "Daftar melalui saluran rasmi & sahkan penyertaan pasukan.",
    s2when: "Mei 2026",
    s2title: "Bootcamp Kreativiti & Teamwork",
    s2desc: "Kerjasama pasukan dan idea inovatif dinilai.",
    s3when: "Jun 2026",
    s3title: "Sales & Pitching Karnival",
    s3desc:
      "Mini Sales & Final Pitching: prestasi pasaran sebenar & kemampuan menyampaikan idea.",
  },
  Registration: {
    kicker: "Pendaftaran Rasmi",
    title: "Daftarkan Sekolah Anda",
    bodyBefore: "Semua pendaftaran mesti dibuat melalui",
    bodyStrong: "saluran rasmi",
    bodyAfter: "pihak penganjur. Maklumat mesti lengkap & tepat.",
    footnote: "*Kemasukan terhad bagi mengekalkan kualiti bimbingan mentor.",
    join: "Join The Challenge!",
    ig: "Hubungi / IG Rasmi",
  },
  Sponsor: {
    title: "Rakan Penaja Terdahulu",
    alt: "Penaja pilihan",
  },
  HowToParticipate: {
    title: "Cara Penyertaan",
    intro:
      "Alur ringkas dari jemputan hingga pengiktirafan. Rujuk Terma & Syarat untuk butiran penuh.",
    stepLabel: "Langkah",
    s1t: "Terima Jemputan",
    s1d: "Sekolah menengah terpilih menerima jemputan rasmi.",
    s2t: "Daftar Pasukan",
    s2d: "Lengkapkan pendaftaran melalui saluran rasmi penganjur.",
    s3t: "Bootcamp",
    s3d: "Latihan kreativiti, teamwork & persediaan pitching.",
    s4t: "Sales / Execution",
    s4d: "Uji idea dan jualan dalam situasi dunia sebenar.",
    s5t: "Final Pitching",
    s5d: "Bentang kepada panel juri dan jawab soalan.",
    s6t: "Anugerah",
    s6d: "Pengiktirafan, sijil & pemenang diumumkan.",
    termsCta: "Terma & Syarat",
    regCta: "Pendaftaran",
  },
  Educator: {
    kicker: "Evolusi Pendidikan Kepimpinan",
    h1a: "Melampaui Akademik:",
    h1b: "Membentuk Pemimpin Masa Depan.",
    p1:
      "Sebagai pendidik, kita tahu bahawa kecemerlangan sebenar tidak lagi hanya diukur melalui helaian kertas peperiksaan.",
    p2Lead:
      "NextGen CEO direka khusus untuk melengkapkan ekosistem sekolah anda dengan elemen",
    p2Hot: "High-Order Thinking Skills (HOTS)",
    p2Tail:
      "dan aplikasi dunia sebenar. Kami membantu guru mengenal pasti dan mengasah bakat kepimpinan yang terpendam, menukar potensi pasif menjadi kompetensi aktif.",
    quote:
      "Tugas kita bukan sekadar mengajar, tetapi menyediakan platform di mana setiap murid mampu berfikir seperti seorang pemimpin dan bertindak seperti seorang inovator.",
    igCta: "Eksplorasi Impak Program & Testimoni Sekolah",
    sideTitle: "Integrasi Strategik Sekolah",
    li1: "Penyelarasan Kemahiran PAK21",
    li2: "Pendedahan Mentor Aras Tinggi",
    li3: "Pengiktirafan Profil Kemenjadian Murid",
    register: "Daftarkan Sekolah Anda",
    footnote: "*Kemasukan terhad bagi mengekalkan kualiti bimbingan mentor.",
    powered: "Powered by MyCEO Education",
  },
  ApaItu: {
    title: "Apa Itu Next Gen CEO?",
    lead:
      "Next Gen CEO merupakan sebuah inisiatif oleh MyCEO Education sebagai pendekatan strategik bagi menyokong aspirasi Pelan Pembangunan Pendidikan Malaysia dan penerapan Kemahiran Abad Ke-21 (PAK21) sambil membuka peluang kepada pelajar berpotensi tinggi mengalami dunia kepimpinan dan keusahawanan secara praktikal.",
    c1t: "CRITICAL THINKING",
    c1d:
      "Membantu pelajar menganalisis, menilai dan menyelesaikan masalah dengan bijak",
    c2t: "LEADERSHIP",
    c2d: "Membina keyakinan dan kemahiran memimpin dalam situasi sebenar",
    c3t: "STRATEGIC THINKING",
    c3d:
      "Mengasah kemampuan merancang dan membuat keputusan berimpak tinggi",
  },
  CompetitionPages: {
    overviewTitle: "Competition",
    overviewSubtitle:
      "Program kepimpinan dan keusahawanan pelajar oleh MyCEO Education. Terokai semua bahagian pertandingan melalui pautan di bawah.",
    howToTitle: "Cara Penyertaan",
    howToSubtitle:
      "Alur ringkas penyertaan pasukan sekolah. Rujuk Terma & Syarat untuk butiran rasmi.",
    awardsTitle: "Anugerah",
    awardsSubtitle:
      "Grand Prize, pengiktirafan, dan peluang pembangunan pelajar.",
    termsTitle: "Terma & Syarat",
    termsSubtitle: "Peraturan rasmi penyertaan, pasukan, dan penilaian.",
    judgingTitle: "Struktur Penilaian",
    judgingSubtitle: "Komponen penilaian dan pemberat rasmi pertandingan.",
    timelineTitle: "Timeline",
    timelineSubtitle:
      "Fasa pendaftaran, bootcamp, dan Sales & Pitching Karnival.",
    registrationTitle: "Pendaftaran",
    registrationSubtitle:
      "Daftar melalui saluran rasmi. Maklumat mesti lengkap dan tepat.",
  },
  AboutPage: {
    title: "Tentang kami",
    subtitle:
      "MyCEO — membentuk generasi baharu yang berani memimpin ekonomi masa depan.",
    imageAlt: "MyCEO Education — membentuk generasi pemimpin muda",
    kicker:
      "Di sini, minda muda diasah dengan kebijaksanaan keusahawanan — kreatif, yakin, berwibawa — supaya mereka bukan sekadar pekerja, tetapi majikan dan pemacu perubahan era seterusnya.",
    body1:
      "Selamat datang ke MyCEO — ruang di mana anak-anak generasi baharu dibentuk menjadi pemimpin perniagaan dengan entrepreneurial mindset yang tajam: bijak berfikir, berani mencipta, yakin beraksi, dan berwibawa memimpin. Lebih daripada itu, mereka dibimbing secara sistematik untuk memegang tongkat estafet sebagai majikan dan pencetus inovasi dalam landskap ekonomi masa hadapan.",
    body2:
      "Melalui program pendidikan keusahawanan MyCEO, minat, bakat, dan kepintaran pelbagai (multiple intelligence) setiap kanak-kanak dikesan, diperhalusi, dan dikembangkan sehingga potensi mereka dimaksimumkan dengan terancang. Sejak awal usia, mereka didedahkan secara berperingkat kepada dunia perniagaan — bukan sekadar tahu, tetapi berminat mendalam — sehingga keusahawanan menjadi pilihan kerjaya yang serius dan bermakna apabila mereka melangkah ke dunia dewasa. Serentak itu, mereka dilatih menjadi pemimpin yang berkeyakinan, berstrategi, dan berketerampilan menghadapi cabaran sebenar.",
    body3:
      "Hasrat kami jelas: melahirkan generasi genius — pemimpin yang bukan sahaja berjaya dalam ekonomi, tetapi memacu masyarakat dan negara ke arah kemajuan yang mampan, supaya Malaysia berdiri setaraf dalam persaingan global dan menjadi penanda aras dalam inovasi serta keusahawanan.",
    historyEyebrow: "Perjalanan kami",
    historyTitle: "Bagaimana MyCEO bermula?",
    historyIntro:
      "Tiga bab utama dalam perjalanan kami membina generasi berjiwa usahawan.",
    historyMilestone1Label: "2014",
    historyMilestone1Body:
      "Sejak tahun 2014, MyCEO (Malaysia Children Entrepreneurship Orientation Program) telah menjadi perintis dalam melahirkan generasi muda berjiwa usahawan. Bermula sebagai projek CSR, MyCEO telah berjaya menganjurkan pelbagai program dengan sokongan hebat daripada organisasi ternama seperti Kementerian Pendidikan Malaysia, Kementerian Belia & Sukan, DPMM, UPSI, UPM, SME Corp, Bursa Malaysia, RHB Bank dan ramai lagi.",
    historyMilestone2Label: "MyCEO Academy",
    historyMilestone2Body:
      "Sambutan luar biasa daripada ibu bapa dan guru setiap tahun mendorong kami untuk melangkah lebih jauh. Hasilnya, lahirlah MyCEO Academy, yang kini menawarkan program-program inovatif bagi memenuhi keperluan kanak-kanak dan remaja dalam dunia keusahawanan.",
    historyMilestone3Label: "Mac 2020",
    historyMilestone3Body:
      "Pada Mac 2020, perjalanan ini diteruskan dengan penubuhan MyCEO Education Sdn Bhd, sebagai langkah kukuh untuk memperluaskan impak dan menjangkau lebih ramai generasi muda.",
    programsEyebrow: "Apa yang kami tawarkan",
    programsTitle: "Program MyCEO",
    programsSubtitle:
      "Pengalaman berstruktur yang memperkenalkan kanak-kanak dan remaja kepada perniagaan, kewangan, dan jualan sebenar — secara menyeronokkan dan sesuai umur.",
    programsCta: "Lebih lanjut",
    programBucTitle: "Bengkel Usahawan Cilik",
    programBucDesc:
      "Bengkel praktikal cuti sekolah yang menyeronokkan: anak belajar asas berniaga, bina keyakinan diri, dan merasai pengalaman jual beli sebenar.",
    programBucImageAlt:
      "Bengkel Usahawan Cilik — program cuti sekolah jualan dan pitching",
    programMskTitle: "Money Smart Kids",
    programMskDesc:
      "Program berstruktur yang melatih kanak-kanak mengurus wang, memahami beza keperluan dan kehendak, serta menguasai kemahiran kewangan sejak kecil.",
    programMskImageAlt: "Money Smart Kids — literasi kewangan untuk kanak-kanak",
    programKkucTitle: "Kem & Karnival Usahawan Cilik",
    programKkucDesc:
      "Karnival interaktif untuk anak-anak menjadi BOSS CILIK — urus modal, jual produk, dan berniaga dalam suasana mini bazar dunia sebenar.",
    programKkucImageAlt:
      "Kem & Karnival Usahawan Cilik — showcase keusahawanan kanak-kanak",
    galleryEyebrow: "Galeri",
    galleryTitle: "MyCEO dalam aksi",
    gallerySubtitle:
      "Sorotan program, acara, dan komuniti kami — detik yang memaparkan semangat kepimpinan dan keusahawanan muda.",
    galleryExpand: "Lihat",
    galleryClose: "Tutup",
    galleryPrev: "Gambar sebelumnya",
    galleryNext: "Gambar seterusnya",
    galleryLightboxAria: "Gambar galeri diperbesar",
    galleryOpenAria: "Buka gambar galeri {index}",
    galleryImageAlt: "Foto program MyCEO {index}",
    galleryCounter: "{current} / {total}",
    partnersTitle: "Penaja & Rakan Kami",
    partnersSubtitle: "Bersama melahirkan generasi usahawan masa depan",
    partnersLogosAlt:
      "Logo rakan rasmi: Yayasan Uniti, Bursa Malaysia, Encorp, PPAS, dan YAWAS.",
    partnersBannerAlt:
      "Logo rakan strategik: Yayasan Uniti, Bursa Malaysia, Encorp, PPAS (Perbadanan Perpustakaan Awam Selangor), dan YAWAS (Yayasan Warisan Anak Selangor).",
  },
};

const en = {
  Metadata: {
    siteTitle: "NextGen CEO Challenge 2026",
    siteDescription:
      "NextGen CEO Challenge 2026 by MyCEO Education — Pitch. Strategize. Win!",
  },
  Nav: {
    home: "Home",
    competition: "Competition",
    contact: "Contact",
    overview: "Overview",
    register: "Register",
    competitionPages: "Competition pages",
    mobileCompetition: "Competition — choose a page",
    youAreAt: "You are on:",
    currentPageLabel: "Current page:",
    mobileOverview: "Competition overview",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    navMain: "Main",
    menu: {
      about: "About",
      aboutUs: "About us",
      howTo: "How to participate",
      awards: "Awards",
      terms: "Terms & conditions",
      judging: "Judging",
      timeline: "Timeline",
      registration: "Registration",
    },
    menuSub: {
      about: "Program overview & links",
      aboutUs: "Organiser & programme story",
      howTo: "Steps & flow",
      awards: "Grand prize & recognition",
      terms: "Official rules",
      judging: "Structure & weighting",
      timeline: "Key dates",
      registration: "Register your school",
    },
  },
  Footer: {
    ctaLine1: "Ready to become a",
    ctaLine2: "NextGen CEO",
    ctaQ: "?",
    joinCta: "Join The Challenge!",
    company: "MyCEO Education Sdn. Bhd.",
    quote:
      "This is not just a competition — it is a process.",
    linkHome: "Home",
    linkCompetition: "Competition",
    linkContact: "Contact",
  },
  Contact: {
    eyebrow: "Contact us",
    title: "Contact",
    intro:
      "For questions about registration and the programme, reach us through the official channels below.",
    igTitle: "Instagram",
    igDesc: "Explore programme impact & school testimonials.",
    challengeTitle: "Join The Challenge",
    challengeDesc: "Official documents & competition information.",
    challengeCta: "Open link",
    regTitle: "Registration",
    regDesc: "Official registration page with a short summary of terms.",
    regCta: "Go to registration",
  },
  meta: {
    home: {
      title: "NextGen CEO Challenge 2026",
      description:
        "NextGen CEO Challenge 2026 by MyCEO Education — Pitch. Strategize. Win!",
    },
    contact: {
      title: "Contact | NextGen CEO Challenge 2026",
      description: "Contact MyCEO Education — NextGen CEO Challenge 2026.",
    },
    competition: {
      title: "Competition | NextGen CEO Challenge 2026",
      description:
        "Overview of NextGen CEO Challenge 2026 — for educators, what the programme is, and links to all competition information.",
    },
    howTo: {
      title: "How to participate | NextGen CEO Challenge 2026",
      description:
        "Participation steps for NextGen CEO Challenge 2026 — from invitation to awards.",
    },
    awards: {
      title: "Awards | NextGen CEO Challenge 2026",
      description:
        "Grand prize and benefits for students — NextGen CEO Challenge 2026.",
    },
    terms: {
      title: "Terms & conditions | NextGen CEO Challenge 2026",
      description:
        "Official terms and conditions of NextGen CEO Challenge 2026 and benefits for schools.",
    },
    judging: {
      title: "Judging | NextGen CEO Challenge 2026",
      description:
        "Judging structure for NextGen CEO Challenge 2026 — weighting and criteria.",
    },
    timeline: {
      title: "Timeline | NextGen CEO Challenge 2026",
      description: "Key dates and timeline for NextGen CEO Challenge 2026.",
    },
    registration: {
      title: "Registration | NextGen CEO Challenge 2026",
      description:
        "Official registration for NextGen CEO Challenge 2026 — MyCEO Education channels.",
    },
    about: {
      title: "About us | NextGen CEO Challenge 2026",
      description:
        "MyCEO Education shapes young leaders with entrepreneurial wisdom—creative, confident, ready to drive Malaysia forward.",
    },
  },
  Countdown: {
    finaleLabel: "Countdown to finale (Jun 2026)",
    days: "Days",
    hours: "Hours",
    min: "Min",
    sec: "Sec",
    completed: "Countdown completed.",
  },
  CompetitionPageHero: {
    eyebrow: "NextGen CEO Challenge 2026",
  },
  HomeHero: {
    badge: "Student leadership & entrepreneurship programme • Malaysia",
    pitchLine: "Pitch. Strategize. Win!",
    body:
      "A prestigious platform shaping students to think like leaders, act like innovators, and pitch ideas like young CEOs.",
    statNat: "National recognition",
    statNatVal: "Certificate + PAJSK",
    statGrand: "Grand prize",
    statTime: "Timeline",
    statTimeVal: "Mar–Jun 2026",
    highlight: "Highlight",
    grandPrize: "GRAND PRIZE",
    yearBadge: "2026",
    certLine: "+ National Certificate & PAJSK Recognition",
    hashtag: "#NextGenCEOChallenge2026",
    ctaRegister: "Register your school",
    ctaCompetition: "Competition",
    miniMac: "Mar",
    miniMei: "May",
    miniJun: "Jun",
    miniReg: "Registration",
    miniBoot: "Bootcamp",
    miniPitch: "Sales & pitch",
  },
  HomeVideo: {
    eyebrow: "Video teaser",
    title: "Feel the NextGen CEO energy",
    subtitle:
      "A short look at the challenge — teams, pitching, and momentum on stage.",
    videoHint:
      "The clip may start muted — use the player controls to turn sound on.",
    posterLabel: "Poster",
    posterAlt: "NextGen CEO Challenge — poster",
    infographicLabel: "Infographic",
    infographicAlt: "NextGen CEO Challenge — infographic overview",
  },
  HomeTrust: {
    organiser: "Organiser",
    edition: "Edition",
    recognition: "Recognition",
    hashtag: "Hashtag",
    organiserVal: "MyCEO Education",
    editionVal: "Challenge 2026",
    recognitionVal: "National Certificate & PAJSK",
    hashtagVal: "#NextGenCEOChallenge2026",
  },
  ImportantDates: {
    label: "Important dates",
    title: "At a glance — NextGen CEO Challenge 2026",
  },
  HomePreview: {
    kicker: "Competition",
    title: "Explore the competition",
    subtitle:
      "All official details live on the Competition hub — pick a topic below.",
    view: "View →",
    fullCta: "Full competition overview",
  },
  HomeApaItu: {
    title: "What is Next Gen CEO?",
    beforeBrand: "An initiative by ",
    between: " to support ",
    afterPak: " and open hands-on leadership & entrepreneurship learning.",
    pill1: "Critical thinking",
    pill2: "Leadership",
    pill3: "Strategic thinking",
    readMore: "Read more",
  },
  GrandPrize: {
    title: "GRAND PRIZE",
    cert: "+ National Certificate & PAJSK Recognition",
    tagline: "Is your school among the very best?",
    hashtag: "#NextGenCEOChallenge2026",
  },
  ManfaatPelajar: {
    title: "Benefits for students",
    grandTitle: "Grand prize {amount}",
    grandDesc: "Certificate of recognition & access to professional mentors",
    c2Title: "Leadership experience",
    c2Desc:
      "Students are tested on strategy, problem-solving, and real pitching like young CEOs.",
    c3Title: "Competitive platform",
    c3Desc:
      "Compete with selected students nationwide and strengthen your profile.",
    c4Title: "Critical & creative skills",
    c4Desc:
      "Sharpened to think critically, decide quickly, and collaborate as a team.",
    c5Title: "Networking & future opportunities",
    c5Desc:
      "Meet professional mentors, industry judges, and talented peers — and open future doors.",
  },
  ManfaatSekolah: {
    title: "Benefits for schools",
    m1t: "National-level recognition",
    m1d:
      "Official participation that boosts credibility and national standing.",
    m2t: "Stronger image & reputation",
    m2d:
      "Build a positive perception as an active, progressive, competitive school.",
    m3t: "Strengthen entrepreneurship / innovation clubs",
    m3d:
      "A enrichment platform that supports co-curricular development strategically.",
    m4t: "Industry exposure & access",
    m4d:
      "Students and schools access professional mentors, entrepreneurs, and partners.",
    m5t: "Student leaders who create impact",
    m5d:
      "Participants can return as peer mentors and drivers of leadership culture.",
  },
  Terma: {
    title: "Competition terms & conditions",
    i1h: "Eligibility",
    i1p: "Open to selected invited secondary schools.",
    i2h: "Registration",
    i2p: "All registrations must go through the organiser’s official channels.",
    i3h: "Teams",
    i3p: "The team of four must be maintained throughout the programme.",
    i4h: "Terms",
    i4p: "Each team must complete every judging component during the competition.",
    i5h: "Composition",
    i5p:
      "Each team must have four lower secondary students with one teacher chaperone. Schools may enter more than one team.",
    i6h: "Information",
    i6p:
      "Information must be complete & accurate. The organiser may reject invalid entries.",
    i7h: "Changes",
    i7p: "Member changes require organiser approval.",
    i8h: "Results",
    i8p: "Judged by a panel; decisions are final.",
  },
  Penilaian: {
    title: "Judging structure — NextGen CEO Challenge 2026",
    s1h: "Teamwork",
    s1p: "Team energy, collaboration, communication, and task sharing.",
    s2h: "Idea & creativity",
    s2p: "Originality of product/idea, value add, and innovation potential.",
    s3h: "Real market execution (sales)",
    s3p: "Sales effectiveness, promotion, and real customer interaction.",
    s4h: "Final pitch (judges’ panel)",
    s4p:
      "Delivery, confidence, pitch structure, and Q&A with the judges.",
  },
  Timeline: {
    title: "Competition timeline",
    s1when: "Mar 2026",
    s1title: "Registration",
    s1desc: "Register via official channels & confirm your team.",
    s2when: "May 2026",
    s2title: "Creativity & teamwork bootcamp",
    s2desc: "Team collaboration and innovative ideas are assessed.",
    s3when: "Jun 2026",
    s3title: "Sales & pitching carnival",
    s3desc:
      "Mini sales & final pitch: real-market performance and how you present your idea.",
  },
  Registration: {
    kicker: "Official registration",
    title: "Register your school",
    bodyBefore: "All registrations must be made through the",
    bodyStrong: "official channels",
    bodyAfter: "of the organiser. Information must be complete & accurate.",
    footnote:
      "*Limited intake to maintain mentor guidance quality.",
    join: "Join The Challenge!",
    ig: "Contact / official IG",
  },
  Sponsor: {
    title: "Past sponsors",
    alt: "Featured sponsor",
  },
  HowToParticipate: {
    title: "How to participate",
    intro:
      "A simple flow from invitation to recognition. See Terms & conditions for full details.",
    stepLabel: "Step",
    s1t: "Receive invitation",
    s1d: "Selected secondary schools receive an official invitation.",
    s2t: "Register your team",
    s2d: "Complete registration through the organiser’s official channels.",
    s3t: "Bootcamp",
    s3d: "Creativity, teamwork & pitch preparation.",
    s4t: "Sales / execution",
    s4d: "Test your idea and sales in a real-world setting.",
    s5t: "Final pitch",
    s5d: "Present to the judges’ panel and answer questions.",
    s6t: "Awards",
    s6d: "Recognition, certificates & winners announced.",
    termsCta: "Terms & conditions",
    regCta: "Registration",
  },
  Educator: {
    kicker: "The evolution of leadership education",
    h1a: "Beyond academics:",
    h1b: "Shaping future leaders.",
    p1:
      "As educators, we know true excellence is no longer measured by exam papers alone.",
    p2Lead:
      "NextGen CEO is designed to complement your school ecosystem with",
    p2Hot: "High-Order Thinking Skills (HOTS)",
    p2Tail:
      "and real-world application. We help teachers spot and sharpen hidden leadership talent—turning passive potential into active competence.",
    quote:
      "Our job isn’t only to teach—it’s to build a platform where every student can think like a leader and act like an innovator.",
    igCta: "Explore programme impact & school testimonials",
    sideTitle: "Strategic school integration",
    li1: "Alignment with PAK21 skills",
    li2: "Exposure to senior mentors",
    li3: "Recognition of student profile & growth",
    register: "Register your school",
    footnote:
      "*Limited intake to maintain mentor guidance quality.",
    powered: "Powered by MyCEO Education",
  },
  ApaItu: {
    title: "What is Next Gen CEO?",
    lead:
      "Next Gen CEO is an initiative by MyCEO Education to support the Malaysia Education Development Plan and 21st Century Skills (PAK21) while giving high-potential students practical leadership and entrepreneurship experience.",
    c1t: "CRITICAL THINKING",
    c1d: "Helps students analyse, evaluate, and solve problems wisely.",
    c2t: "LEADERSHIP",
    c2d: "Builds confidence and leadership in real situations.",
    c3t: "STRATEGIC THINKING",
    c3d: "Sharpens planning and high-impact decision-making.",
  },
  CompetitionPages: {
    overviewTitle: "Competition",
    overviewSubtitle:
      "A student leadership and entrepreneurship programme by MyCEO Education. Explore every part of the competition via the links below.",
    howToTitle: "How to participate",
    howToSubtitle:
      "A concise flow for school teams. See Terms & conditions for official details.",
    awardsTitle: "Awards",
    awardsSubtitle: "Grand prize, recognition, and growth opportunities for students.",
    termsTitle: "Terms & conditions",
    termsSubtitle: "Official rules for participation, teams, and judging.",
    judgingTitle: "Judging structure",
    judgingSubtitle: "Official judging components and weighting.",
    timelineTitle: "Timeline",
    timelineSubtitle: "Registration, bootcamp, and Sales & Pitching Carnival phases.",
    registrationTitle: "Registration",
    registrationSubtitle:
      "Register through official channels. Information must be complete and accurate.",
  },
  AboutPage: {
    title: "About us",
    subtitle:
      "MyCEO — shaping a new generation bold enough to lead tomorrow's economy.",
    imageAlt: "MyCEO Education — developing young leaders",
    kicker:
      "Here, young minds are forged with entrepreneurial wisdom—creative, confident, commanding—so they are not merely employees, but employers and catalysts of change for the era ahead.",
    body1:
      "Welcome to MyCEO—a space where the next generation is shaped into business leaders with a sharp entrepreneurial mindset: sharp thinking, brave creation, confident action, and authoritative leadership. Beyond that, they are mentored systematically to carry the baton as employers and drivers of innovation in the economic landscape of the future.",
    body2:
      "Through MyCEO's entrepreneurship education programme, each child's interests, talents, and multiple intelligences are surfaced, refined, and developed so their potential is maximised with purpose. From an early age, they are introduced step by step to the world of business—not only to know it, but to care deeply—so that entrepreneurship becomes a serious, meaningful career choice when they enter adulthood. Alongside this, they are trained to become confident, strategic, and skilled leaders ready for real-world challenges.",
    body3:
      "Our ambition is clear: to nurture a generation of genius—leaders who succeed not only in the economy, but who propel society and the nation toward sustainable progress, so Malaysia stands shoulder to shoulder in global competition and sets the pace in innovation and entrepreneurship.",
    historyEyebrow: "Our journey",
    historyTitle: "How did MyCEO begin?",
    historyIntro:
      "Three chapters in our journey building generations of young entrepreneurs.",
    historyMilestone1Label: "2014",
    historyMilestone1Body:
      "Since 2014, MyCEO (Malaysia Children Entrepreneurship Orientation Program) has been a pioneer in nurturing a generation of young people with an entrepreneurial spirit. Beginning as a CSR project, MyCEO has successfully run numerous programmes with strong support from leading organisations including the Ministry of Education Malaysia, Ministry of Youth & Sports, DPMM, UPSI, UPM, SME Corp, Bursa Malaysia, RHB Bank, and many more.",
    historyMilestone2Label: "MyCEO Academy",
    historyMilestone2Body:
      "The outstanding response from parents and teachers every year encouraged us to go further. The result was MyCEO Academy, which now offers innovative programmes tailored to children and teenagers in the world of entrepreneurship.",
    historyMilestone3Label: "March 2020",
    historyMilestone3Body:
      "In March 2020, this journey continued with the establishment of MyCEO Education Sdn Bhd—a decisive step to broaden our impact and reach even more young people.",
    programsEyebrow: "What we offer",
    programsTitle: "Program MyCEO",
    programsSubtitle:
      "Structured experiences that introduce children and teens to business, money, and real-world selling—in a fun, age-appropriate way.",
    programsCta: "Learn more",
    programBucTitle: "Bengkel Usahawan Cilik",
    programBucDesc:
      "A hands-on school-holiday workshop where children learn business basics, build confidence, and practise real buying and selling in a lively, supportive setting.",
    programBucImageAlt:
      "Bengkel Usahawan Cilik — school holiday sales and pitching programme",
    programMskTitle: "Money Smart Kids",
    programMskDesc:
      "A structured programme that teaches children to manage money, understand needs versus wants, and build strong financial habits from an early age.",
    programMskImageAlt: "Money Smart Kids — financial literacy for children",
    programKkucTitle: "Kem & Karnival Usahawan Cilik",
    programKkucDesc:
      "An interactive camp and carnival where kids become “little bosses”—handling capital, selling products, and trading in a real-world mini bazaar atmosphere.",
    programKkucImageAlt:
      "Kem & Karnival Usahawan Cilik — children’s entrepreneurship showcase",
    galleryEyebrow: "Gallery",
    galleryTitle: "MyCEO in action",
    gallerySubtitle:
      "Highlights from our programmes, events, and community—moments that capture the spirit of young leadership and entrepreneurship.",
    galleryExpand: "View",
    galleryClose: "Close",
    galleryPrev: "Previous image",
    galleryNext: "Next image",
    galleryLightboxAria: "Enlarged gallery image",
    galleryOpenAria: "Open gallery image {index}",
    galleryImageAlt: "MyCEO programme photo {index}",
    galleryCounter: "{current} / {total}",
    partnersTitle: "Our sponsors & partners",
    partnersSubtitle: "Together nurturing the entrepreneurs of tomorrow",
    partnersLogosAlt:
      "Official partner logos: Yayasan Uniti, Bursa Malaysia, Encorp, PPAS, and YAWAS.",
    partnersBannerAlt:
      "Partner logos: Yayasan Uniti, Bursa Malaysia, Encorp, PPAS (Perbadanan Perpustakaan Awam Selangor), and YAWAS (Yayasan Warisan Anak Selangor).",
  },
};

fs.writeFileSync(
  path.join(root, "messages", "ms.json"),
  JSON.stringify(ms, null, 2),
  "utf8",
);
fs.writeFileSync(
  path.join(root, "messages", "en.json"),
  JSON.stringify(en, null, 2),
  "utf8",
);

console.log("Wrote messages/ms.json and messages/en.json");
