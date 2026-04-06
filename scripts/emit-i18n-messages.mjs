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
    login: "Log masuk",
    signUp: "Daftar akaun",
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
    linkSchoolLogin: "Log masuk sekolah",
    linkSchoolRegister: "Daftar akaun sekolah",
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
    login: {
      title: "Log masuk sekolah | NextGen CEO Challenge 2026",
      description:
        "Log masuk akaun sekolah anda untuk NextGen CEO Challenge 2026 — satu sekolah, satu akaun.",
    },
    register: {
      title: "Daftar akaun sekolah | NextGen CEO Challenge 2026",
      description:
        "Cipta akaun sekolah untuk NextGen CEO Challenge 2026 — satu sekolah, satu akaun, empat pelajar.",
    },
    forgotPassword: {
      title: "Tetapkan semula kata laluan | NextGen CEO Challenge 2026",
      description:
        "Minta pautan tetapan semula kata laluan untuk akaun sekolah anda — NextGen CEO Challenge 2026.",
    },
    dashboard: {
      title: "Papan pemuka koordinator | NextGen CEO Challenge 2026",
      description:
        "Ruang rasmi penyelaras: identiti sekolah, pasukan empat pelajar, dan pautan pertandingan aras antarabangsa.",
    },
    about: {
      title: "Tentang kami | NextGen CEO Challenge 2026",
      description:
        "MyCEO Education membentuk pemimpin muda dengan minda keusahawanan — kreatif, yakin, sedia memacu Malaysia ke hadapan.",
    },
    brochure: {
      title: "Brosur digital | NextGen CEO Challenge 2026",
      description:
        "Layari panduan penuh NextGen CEO Challenge 2026 — program, langkah, anugerah, jadual, penilaian, dan terma dalam satu buku flip.",
    },
  },
  Countdown: {
    finaleLabel: "Kira detik ke Grand Finale (Sep 2026)",
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
    badge: "Kepimpinan & keusahawanan pelajar · Malaysia",
    pitchLine: "Pitch. Strategize. Win!",
    body:
      "Program kebangsaan untuk sekolah menengah — kepimpinan, keusahawanan, pentas akhir dinilai.",
    prizeEyebrow: "Hadiah utama",
    prizeSub: "Anugerah tunai · pasukan pemenang",
    prizeDetailCerts: "Sijil kebangsaan untuk peserta",
    prizeDetailPajsk: "Pengiktirafan sekolah selaras PAJSK",
    timelineEyebrow: "Ringkasan musim",
    hashtag: "#NextGenCEOChallenge2026",
    ctaRegister: "Daftarkan Sekolah Anda",
    ctaSecondary: "Terma & kelayakan",
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
    videoHintMp4: "Gunakan pemain untuk bunyi dan skrin penuh.",
    videoHintYoutube: "Pemain YouTube: bunyi, kualiti, skrin penuh.",
    fallbackOverlayKicker: "Pratonton program",
    fallbackOverlayTitle: "Tonton sorotan ringkas program MyCEO",
    fallbackOverlayBody:
      "Kami elakkan thumbnail salah dipaparkan secara automatik. Tekan di bawah apabila anda sedia menonton.",
    fallbackPlay: "Main video",
    youtubeIframeTitle: "NextGen CEO Challenge — video program",
    asideHead: "Hasil pembelajaran",
    asideIntro:
      "Pelajar membina kepimpinan dan keusahawanan dunia sebenar — analisis, kerjasama, pitching. Selepas cabaran, pasukan akan:",
    aside1t: "Berfikir secara strategik",
    aside1d: "Analisis masalah, keputusan dalam kekangan, justifikasi.",
    aside2t: "Berkerjasama berpasukan",
    aside2d: "Empat pelajar + pendidik — bootcamp hingga pelaksanaan pasaran.",
    aside3t: "Pitch dengan yakin",
    aside3d: "Panel hakim, soal jawab, kehadiran profesional.",
    aside4t: "Laksana di pasaran",
    aside4d: "Jual, belajar, ulang — bukan slaid sahaja.",
    aside5t: "Capai pengiktirafan",
    aside5d: "Sijil kebangsaan · rekod sekolah selaras PAJSK.",
    posterAlt: "NextGen CEO Challenge — poster",
  },
  HomeGallery: {
    kicker: "Di lapangan",
    title: "Pelajar belajar melalui tindakan",
    subtitle:
      "Bengkel, kerja berpasukan, dan pitching — tenaga sekolah apabila menyertai cabaran ini.",
    imageAlt: "Foto program MyCEO {n}",
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
    title: "Laluan musim 2026 anda — tiga detik utama",
    sectionLead:
      "Pilih fasa yang ingin difahami — bulan dipapar jelas; setiap kad membuka jadual penuh.",
    badgeStandard: "Fasa musim",
    badgeFeatured: "Klimaks musim",
    footnote:
      "Tarikh muktamad tertakluk kepada pengesahan rasmi penganjur — rujuk Terma & Syarat untuk butiran.",
    visualFallback:
      "Karya rasmi dan poster dikongsi dengan sekolah berdaftar — terokai halaman Competition untuk visual penuh.",
  },
  HomePreview: {
    kicker: "Gambaran program",
    title: "Apa yang ada di halaman Competition",
    subtitle:
      "Setiap tajuk di bawah ada dokumentasi penuh di halaman Competition — disusun untuk pendidik dan pihak sekolah.",
    cardEyebrow: "Bahagian hub",
    hubHint:
      "Peraturan, kriteria penilaian, anugerah, dan pendaftaran berada di satu tempat.",
    hubLink: "Buka halaman Competition",
  },
  HomeOutcomes: {
    kicker: "Hasil",
    title: "Kepimpinan sebenar untuk sekolah",
    subtitle: "Program kebangsaan—bukan acara sekali sahaja.",
    sideImageAlt: "Foto aktiviti program MyCEO / NextGen CEO {n}",
    o1t: "Berfikir strategik",
    o1d:
      "Pelajar latih merancang, berkomunikasi, dan membuat keputusan—kemahiran kekal selepas kelas.",
    o2t: "Pengiktirafan rasmi",
    o2d: "Sijil dan rekod selaras PAJSK—bukti jelas untuk keluarga dan sekolah.",
    o3t: "Mentor & industri",
    o3d: "Pasukan berjumpa mentor dan juri perniagaan; bina keyakinan dengan bimbingan.",
    o4t: "Tarikh jelas",
    o4d:
      "Dari pendaftaran ke pentas akhir—tanda masa mudah diselaraskan dengan tahun persekolahan.",
  },
  HomeFaq: {
    kicker: "Soalan lazim",
    title: "Soalan pihak sekolah",
    subtitle:
      "Jawapan langsung tentang struktur, pengiktirafan, dan di mana butiran rasmi berada.",
    q1: "Untuk siapa NextGen CEO Challenge?",
    a1:
      "Program ini direka untuk pelajar menengah dan sekolah yang mahukan pengalaman keusahawanan dan kepimpinan peringkat kebangsaan yang mantap. Sekolah mendaftar sebagai institusi penyertaan; pelajar bersaing sebagai pasukan dengan sokongan pendidik.",
    q2: "Apakah pengiktirafan untuk pelajar dan sekolah?",
    a2:
      "Peserta layak memperoleh sijil kebangsaan dan pengiktirafan berkaitan PAJSK seperti dinyatakan dalam anugerah dan terma rasmi. Kategori dan syarat tepat diterbitkan di halaman Competition untuk dikongsi dengan pihak atasan dan ibu bapa.",
    q3: "Berapa masa yang diperlukan?",
    a3:
      "Musim bermula dari pendaftaran, bootcamp, pencapaian pitching, hingga tetingkap grand finale. Halaman timeline menyenaraikan tarikh penting untuk merancang komitmen guru dan pasukan pelajar.",
    q4: "Di mana peraturan rasmi dan kriteria penilaian?",
    a4:
      "Semua dokumen — terma, pecahan penilaian, dan langkah penyertaan — berada di bahagian Competition laman ini. Satu hub supaya anda tidak mencari merata PDF atau salinan tidak rasmi.",
    q5: "Bagaimana mendaftar?",
    a5:
      "Gunakan “Daftarkan Sekolah Anda” untuk alur pendaftaran rasmi. Jika perlu penjelasan sebelum komit, gunakan halaman Contact dan kami akan salurkan melalui saluran rasmi penganjur.",
  },
  HomeFinalCta: {
    kicker: "Langkah seterusnya",
    title: "Tempah kedudukan sekolah anda di pentas kebangsaan",
    body:
      "Sertai sekolah-sekolah yang melabur dalam kepimpinan, keusahawanan, dan pencapaian beriktiraf untuk pelajar.",
    cta: "Daftarkan sekolah anda",
    termsLink: "Baca terma & kelayakan",
  },
  HomeApaItu: {
    logoAlt: "Logo MyCEO Education",
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
    s1when: "April 2026",
    s1title: "Pendaftaran",
    s1desc:
      "Daftar melalui saluran rasmi & sahkan penyertaan pasukan.",
    s2when: "Ogos 2026",
    s2title: "Bootcamp Kreativiti & Teamwork",
    s2desc: "Kerjasama pasukan dan idea inovatif dinilai.",
    s3when: "September 2026",
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
    gepHeroPill: "Inovasi. Inspirasi. Impak.",
    gepHeroTitle: "NextGen CEO Challenge 2026",
    gepHeroLead:
      "Program kebangsaan untuk sekolah menengah — kepimpinan, keusahawanan, dan pentas akhir dinilai. Pasukan pitch, strategi, dan laksana di pasaran sebenar dengan sokongan mentor.",
    gepCardStarts: "Bermula dari",
    gepCardHeadline: "Kemasukan rasmi",
    gepCardMetaDate: "Musim April – September 2026",
    gepCardMetaAudience: "Pasukan sekolah menengah (sekolah terjemputan)",
    gepCardMetaLocation: "Malaysia · pentas kebangsaan",
    gepBrochure: "Muat turun brosur",
    gepRegister: "Daftarkan sekolah anda",
    datesTitle: "Tarikh musim",
    datesYear: "2026",
    datesAvailability: "Masih ada tempat",
    datesPhase: "Fasa musim",
    datesBook: "Daftar sekarang",
    datesPrizeLine: "Kumpulan hadiah utama {amount}",
    alreadyHaveAccount: "Sudah ada akaun sekolah?",
    loginCta: "Log masuk",
    newAccountPrompt: "Belum ada akaun sekolah?",
    signUpCta: "Daftar akaun",
  },
  AuthSidebar: {
    kicker: "Akaun sekolah",
    title: "Satu sekolah · satu log masuk · empat pelajar",
    lead:
      "Akaun rasmi untuk koordinator sekolah—urus pasukan dan maklumat pertandingan dari satu tempat yang selamat.",
    b1: "Satu akaun rasmi bagi setiap sekolah yang menyertai.",
    b2: "Sehingga empat pelajar bagi pendaftaran pasukan.",
    b3: "Papan pemuka untuk kemas kini borang pasukan dan maklumat sekolah.",
    b4: "Penyertaan pertandingan juga melalui saluran rasmi penganjur mengikut terma rasmi.",
    b5:
      "Pelajar tidak log masuk ke laman ini—koordinator berkongsi pautan rasmi, jadual, dan arahan melalui kelas atau saluran sekolah anda.",
  },
  SchoolLogin: {
    title: "Log masuk sekolah",
    intro: "Log masuk dengan e-mel dan kata laluan sekolah anda untuk mengurus pasukan anda.",
    emailLabel: "E-mel",
    passwordLabel: "Kata laluan",
    rememberMe: "Ingat saya pada peranti ini",
    showPassword: "Tunjuk kata laluan",
    hidePassword: "Sembunyikan kata laluan",
    forgotPassword: "Lupa kata laluan?",
    submit: "Log masuk",
    submitting: "Menghantar…",
    helpBefore: "Perlukan bantuan?",
    helpContact: "Hubungi kami",
    backHome: "Kembali ke laman utama",
    createAccountPrompt: "Belum ada akaun sekolah?",
    createAccountCta: "Daftar akaun",
    goToDashboard: "Ke papan pemuka sekolah",
    successTitle: "Log masuk berjaya",
    successBody:
      "Selamat kembali. Teruskan ke ruang pasukan atau maklumat pertandingan melalui menu laman ini.",
    errors: {
      email: "Masukkan e-mel.",
      emailFormat: "Masukkan alamat e-mel yang sah.",
      password: "Masukkan kata laluan.",
      passwordShort: "Kata laluan mestilah sekurang-kurangnya 8 aksara.",
      invalidCredentials: "E-mel atau kata laluan tidak sah.",
      emailNotConfirmed:
        "E-mel belum disahkan. Semak peti masuk untuk pautan pengesahan atau hubungi sokongan.",
      config: "Perkhidmatan log masuk tidak dikonfigurasikan dengan betul. Cuba lagi nanti.",
    },
  },
  SchoolForgotPassword: {
    title: "Tetapkan semula kata laluan",
    intro:
      "Masukkan e-mel akaun sekolah anda. Kami akan menghantar pautan untuk menetapkan semula kata laluan.",
    emailLabel: "E-mel akaun sekolah",
    submit: "Hantar pautan",
    submitting: "Menghantar…",
    backLogin: "Kembali ke log masuk",
    successTitle: "Semak e-mel anda",
    successBody:
      "Jika e-mel itu berdaftar dengan kami, arahan tetapan semula telah dihantar. Semak peti masuk dan folder spam.",
    errors: {
      email: "Masukkan e-mel.",
      emailFormat: "Masukkan alamat e-mel yang sah.",
      sendFailed: "Tidak dapat menghantar e-mel. Cuba lagi nanti.",
      config: "Perkhidmatan tidak dikonfigurasikan dengan betul. Cuba lagi nanti.",
    },
  },
  SchoolRegister: {
    title: "Daftar akaun sekolah",
    intro:
      "Daftar akaun koordinator sekolah anda di bawah. Tiada log masuk untuk pelajar—anda berkongsi maklumat rasmi dengan pasukan. Selepas pendaftaran, log masuk dengan e-mel dan kata laluan untuk mengurus pasukan.",
    sectionSchool: "Maklumat sekolah",
    sectionAccount: "Akaun log masuk",
    schoolNameLabel: "Nama sekolah",
    coordinatorLabel: "Nama guru / penyelaras (pilihan)",
    phoneLabel: "Telefon penyelaras (pilihan)",
    phoneHint: "Untuk dihubungi berkenaan pasukan.",
    emailLabel: "E-mel (log masuk)",
    passwordLabel: "Kata laluan",
    passwordHint: "Sekurang-kurangnya 8 aksara — gabungan huruf dan nombor disyorkan.",
    confirmLabel: "Sahkan kata laluan",
    showPassword: "Tunjuk",
    hidePassword: "Sembunyi",
    termsPrefix: "Saya baca dan bersetuju dengan",
    termsLink: "Terma & Syarat",
    termsSuffix: " dan mengesahkan maklumat sekolah adalah tepat.",
    privacyNote:
      "Data digunakan untuk pentadbiran pertandingan dan komunikasi rasmi penganjur sahaja.",
    submit: "Cipta akaun",
    submitting: "Menghantar…",
    loginPrompt: "Sudah ada akaun?",
    loginCta: "Log masuk",
    successTitle: "Akaun dicipta",
    successBody:
      "Akaun koordinator sekolah anda telah siap. Log masuk dengan e-mel anda untuk membuka papan pemuka pasukan dan mengemas kini maklumat sehingga empat pelajar.",
    errors: {
      schoolName: "Masukkan nama sekolah.",
      email: "Masukkan e-mel.",
      emailFormat: "Masukkan alamat e-mel yang sah.",
      password: "Masukkan kata laluan.",
      passwordShort: "Kata laluan mestilah sekurang-kurangnya 8 aksara.",
      confirm: "Sahkan kata laluan anda.",
      mismatch: "Kata laluan tidak sepadan.",
      terms: "Sila tandakan persetujuan terma.",
      emailTaken: "E-mel ini sudah didaftarkan. Log masuk atau gunakan e-mel lain.",
      signupFailed: "Pendaftaran tidak berjaya. Cuba lagi atau hubungi sokongan.",
      weakPassword: "Kata laluan terlalu lemah. Gunakan gabungan huruf, nombor atau simbol.",
      config: "Perkhidmatan tidak dikonfigurasikan dengan betul. Cuba lagi nanti.",
    },
  },
  SchoolDashboard: {
    title: "Papan pemuka koordinator",
    heroKicker: "NextGen CEO Challenge · Aras global & HOTS",
    heroTitle: "Pusat kawalan profesional — bimbing pasukan pelajar pintar anda",
    heroSubtitle:
      "Ruang ini untuk penyelaras rasmi: kemas kini identiti sekolah, jaringkan hingga empat pelajar yang mewakili visi kepemimpinan antarabangsa, dan kekalkan tumpuan pada pemikiran aras tinggi serta kesiapsiagaan pentas dunia.",
    welcomeLine: "Log masuk sebagai {email}",
    rosterStats: "Roster pasukan",
    sessionTitle: "Akaun anda",
    sessionOk: "Sesi disulitkan dan disambungkan dengan selamat.",
    emailLabel: "E-mel",
    userIdLabel: "ID pengguna",
    sessionSupportRef: "Rujukan sokongan",
    sessionSupportRefHint:
      "Hanya perlu jika penganjur meminta pengesahan akaun. Jangan kongsi dengan pelajar.",
    copyRef: "Salin rujukan",
    copied: "Disalin",
    schoolTitle: "Identiti sekolah",
    schoolName: "Nama sekolah",
    coordinatorName: "Nama guru / penyelaras",
    coordinatorPhone: "Telefon penyelaras",
    saveSchool: "Simpan maklumat sekolah",
    saveTeam: "Simpan senarai pasukan",
    saving: "Menyimpan…",
    schoolSaved: "Maklumat sekolah dikemas kini.",
    teamSaved: "Senarai pasukan dikemas kini.",
    teamHint:
      "Empat slot untuk bakat terbaik sekolah anda — nama penuh seperti di dokumen rasmi. Kosongkan slot yang belum diisi.",
    noSchoolRow:
      "Profil sekolah belum tersedia. Sahkan migrasi `supabase/migrations` telah dijalankan di Supabase, kemudian cipta akaun atau hubungi pentadbir.",
    loadError: "Tidak dapat memuatkan profil. Semak sambungan dan jadual pangkalan data.",
    teamTitle: "Pasukan pelajar (maks. 4)",
    teamEmpty: "Belum ada pelajar disenaraikan — isi borang di bawah.",
    slotShort: "Pelajar {slot}",
    signOut: "Log keluar",
    signingOut: "Melog keluar…",
    backHome: "Laman utama rasmi",
    quickLinks: "Pautan penting",
    quickLinksIntro: "Capaian pantas halaman pertandingan rasmi.",
    linkCompetition: "Gambaran competition",
    linkRegistration: "Pendaftaran",
    linkTerms: "Terma & syarat",
    linkContact: "Hubungi penganjur",
    rosterCount: "{count} / 4 pelajar",
    runMigrationsHint:
      "Pasangkan migrasi dalam `supabase/migrations/` pada projek Supabase anda, kemudian log masuk semula.",
    cardDecor: "Standard antarabangsa · satu sekolah · satu pasukan",
    shareTitle: "Kongsi dengan pasukan pelajar",
    shareLead:
      "Akses laman ini hanya untuk guru / penyelaras rasmi. Pelajar tidak mempunyai akaun—jadikan papan pemuka ini pusat anda, kemudian sebarkan bahan pertandingan kepada pasukan melalui saluran sekolah (kelas, mesyuarat, WhatsApp sekolah, dll.).",
    shareB1:
      "Gunakan Pautan penting di sebelah untuk membuka halaman rasmi (competition, cara penyertaan, pendaftaran, terma).",
    shareB2: "Jelaskan timeline dan kriteria penilaian supaya pelajar faham tahap cabaran antarabangsa & HOTS.",
    shareB3: "Pastikan empat nama dalam roster sepadan dengan pelajar yang akan mewakili sekolah secara rasmi.",
    shareB4:
      "Untuk pertanyaan rasmi kepada penganjur, gunakan halaman hubungi—kongsi jawapan kepada pasukan jika relevan.",
    linkHowTo: "Cara penyertaan",
    errors: {
      schoolName: "Masukkan nama sekolah.",
      saveFailed: "Tidak dapat menyimpan. Cuba lagi.",
      noProfile: "Profil sekolah tidak dijumpai.",
    },
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
  CompetitionBrochure: {
    heroTitle: "Brosur digital",
    heroSubtitle:
      "Balikkan halaman untuk cerita penuh pertandingan — maklumat sama seperti halaman Competition, dalam satu panduan.",
    homeSectionKicker: "Panduan program lengkap",
    homeSectionTitle: "Panduan pertandingan — layari setiap butiran",
    homeSectionSubtitle:
      "Langkah, anugerah, manfaat, jadual, penilaian, terma, integrasi pendidik, FAQ, hubungi, dan pendaftaran — setanding halaman Competition, dalam satu buku di laman utama.",
    flipHint:
      "Seret sudut atau ketik tepi halaman untuk membalik. Gunakan butang di bawah pada mana-mana peranti.",
    coverKicker: "Panduan rasmi",
    coverTitle: "NextGen CEO Challenge 2026",
    coverSubtitle:
      "Kepimpinan & keusahawanan pelajar — pitch, strategi, dan bersaing di pentas kebangsaan.",
    sectionWelcome: "Selamat datang",
    syncNote:
      "Untuk teks terkini dan PDF, rujuk halaman Competition yang berasingan.",
    syncNoteLanding:
      "Halaman Competition kekal sebagai rujukan rasmi untuk PDF dan kemas kini akhir minit.",
    howToContinued: "Sambungan",
    educatorPageEyebrow: "Untuk pendidik",
    faqPageEyebrow: "Soalan lazim",
    resourcesEyebrow: "Jawapan lanjut & pautan",
    resourcesIntro: "Buka halaman penuh bila-bila masa:",
    learnMoreOnPages:
      "Setiap halaman hub membawa bahagian yang sama dalam bentuk panjang apabila anda perlu kongsi pautan terus.",
    loadingBook: "Menyediakan buku flip…",
    registerCta: "Daftarkan sekolah anda",
    backToHub: "Halaman Competition",
    backToGuideTop: "Kembali ke atas panduan ini",
    redirectingToGuide: "Membawa anda ke panduan pertandingan di laman utama…",
    prev: "Halaman sebelum",
    next: "Halaman seterus",
    bannerCta: "Buka brosur digital",
    bannerSub:
      "Semua maklumat pertandingan dalam buku flip — seperti panduan program yang boleh dilayari.",
  },
  CompetitionHub: {
    kicker: "Panduan program",
    title: "Topik pertandingan, langkah demi langkah",
    subtitle:
      "Setiap kad merangkum satu bahagian. Gunakan pautan untuk halaman rasmi, PDF, atau kongsi satu topik dengan pihak sekolah.",
    dragHint:
      "Swipe, seret, ketik anak panah, atau gunakan kekunci ← →. Sama pada telefon, tablet, dan komputer meja.",
    prevAria: "Topik sebelumnya",
    nextAria: "Topik seterusnya",
    announcer: "Topik {current} daripada {total}",
    termsSnapshotNote:
      "Untuk teks undang-undang lengkap, buka Terma & Syarat.",
    exploreFullHub: "Lihat semua topik di laman utama",
    homeKicker: "Untuk pasukan sekolah yang sibuk",
    homeTitle: "Musim 2026 dalam beberapa kad",
    homeSubtitle:
      "Sembilan topik ringkas — daripada “apa ini?” hingga pendaftaran. Ayat mudah dibaca, tarikh penting, dan langkah seterus. Buka pautan bila perlukan halaman rasmi penuh.",
    slideIntroLabel: "Pengenalan",
    slideWhatLabel: "Apa itu",
    slideHowLabel: "Cara penyertaan",
    slideAwardsLabel: "Anugerah",
    slideJudgingLabel: "Penilaian",
    slideTimelineLabel: "Timeline",
    slideTermsLabel: "Terma ringkas",
    slideRegisterLabel: "Daftar",
    timelineTablePhase: "Fasa musim — tarikh & fokus",
  },
  FlipbookBrochure: {
    eyebrow: "Brosur digital",
    title: "Layari panduan musim 2026",
    openNewTab: "Buka brosur penuh dalam tab baharu",
    embedFallback: "Ketik untuk membuka brosur digital",
    vendorNote:
      "Pembaca buku flip disediakan luaran — ala brosur katalog seperti kamp pengayaan global.",
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
    login: "Log in",
    signUp: "Sign up",
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
    linkSchoolLogin: "School login",
    linkSchoolRegister: "Create school account",
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
    login: {
      title: "School login | NextGen CEO Challenge 2026",
      description:
        "Sign in to your school account for NextGen CEO Challenge 2026 — one school, one account.",
    },
    register: {
      title: "Create school account | NextGen CEO Challenge 2026",
      description:
        "Create your school account for NextGen CEO Challenge 2026 — one school, one account, four students.",
    },
    forgotPassword: {
      title: "Reset password | NextGen CEO Challenge 2026",
      description:
        "Request a password reset link for your school account — NextGen CEO Challenge 2026.",
    },
    dashboard: {
      title: "Coordinator dashboard | NextGen CEO Challenge 2026",
      description:
        "Official coordinator workspace: school identity, team of four, and competition links at global standard.",
    },
    about: {
      title: "About us | NextGen CEO Challenge 2026",
      description:
        "MyCEO Education shapes young leaders with entrepreneurial wisdom—creative, confident, ready to drive Malaysia forward.",
    },
    brochure: {
      title: "Digital brochure | NextGen CEO Challenge 2026",
      description:
        "Flip through the full NextGen CEO Challenge 2026 guide — programme, steps, awards, timeline, judging, and terms in one place.",
    },
  },
  Countdown: {
    finaleLabel: "Countdown to finale (Sep 2026)",
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
    badge: "Student leadership & entrepreneurship · Malaysia",
    pitchLine: "Pitch. Strategize. Win!",
    body:
      "National programme for secondary schools — leadership, entrepreneurship, judged finale.",
    prizeEyebrow: "Grand prize",
    prizeSub: "Cash award · winning team",
    prizeDetailCerts: "National certificates for participants",
    prizeDetailPajsk: "PAJSK-aligned school recognition",
    timelineEyebrow: "Season overview",
    hashtag: "#NextGenCEOChallenge2026",
    ctaRegister: "Register your school",
    ctaSecondary: "Terms & eligibility",
    miniMac: "April",
    miniMei: "August",
    miniJun: "Sep",
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
    videoHintMp4: "Use the player for sound and full screen.",
    videoHintYoutube: "YouTube player: sound, quality, full screen.",
    fallbackOverlayKicker: "Programme preview",
    fallbackOverlayTitle: "Watch a short teaser from MyCEO programmes",
    fallbackOverlayBody:
      "We keep this slot clean so the wrong thumbnail is not shown at a glance. Tap below when you are ready to play.",
    fallbackPlay: "Play video",
    youtubeIframeTitle: "NextGen CEO Challenge — programme video",
    asideHead: "Learning outcomes",
    asideIntro:
      "Students build real-world leadership and entrepreneurship — analyse, collaborate, pitch. By the end of the challenge, teams will:",
    aside1t: "Think strategically",
    aside1d: "Analyse problems, decide under constraints, justify choices.",
    aside2t: "Collaborate as a team",
    aside2d: "Four students + educator — bootcamp through market execution.",
    aside3t: "Pitch with confidence",
    aside3d: "Judges’ panel, Q&A, professional presence.",
    aside4t: "Execute in the market",
    aside4d: "Sell, learn, iterate — beyond slides.",
    aside5t: "Earn recognised outcomes",
    aside5d: "National certificates · PAJSK-aligned school records.",
    posterAlt: "NextGen CEO Challenge — poster",
  },
  HomeGallery: {
    kicker: "On the ground",
    title: "Students learning by doing",
    subtitle:
      "Workshops, teamwork, and pitching — the energy schools bring when they join the challenge.",
    imageAlt: "MyCEO programme photo {n}",
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
    title: "Your 2026 season path — three milestones",
    sectionLead:
      "Each card highlights a phase and the month window — tap through for the full timeline.",
    badgeStandard: "Season phase",
    badgeFeatured: "Finale phase",
    footnote:
      "Final dates may be confirmed by the organiser — see Terms & conditions for official detail.",
    visualFallback:
      "Official artwork and posters are shared with registered schools — explore the Competition hub for full visuals.",
  },
  HomePreview: {
    kicker: "Programme overview",
    title: "What you will find on the Competition hub",
    subtitle:
      "Every section below is documented in full on the official Competition pages — structured for educators and school leaders.",
    cardEyebrow: "Hub section",
    hubHint:
      "Rules, judging criteria, awards, and registration are all in one place.",
    hubLink: "Open the Competition hub",
  },
  HomeOutcomes: {
    kicker: "Outcomes",
    title: "Real leadership for schools",
    subtitle: "A national programme—not a one-off event.",
    sideImageAlt: "MyCEO / NextGen CEO programme activity photo {n}",
    o1t: "Strategic thinking",
    o1d:
      "Students practise planning, communicating, and deciding under pressure—skills that last beyond the classroom.",
    o2t: "Official recognition",
    o2d:
      "Certificates and PAJSK-aligned records give families and schools clear proof of participation.",
    o3t: "Mentors & industry",
    o3d:
      "Teams meet business mentors and judges and build confidence with guided support.",
    o4t: "Clear dates",
    o4d:
      "From registration to finale—key milestones you can map to the school year.",
  },
  HomeFaq: {
    kicker: "FAQ",
    title: "Questions school leaders ask",
    subtitle:
      "Straight answers about structure, recognition, and where to find official detail.",
    q1: "Who is NextGen CEO Challenge for?",
    a1:
      "The programme is designed for secondary students and schools that want a rigorous, national-level entrepreneurship and leadership experience. Your school registers as the participating institution; students compete as teams with educator support.",
    q2: "What recognition do students and schools receive?",
    a2:
      "Participants can earn national certificates and PAJSK-related recognition as outlined in the official awards and terms. Exact categories and conditions are published on the Competition hub so you can share them with leadership and parents.",
    q3: "How much time does the programme take?",
    a3:
      "The season runs from registration through bootcamp, pitching milestones, and the grand finale window. The timeline page lists key dates so you can map commitments for teachers and student teams.",
    q4: "Where are the official rules and judging criteria?",
    a4:
      "All governing documents — terms, judging breakdown, and participation steps — live on the Competition section of this site. We keep a single hub so you are never hunting across PDFs or unofficial copies.",
    q5: "How do we register?",
    a5:
      "Use “Register your school” to reach the official registration flow. If you need clarification before committing, use the Contact page and we will route you through the organiser’s official channels.",
  },
  HomeFinalCta: {
    kicker: "Next step",
    title: "Secure your school’s place on the national stage",
    body:
      "Join a cohort of schools investing in leadership, entrepreneurship, and recognised achievement for their students.",
    cta: "Register your school",
    termsLink: "Read terms & eligibility",
  },
  HomeApaItu: {
    logoAlt: "MyCEO Education logo",
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
    s1when: "April 2026",
    s1title: "Registration",
    s1desc: "Register via official channels & confirm your team.",
    s2when: "August 2026",
    s2title: "Creativity & teamwork bootcamp",
    s2desc: "Team collaboration and innovative ideas are assessed.",
    s3when: "September 2026",
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
    gepHeroPill: "Innovate. Inspire. Impact.",
    gepHeroTitle: "NextGen CEO Challenge 2026",
    gepHeroLead:
      "A national programme for secondary schools — leadership, entrepreneurship, and a judged finale. Teams pitch, strategize, and execute in the real market with mentor support.",
    gepCardStarts: "Starts from",
    gepCardHeadline: "Official intake",
    gepCardMetaDate: "April – September 2026 season",
    gepCardMetaAudience: "Secondary school teams (invited schools)",
    gepCardMetaLocation: "Malaysia · national stage",
    gepBrochure: "Download brochure",
    gepRegister: "Register your school",
    datesTitle: "Season dates",
    datesYear: "2026",
    datesAvailability: "Places available",
    datesPhase: "Season phase",
    datesBook: "Book now",
    datesPrizeLine: "{amount} grand prize pool",
    alreadyHaveAccount: "Already have a school account?",
    loginCta: "Log in",
    newAccountPrompt: "Need to create a school account?",
    signUpCta: "Sign up",
  },
  AuthSidebar: {
    kicker: "School account",
    title: "One school · one login · four students",
    lead:
      "Your official coordinator account—manage your team and competition details in one secure place.",
    b1: "One official account per competing school.",
    b2: "Up to four students on the team roster.",
    b3: "Dashboard to update team forms and school information.",
    b4: "Competition entry also follows the organiser’s official channels and published terms.",
    b5:
      "Students do not sign in here—the coordinator shares official links, timelines, and instructions in class or through your school’s channels.",
  },
  SchoolLogin: {
    title: "School login",
    intro: "Sign in with your school email and password to manage your team.",
    emailLabel: "Email",
    passwordLabel: "Password",
    rememberMe: "Remember me on this device",
    showPassword: "Show password",
    hidePassword: "Hide password",
    forgotPassword: "Forgot password?",
    submit: "Log in",
    submitting: "Signing in…",
    helpBefore: "Need help?",
    helpContact: "Contact us",
    backHome: "Back to home",
    createAccountPrompt: "No school account yet?",
    createAccountCta: "Create an account",
    goToDashboard: "Go to school dashboard",
    successTitle: "Signed in",
    successBody:
      "Welcome back. Continue to your team area or competition information using the site menu.",
    errors: {
      email: "Enter your email.",
      emailFormat: "Enter a valid email address.",
      password: "Enter your password.",
      passwordShort: "Password must be at least 8 characters.",
      invalidCredentials: "Invalid email or password.",
      emailNotConfirmed:
        "This email is not confirmed yet. Check your inbox for a confirmation link or contact support.",
      config: "Sign-in is not configured correctly. Please try again later.",
    },
  },
  SchoolForgotPassword: {
    title: "Reset password",
    intro:
      "Enter your school account email. We will send you a link to reset your password.",
    emailLabel: "School account email",
    submit: "Send reset link",
    submitting: "Sending…",
    backLogin: "Back to login",
    successTitle: "Check your email",
    successBody:
      "If that address is registered, reset instructions have been sent. Check your inbox and spam folder.",
    errors: {
      email: "Enter your email.",
      emailFormat: "Enter a valid email address.",
      sendFailed: "Could not send the email. Please try again later.",
      config: "Service is not configured correctly. Please try again later.",
    },
  },
  SchoolRegister: {
    title: "Create school account",
    intro:
      "Register your school coordinator account below. Students do not receive logins—you share official information with your team. After signing up, log in with your email and password to manage your team.",
    sectionSchool: "School details",
    sectionAccount: "Login account",
    schoolNameLabel: "School name",
    coordinatorLabel: "Teacher / coordinator name (optional)",
    phoneLabel: "Coordinator phone (optional)",
    phoneHint: "For organiser contact about your team.",
    emailLabel: "Email (for login)",
    passwordLabel: "Password",
    passwordHint: "At least 8 characters — letters and numbers recommended.",
    confirmLabel: "Confirm password",
    showPassword: "Show",
    hidePassword: "Hide",
    termsPrefix: "I have read and agree to the",
    termsLink: "Terms & conditions",
    termsSuffix: " and confirm the school information is accurate.",
    privacyNote:
      "Data is used only for competition administration and official organiser communication.",
    submit: "Create account",
    submitting: "Submitting…",
    loginPrompt: "Already have an account?",
    loginCta: "Log in",
    successTitle: "Account created",
    successBody:
      "Your school coordinator account is ready. Sign in with your email to open your team dashboard and update details for up to four students.",
    errors: {
      schoolName: "Enter your school name.",
      email: "Enter your email.",
      emailFormat: "Enter a valid email address.",
      password: "Enter a password.",
      passwordShort: "Password must be at least 8 characters.",
      confirm: "Confirm your password.",
      mismatch: "Passwords do not match.",
      terms: "Please accept the terms to continue.",
      emailTaken: "This email is already registered. Sign in or use a different email.",
      signupFailed: "Registration could not be completed. Try again or contact support.",
      weakPassword: "Password is too weak. Use a mix of letters, numbers, or symbols.",
      config: "Service is not configured correctly. Please try again later.",
    },
  },
  SchoolDashboard: {
    title: "Coordinator dashboard",
    heroKicker: "NextGen CEO Challenge · Global standard & HOTS",
    heroTitle: "Your leadership command centre for world-ready students",
    heroSubtitle:
      "The official coordinator workspace: keep your school identity current, register up to four students who represent international-calibre leadership thinking, and stay aligned with high-order thinking and global-stage readiness.",
    welcomeLine: "Signed in as {email}",
    rosterStats: "Team roster",
    sessionTitle: "Your account",
    sessionOk: "Encrypted session — securely connected.",
    emailLabel: "Email",
    userIdLabel: "User ID",
    sessionSupportRef: "Support reference",
    sessionSupportRefHint:
      "Only if organisers ask you to verify this account. Do not share with students.",
    copyRef: "Copy reference",
    copied: "Copied",
    schoolTitle: "School identity",
    schoolName: "School name",
    coordinatorName: "Teacher / coordinator name",
    coordinatorPhone: "Coordinator phone",
    saveSchool: "Save school details",
    saveTeam: "Save team roster",
    saving: "Saving…",
    schoolSaved: "School details updated.",
    teamSaved: "Team roster updated.",
    teamHint:
      "Four slots for your school’s strongest talent — use full legal names. Leave unused slots empty.",
    noSchoolRow:
      "School profile not found yet. Confirm `supabase/migrations` has been applied in Supabase, then create an account or contact your admin.",
    loadError: "Could not load your profile. Check your connection and database tables.",
    teamTitle: "Student team (maximum 4)",
    teamEmpty: "No students listed yet — use the form below.",
    slotShort: "Student {slot}",
    signOut: "Sign out",
    signingOut: "Signing out…",
    backHome: "Official home",
    quickLinks: "Priority links",
    quickLinksIntro: "Fast access to official competition pages.",
    linkCompetition: "Competition overview",
    linkRegistration: "Registration",
    linkTerms: "Terms & conditions",
    linkContact: "Contact organisers",
    rosterCount: "{count} / 4 students",
    runMigrationsHint:
      "Apply the migrations in `supabase/migrations/` on your Supabase project, then sign in again.",
    cardDecor: "International standard · one school · one team",
    shareTitle: "Share with your student team",
    shareLead:
      "Only the official teacher / coordinator uses this website. Students do not have accounts—treat this dashboard as your hub, then pass competition materials to your team through your school channels (class, briefing, school-approved messaging, etc.).",
    shareB1:
      "Use Priority links to open official pages (overview, how to participate, registration, terms).",
    shareB2: "Walk students through the timeline and judging criteria so they feel the international, high-order thinking standard.",
    shareB3: "Keep the four roster names aligned with the students who will officially represent your school.",
    shareB4:
      "For organiser questions, use Contact—share verified answers with your team when appropriate.",
    linkHowTo: "How to participate",
    errors: {
      schoolName: "Enter the school name.",
      saveFailed: "Could not save. Try again.",
      noProfile: "School profile not found.",
    },
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
  CompetitionBrochure: {
    heroTitle: "Digital brochure",
    heroSubtitle:
      "Turn the pages for the full competition story — same information as the Competition hub, in one flowing guide.",
    homeSectionKicker: "Complete programme guide",
    homeSectionTitle: "Competition guide — flip through every detail",
    homeSectionSubtitle:
      "Steps, awards, benefits, timeline, judging, terms, educator integration, FAQ, contact, and registration — the same depth as the Competition hub, in one book on the home page.",
    flipHint:
      "Drag corners or tap edges to turn pages. Use the buttons below on any device.",
    coverKicker: "Official guide",
    coverTitle: "NextGen CEO Challenge 2026",
    coverSubtitle:
      "Student leadership & entrepreneurship — pitch, strategize, and compete on the national stage.",
    sectionWelcome: "Welcome",
    syncNote:
      "For the latest wording and PDFs, always refer to the individual Competition pages.",
    syncNoteLanding:
      "Official Competition pages remain the source of truth for PDFs and last-minute updates.",
    howToContinued: "Continuation",
    educatorPageEyebrow: "For educators",
    faqPageEyebrow: "FAQ",
    resourcesEyebrow: "More answers & links",
    resourcesIntro: "Open full pages anytime:",
    learnMoreOnPages:
      "Each hub page carries the same sections in long form when you need to share a direct link.",
    loadingBook: "Preparing flipbook…",
    registerCta: "Register your school",
    backToHub: "Competition hub",
    backToGuideTop: "Back to top of this guide",
    redirectingToGuide: "Taking you to the competition guide on the home page…",
    prev: "Previous page",
    next: "Next page",
    bannerCta: "Open digital brochure",
    bannerSub:
      "All competition information in a flipbook — like a downloadable programme guide.",
  },
  CompetitionHub: {
    kicker: "Programme overview",
    title: "Competition topics, step by step",
    subtitle:
      "Each card covers one part of the programme. Use the links for official pages, PDFs, or to share a single topic with your team.",
    dragHint:
      "Swipe, drag, use the arrows, or press ← → on your keyboard — the same on phones, tablets, and desktops.",
    prevAria: "Previous topic",
    nextAria: "Next topic",
    announcer: "Topic {current} of {total}",
    termsSnapshotNote:
      "For the complete legal text, open Terms & conditions.",
    exploreFullHub: "See all topics on the home page",
    homeKicker: "Made for busy school teams",
    homeTitle: "The 2026 season in a few cards",
    homeSubtitle:
      "Nine short topics — from “what is this?” to registration. Plain wording, key dates, and what to do next. Open a link anytime you need the full official page.",
    slideIntroLabel: "Introduction",
    slideWhatLabel: "What it is",
    slideHowLabel: "How to participate",
    slideAwardsLabel: "Awards",
    slideJudgingLabel: "Judging",
    slideTimelineLabel: "Timeline",
    slideTermsLabel: "Terms snapshot",
    slideRegisterLabel: "Register",
    timelineTablePhase: "Season phases — dates & focus",
  },
  FlipbookBrochure: {
    eyebrow: "Digital brochure",
    title: "Explore the 2026 programme guide",
    openNewTab: "Open full brochure in a new tab",
    embedFallback: "Tap to open the digital brochure",
    vendorNote:
      "Flipbook viewer provided by FlippingBook — similar to premium programme brochures on international camp sites.",
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
