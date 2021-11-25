// js to change the language between indonesian and sundanese
const LANG_BY_PAGE = {
    // universal option
    universal: {
        lang: {
            english: "Choose a Language",
            indonesian: "Pilih Bahasa",
            sundanese: "Pilih Basa",
        }
    },

    // for index.html
    main: {
        about: {
            english: ["About This Website", "A simple and interactive website that will make it easier for us to know and learn about religious diversity in Indonesia and the tolerance that needs to be upheld in dealing with these differences."],
            indonesian: ["Tentang Website Ini", "Sebuah website sederhana dan interaktif yang akan memudahkan kita untuk mengetahui dan mempelajari tentang keberagaman agama di Indonesia serta toleransi yang perlu dijunjung dalam menyikapi perbedaan tersebut."],
            sundanese: ["Ngeunaan Website Ieu", "Situs wéb anu sederhana sareng interaktif anu bakal ngagampangkeun urang pikeun terang sareng diajar ngeunaan karagaman agama di Indonésia sareng toleransi anu kedah dijunjung dina ngungkulan éta béda-béda."],
        },
        howtouse: {
            english: ["How To Use This Website", "Scroll down until you find the map. Click on an island in Indonesia to see the total population, religious data, and stories about religious tolerance from that island."],
            indonesian: ["Cara Menggunakan Website Ini", "Scroll kebawah sempai anda menemukan sebuah peta. Klik salah satu pulau di Indonesia untuk melihat jumlah penduduk, data agama, dan cerita toleransi dari pulau tersebut."],
            sundanese: ["Cara Ngagunakeun Website Ieu", "Scroll ka handap nepi ka manggihan peta. Pencét hiji pulo di Indonésia pikeun ningali total populasi, data agama, sareng carita toléransi tina pulo éta."]
        },
        start_button: {
            english: ["Let's Begin!"],
            indonesian: ["Ayo Mulai!"],
            sundanese: ["Hayu Urang Mimitian!"],
        },
        map: {
            english: ["Religions in Indonesia", "Click one of the islands below..."],
            indonesian: ["Agama di Indonesia", "Klik salah satu pulau di bawah ini..."],
            sundanese: ["Agama di Indonésia", "Klik salah sahiji pulo di handap ieu..."],
        },
        comparison: {

        },
        story: {
            english: ["Our Friend's Experiences"],
            indonesian: ["Pengalaman Beberapa Teman"],
            sundanese: ["Pangalaman Réréncangan Urang"],
        }
    },

    // for the island pages
	Sumatra: {
        story: {
            title: {
                english: "Story From Sumatra",
                indonesian: "Cerita Dari Sumatra",
                sundanese: "Carita Tina Sumatra",
            },
            english: '"We will propose the five areas that have been researched to the Minister of Religion to become a model village for religious harmony," said Ismail when met by Republika.co.id after a seminar on research results in Bogor, Friday (1 / 11). included in this study, namely religious harmony in Tungkal Ilir, West Tanjung Jabung. Second, harmony in Sipirok, South Tapanuli, North Sumatra. Third, religious tolerance and cooperation in Rawa Selapan Village, Candipuro District, South Lampung. Fourth, tolerance and cooperation between religious communities in Lubuk Seberuk Village, Lemrub Jaya District, South Sumatra Fifth, tolerance and cooperation between religious communities in Gampong Mulia, Kuta Alam District, Banda Aceh. and the current intelligence. Because, according to him, most of those exposed are cases that are intolerant. Therefore, according to him, by conducting this research, the parties knya want to counter the issues of intolerance. "We at R&D want to counter these intolerant issues by bringing up peaceful areas as proof that Indonesia is not only an intolerant issue, but there are also many peaceful areas in Indonesia," said Ismail. Research in Tungkal Ilir, M Agus Noorbani explained, residents in the Tungkal Ilir area are very obedient in practicing their respective religions, so they can live tolerant and harmonious lives. Therefore, according to him, Tungkal Ilir deserves to be a model village of harmony in Indonesia. "So, from what I got at the research site, the people in this area are highly religious people. So, the strength of their faith is what makes them live tolerantly," he explained.',
            indonesian: "“Kami akan mengusukan lima daerah yang sudah diteliti ini kepada Menteri Agama untuk menjadi desa model kerukunan umat beragama,” ujar Ismail saat ditemui Republika.co.id usai seminar hasil penelitian di Bogor, Jumat, (1 / 11).Lima wilayah Sumatra yang masuk dalam penelitian ini, yaitu kerukunan umat beragama di Tungkal Ilir, Tanjung Jabung Barat.Kedua, kerukunan di Sipirok, Tapanuli Selatan, Sumatra Utara.Ketiga, toleransi dan kerjasama umat beragama di Desa Rawa Selapan, Kecamatan Candipuro, Lampung Selatan.Keempat, toleransi dan kerjasama umat beragama di Desa Lubuk Seberuk, Kecamatan Lempuing Jaya, Sumatra Selatan. Kelima, toleransi dan kerjasama antarumat beragama di Gampong Mulia, Kecamatan Kuta Alam, Banda Aceh.Dia menjelaskan, penelitian ini berawal dari keresahan Balitbang Kemenag terhadap isu - isu toleran dan inteleran saat ini.Karena, menurut dia, kebanyakan yang terekspos itu justru kasu - kasus yang intoleran.Karena itu, menurut dia, dengan melakukan penelitian ini, pihaknya ingin mengkonter isu - isu intoleran tersebut. “Kita di Litbang ingin mengkonter isu - isu intoleran itu dengan memunculkan wilayah - wilayah yang damai sebagai bukti bahwa Indonesia itu isunya tidak hanya intoleran saja, tapi daerah - daerah yang damai juga banyak di Indonesia,” ucap Ismail.Sementara itu, peneliti yang melakukan penelitian di Tungkal Ilir, M Agus Noorbani menjelaskan, penduduk di wilayah Tungkal Ilir sangat taat dalam mengamalkan agamanya masing - masing, sehingga mereka bisa hidup toleran dan rukun.Karena itu, menurut dia, Tungkal Ilir layak menjadi model desa kerukunan di Indonesia. “Jadi, dari yang saya dapat di lokasi penelitian, orang - orang di wilayah ini mereka orang yang beragamanya tinggi.Jadi, kekuatan iman mereka itulah yang membuat mereka hidup toleran,” jelasnya.",
            sundanese: "“Kami baris ngusulkeun lima wewengkon anu geus ditalungtik ka Mentri Agama pikeun dijadikeun kampung modél karukunan umat beragama,” ceuk Ismail waktu dipanggihan ku Republika.co.id sanggeus seminar hasil panalungtikan di Bogor, Jumaah(1/ 11).Lima wewengkon Sumatra kaasup kana ieu panalungtikan, nya éta karukunan umat beragama di Indonésia Tungkal Ilir, Tanjung Jabung Barat.Kadua, karukunan di Sipirok, Tapanuli Selatan, Sumatera Utara.katilu, toleransi jeung gotong royong umat beragama di Désa Rawa Selapan, Kacamatan Candipuro, Lampung Kidul.Kaopat, toleransi jeung gotong royong umat beragama di Désa Lubuk Seberuk, Kacamatan Lemrub Jaya, Sumatra Kidul. Kalima, toleransi jeung gotong royong antar umat beragama di Gampong Mulia Kacamatan Kuta Alam Banda Acéh.Anjeunna nétélakeun yén ieu panalungtikan dimimitian tina kaparigelan Balitbang Kemendagri ngeunaan masalah toleran jeung intoleran. dina waktos ayeuna.Sabab, numutkeun anjeunna, kalolobaan kasus anu kakeunaan mangrupikeun kasus intoleransi.Kusabab kitu, numutkeun anjeunna, ku ngalaksanakeun ieu panalungtikan, pihakna hoyong ngalawan pasualan intoleran ieu. “Urang di Litbang hoyong nantang masalah-masalah anu teu toleran ieu ku cara ngajantenkeun daérah damai salaku bukti yen Indonesia teh lain wae masalah intoleran, tapi oge daerah damai di loba daerah Indonésia,” ceuk Ismail. Sedengkeun panalungtik anu ngalaksanakeun panalungtikan di Tungkal Ilir, M Agus Noorbani ngajelaskeun, warga di wewengkon Tungkal Ilir kacida taat kana agamana masing - masing, sangkan aranjeunna tiasa hirup toleran sareng rukun.Ku kituna, numutkeun anjeunna, Tungkal Ilir pantes janten kampung modél harmoni di Indonésia. “Tah, tina naon anu kuring meunang di situs panalungtikan, masarakat di wewengkon ieu aranjeunna jalma anu kacida agamana. Janten, kakuatan iman aranjeunna anu ngajantenkeun aranjeunna hirup toleran.” anjeunna ngajelaskeun.",
        },
	},
	Jawa: {
        story: {
            title: {
                english: "Story From Java",
                indonesian: "Cerita Dari Jawa",
                sundanese: "Carita Tina Jawa",
            },
            english: '"Monday (27/5/2019) evening, Petra Christian Elementary School, Jombang, had guests from Madrasah Ibtidaiyah (MI) Islamiyah Plosogenuk Village, Perak District, Jombang Regency. They both played on the school field while waiting for the time to break their fast. Then a number of students Petra Christian Elementary School invites MI students around the school complex. They are invited to visit classrooms, playgrounds, and visit the Indonesian Christian Church (GKI) which is located in the school environment. The time for the Maghrib call to prayer arrives. The children from MI Islamiyah break their fast fasting with children from Petra Christian Elementary School, Wijana Christian Elementary School, and GKJW Bongsorejo children from Grogol 2 Elementary School. After breaking the fast together, a number of Christian Elementary School students assisted by teachers prepared a place for the group from MI Islamiyah to perform Maghrib prayers. another seemed to serve the students of MI Islamiyah to perform ablution by holding the water hose. dhu, we ask the children to perform ablution using a water hose," said the head of Petra Christian Elementary School, Riri Nurini, Setia Ningrum. The teachers and students who are Muslim then pray together in front of the gates of the Indonesian Christian Church."',
            indonesian: "Senin (27/5/2019) petang, SD Kristen Petra, Jombang, kedatangan tamu dari Madrasah Ibtidaiyah (MI) Islamiyah Desa Plosogenuk, Kecamatan Perak, Kabupaten Jombang. Mereka kemduaian bermain di lapangan sekolah sembari menunggu waktu berbuka puasa. Kemudian sejumlah siswa SD Kristen Petra mengajak para siswa MI berkeliling kompleks sekolah. Mereka diajak berkeliling untuk mengunjungi ruang kelas, taman bermain, serta mengunjungi Gereja Kristen Indonesia (GKI) yang berada di lingkungan sekolah tersebut. Waktu adzan Maghrib pun tiba. Anak-anak dari MI Islamiyah berbuka puasa bersama anak-anak dari SD Kristen Petra, SD Kristen Wijana, serta anak-anak GKJW Bongsorejo dari SDN Grogol 2. Seusai buka puasa bersama, sejumlah siswa SD Kristen dibantu para guru menyiapkan tempat untuk rombongan dari MI Islamiyah melaksanakan shalat Maghrib. Sementara siswa lain tampak melayani para siswa MI Islamiyah untuk berwudhu dengan cara memegangi selang air. “Karena di sini tidak keran air untuk fasilitas wudhu, kami minta anak anak untuk melayani wudhu dengan menggunakan selang air,” ujar Kepala SD Kristen Petra Riri Nurini Setia Ningrum. Para guru dan murid yang beragama Islam kemudian salat berjemaah di depan pintu gernag Gereja Kristen Indonesia.",
            sundanese: "Senen (27/5/2019) sonten, SD Kristen Petra, Jombang, ngagaduhan tamu ti Madrasah Ibtidaiyah (MI) Islamiyah Desa Plosogenuk, Kacamatan Perak, Kabupaten Jombang. Duanana ulin ka lapang sakola bari nungguan waktu buka puasa. Lajeng sajumlah murid SD Kristen Petra nyandak murid MI sabudeureun kompleks sakola. Aranjeunna diajak nguriling nganjang ka ruang kelas, tempat ulin, jeung nganjang ka Gereja Kristen Indonesia (GKI) anu aya di lingkungan sakola. Wanci adzan Magrib datang. Barudak MI Islamiyah buka puasa jeung barudak SD Kristen Petra, SD Kristen Wijana, jeung budak GKJW Bongsorejo SD Grogol 2. Sabada buka puasa babarengan, sajumlah murid SD Kristen dibantuan ku guru-guru pikeun nyiapkeun . tempat rombongan ti MI Islamiyah ngalaksanakeun sholat maghrib. Samentara éta, santri-santri séjénna katémbong ngalayanan santri MI Islamiyah pikeun wudhu ku cara nahan selang cai. “Kusabab di dieu teu aya keran cai pikeun fasilitas wudhu, kami nitah barudak ngaladénan wudhu maké selang cai,” ceuk Kapala SD Kristen Petra Riri Nurini Setia Ningrum. Guru-guru jeung murid-murid anu beragama Islam tuluy solat babarengan di hareupeun gerbang Garéja Kristen Indonésia.",
        },
	},
	Kalimantan: {
        story: {
            title: {
                english: "Story From Kalimantan (Borneo)",
                indonesian: "Cerita Dari Kalimantan",
                sundanese: "Carita Tina Kalimantan",
            },
            english: 'East Kutai (Inmas). The portrait of religious harmony in the Etam Continent deserves the best appreciation in terms of maintaining the values ​​of diversity, tolerance and religious moderation. No wonder East Kalimantan has been awarded for comfort and harmony in the region earlier this year. Therefore, the Head of the Regional Office of the Ministry of Religion Prov. East Kalimantan, H. Sofyan Noor in his presentation at the Regional Coordination Meeting of the Fourm Religious Harmony in East Kalimantan, Wednesday (25/09), at the Royal Victoria Hotel, Sangatta, felt proud of the achievements made by the community and religious leaders in East Kalimantan. . Furthermore, the values ​​of harmony created by religious people are an awareness of the importance of tolerance that is born from the person for religious people. Where mutual respect for the religion of others and not forcing others to adhere to their religion is the key to the beauty of this attitude. In this attitude of tolerance, the application of its form in the community can be implemented by understanding religious moderation, maintaining community togetherness, and maintaining religious harmony, which of course will continue to take place well. Through this activity, H. Sofyan Noor hopes that FKUB administrators as well as religious leaders and other elements involved can continue to maintain and support the importance of good inter-religious tolerance in society in the future.',
            indonesian: "Kutai Timur (Inmas). Potret kerukunan umat beragama di Benua Etam patut diberikan apresiasi terbaik dalam hal menjaga nilai-nilai keragaman, toleransi maupun moderasi beragama. Tak heran Kalimantan Timur telah diberi penghargaan atas kenyamanan dan kerukunan di daerahnya pada awal tahun ini. Karena itu, Kepala Kanwil Kementerian Agama Prov. Kalimantan Timur, H. Sofyan Noor dalam pemaparannya pada Rapat Koordinasi Daerah Fourm Kerukunan Umat Beragama se-Kalimantan Timur, Rabu (25/09), di Hotel Royal Victoria, Sangatta, merasa berbangga atas raihan prestasi yang telah lapisan masyarakat maupun tokoh agamanya di Kaltim. Lebih lanjut, nilai-nilai kerukunan yang tercipta dari umat beragama ini merupakan kesadaran akan pentingnya toleransi yang lahir dari pribadi untuk umat beragama. Dimana saling menghargai agama orang lain dan tidak memaksakan orang lain untuk menganut agamanya merupakan kunci akan indahnya sikap tersebut. Dalam sikap toleransi inilah, penerapan wujudnya dalam lapisan masyarakat dapat diimplementasikan dengan memahami akan moderasi beragama, menjaga kebersamaan umat, dan menjaga kerukunan umat beragama, yang tentunya keharmoniannya akan terus berlangsung dengan baik. Melalui kegiatan ini pula, H. Sofyan Noor mengharapkan kepada para pengurus FKUB serta para tokoh-tokoh agama maupun unsur-unsur lainnya yang terlibat, dapat terus menjaga dan mendukung akan pentingnya toleransi antar umat beragama yang baik di tengah masyarakat hingga ke depannya.",
            sundanese: "Kutai Wétan (Inmas). Potret karukunan agama di Benua Etam pantes diapresiasi istilah ngajaga ajén-inajén karagaman, toleransi jeung moderasi agama. Teu heran Kalimantan Wétan boga dilélér pikeun kanyamanan sareng kaharmonisan di daérahna awal taun ieu. Ku kituna, Kapala Kantor Daérah Kamentrian Agama Prov. Kaltim, H. Sofyan Noor dina wawacan dina Rapat Koordinasi Daérah The Fourm for Religious Harmony sakuliah Kaltim, Rebo (25/09), di Hotél Royal Victoria, Sangatta, ngarasa reueus kana préstasi anu geus diraih ku masarakat jeung tokoh agama di Kaltim. Saterusna, Ajén-inajén karukunan anu diciptakeun ku umat beragama ieu mangrupa kasadaran pentingna toleransi dilahirkeun ku jalma pikeun agama. Dimana silih ajenan kana agama batur jeung henteu maksa jalma séjén nuturkeun agama-Na mangrupakeun konci pikeun kaéndahan sikep ieu. Dina sikep toleransi Ku cara kitu, larapna wangunna di masarakat bisa dilaksanakeun ku pamahaman moderasi agama, ngajaga kabersamaan masarakat, jeung ngajaga karukunan agama, nu tangtu bakal mawa karukunan terus ogé. Ngaliwatan kagiatan ieu, H. Sofyan Noor miharep sangkan pangurus FKUB ogé para tokoh agama katut unsur-unsur séjénna anu kalibet, bisa terus ngajaga jeung ngarojong pentingna toleransi antar umat beragama anu hadé di masarakat dina mangsa nu bakal datang.",
        },
	},
	Maluku: {
        story: {
            title: {
                english: "Story From The Moluccas",
                indonesian: "Cerita Dari Kepulauan Maluku",
                sundanese: "Carita Tina Kepulauan Maluku",
            },
            english: "The social conflicts that occurred in Maluku in 1999-2002 have caused community divisions. Eklin Amtor de Fretes, a young man from Maluku, wants to reunite his brothers and sisters. Through the fairy tale method, he visited the villages one by one. Spread the message of tolerance and peace through children's stories. Kak Eklin, her nickname, explained the beginning of her involvement in this social activity. He remembers well how conflicts triggered by religious sentiments caused many victims, not only adults but also innocent children. When the conflict raged, he was lucky because he lived in a safe environment. However, Eklin knew many other children his age were not as lucky as he was and had to live in fear. Therefore, when the conflict rages on, he begins to get strong bonds from the surrounding environment to protect each other in the midst of differences. The Eklin family, who were Protestant Christians at that time, lived in a neighborhood where the majority of the population was Muslim. Armed with this past experience, Eklin then formed the Youth Interfaith Peace Camp (YIPC) in 2017. This movement is to spread the message of peace to friends across religions, ethnicities, and languages. He stated that up to now, YIPC has been followed by various interfaith youths in Maluku, ranging from Muslims, Christians, Catholics, to the beliefs of the Nuaulu Tribe. In this place, various discussions were held to foster a sense of religious tolerance.",
            indonesian: "Konflik sosial yang pernah terjadi di Maluku pada tahun 1999-2002 telah menyebabkan perpecahan masyarakat. Eklin Amtor de Fretes seorang pemuda dari Maluku ini berkeinginan menyatukan kembali saudara-saudaranya. Melalui metode dongeng, dia menyambangi satu persatu perkampungan warga. Menyebarkan pesan toleransi dan perdamaian melalui cerita-cerita anak. Kak Eklin, panggilan akrabnya menjelaskan awal mula keterlibatannya dalam kegiatan sosial ini. Dirinya mengingat betul bagaimana konflik yang dipicu sentimen agama menimbulkan banyak korban, tak hanya orang dewasa tetapi juga anak-anak yang tidak bersalah. Saat konflik yang berkecamuk, dirinya memang beruntung karena tinggal di lingkungan yang aman. Tetapi, Eklin tahu banyak anak-anak lain yang sebayanya tidak seberuntung dirinya dan harus hidup dalam rasa ketakutan. Karena itu saat konflik semakin berkecamuk, dirinya mulai mendapat ikatan yang kuat dari lingkungan sekitar untuk saling melindungi di tengah perbedaan. Keluarga Eklin yang merupakan penganut Kristen Protestan saat itu tinggal di lingkungan yang mayoritas penduduknya beragama Islam. Berbekal pengalaman masa lalunya ini, Eklin kemudian membentuk Youth Interfaith Peace Camp (YIPC) pada 2017. Gerakan ini untuk menyebarkan pesan kedamaian kepada teman-teman lintas agama, suku, dan bahasa. Dirinya menyatakan hingga kini, YIPC telah diikuti oleh beragam pemuda lintas agama di Maluku, mulai dari yang beragama Islam, Kristen, Katolik, hingga kepercayaan dari Suku Nuaulu. Di tempat ini pula beragam diskusi pun dilakukan untuk menumbuhkan rasa toleransi beragama.",
            sundanese: "Konflik sosial anu lumangsung di Maluku taun 1999-2002 ngabalukarkeun perpecahan masarakat. Eklin Amtor de Fretes, saurang nonoman ti Maluku, hayang ngahijikeun deui dulur-dulurna. Ngaliwatan métode dongéng, manéhna nganjang ka kampung-kampung hiji-hiji. Nyebarkeun talatah toleransi jeung katengtreman ngaliwatan carita barudak. Sis Eklin, landianna ngajelaskeun awal kalibetna dina kagiatan sosial ieu. Anjeunna émut ogé kumaha konflik anu dipicu ku sentimen agama disababkeun loba korban, teu ngan dewasa tapi ogé barudak polos. Nalika konflik raging, anjeunna untung sabab cicing di lingkungan aman. Tapi, Eclin terang pisan barudak séjén umur na éta teu jadi untung sakumaha anjeunna sarta kapaksa hirup di sieun. Kusabab éta nalika konflik rages on, anjeunna mimiti meunang beungkeut kuat ti lingkungan sabudeureun pikeun silih ngajaga dina satengahing béda. Kulawarga Eklin anu Kristen Protestan dina waktos éta hirup di wewengkon nu mayoritas pendudukna Muslim. Bersenjata jeung pangalaman kaliwat ieu, Eklin lajeng ngawangun Youth Interfaith Peace Camp (YIPC) taun 2017. Gerakan ieu téh pikeun nyebarkeun amanat. katengtreman ka babaturan sakuliah agama, etnis, jeung basa. Anjeunna nyatakeun yén dugi ka ayeuna, YIPC gaduh dituturkeun ku rupa-rupa pamuda lintas agama di Maluku, mimitian ti Muslim, Kristen, Katolik, nepi ka kapercayaan Suku Nuaulu. Di ieu tempat diayakeun rupa-rupa sawala pikeun ngabina rasa toleransi agama.",
        },
	},
	Papua: {
        story: {
            title: {
                english: "Story From Papua",
                indonesian: "Cerita Dari Papua",
                sundanese: "Carita Tina Papua",
            },
            english: 'Interfaith youths and women participated in securing the implementation of the Eid al-Fitr 1440 Hijri prayer in Timika, Papua, Wednesday (5/6/2019). Head of FKUB Mimika Ignastius Adii said that there were 65 young men and women from Catholic, Protestant, Hindu and Buddhist backgrounds involved in securing the Eid prayer in Timika. "A total of 65 people in all," said Ignatius. He said that so far, religious tolerance in Mimika Regency has been well established. He gave an example when Christians celebrate Christmas and Easter, mosque youth are also involved in securing the church. "We in Mimika have very good religious tolerance and respect for each other," he said.',
            indonesian: "Pemuda dan pemudi lintas agama ikut mengamankan pelaksanaan shalat Idul Fitri 1440 Hijriah di Timika, Papua, Rabu (5/6/2019). Ketua FKUB Mimika Ignastius Adii mengatakan, ada 65 pemuda dan pemudi dari latar belakang agama Katolik, Protestan, Hindu dan Budha yang terlibat dalam mengamankan Shalat Ied di Timika. \"Totalnya 65 orang semua,\" kata Ignatius. Ia mengatakan selama ini toleransi umat beragama di Kabupaten Mimika terjalin dengan baik. Ia mencontohkan saat umat Kristiani merayakan Natal dan Paskah, remaja masjid juga ikut terlibat mengamankan gereja. \"Kami di Mimika memang toleransinya beragamanya sangat baik, dan saling menghargai,\" tuturnya.",
            sundanese: "Pamuda jeung wanoja lintas agama milu ngamankeun Sholat Idul Fitri 1440 Hijriah di Timika, Papua, Rebo (5/6/2019). Kapala FKUB Mimika Ignastius Adii nétélakeun, aya 65 pamuda jeung pamuda ti katurunan Katolik, Protestan, Hindu jeung Budha anu milu ngamankeun salat Idul Fitri di Timika. \"Jumlahna 65 urang sadayana,\" saur Ignatius. Cenah, sajauh ieu, toleransi umat beragama di Kabupatén Mimika téh geus ajeg. Anjeunna masihan conto nalika urang Kristen ngagungkeun Natal sareng Paskah, nonoman masjid ogé kalibet dina ngamankeun garéja. \"Kami di Mimika gaduh toleransi agama anu saé sareng silih hormat,\" saurna."
        },
    },
    Sulawesi: {
        story: {
            title: {
                english: "Story From Sulawesi (Celebes)",
                indonesian: "Cerita Dari Sulawesi",
                sundanese: "Carita Tina Sulawesi",
            },
            english: "A video containing footage of two women of different religions in Kendari City, Southeast Sulawesi (Sultra), praying together in a prayer room, has gone viral on social media. Netizens praised the two women for showing a high tolerance and extraordinary attitude. Based on the search, the unique moment recorded in the video occurred recently. The video went viral after it was uploaded by the TikTok account, Hellopandakitty. The viral video shows two Muslim and Hindu women carrying out worship according to their respective beliefs. What caught the attention of netizens, they worshiped together in one prayer room. A woman wearing a green mukena is praying. Meanwhile, not far behind him, a Hindu woman also worshiped. They are very solemn to carry out their respective worship, do not feel disturbed by each other. For netizens, the video shows the two have high tolerance in religion and the beauty of differences. The Minister of Health's message for the public to perform Hajj smoothly. Netizens flooded the comments column for the viral video uploaded by the Tiktok Hellopandakitty account \"Different paths but one goal. Real tolerance. Trust is in the heart. Not to judge each other,\" said Cicilia Purwan8. \"The beauty of religious tolerance,\" said Sekar. \"What a very extraordinary tolerance,\" said Egguramen.",
            indonesian: "Sebuah video berisi rekaman dua perempuan beda agama di Kota Kendari, Sulawesi Tenggara (Sultra), beribadah bersama di musala, viral di media sosial. Netizen memuji kedua perempuan itu karena menunjukkan sikap toleransi tinggi dan luar biasa. Berdasarkan penelusuran, momen unik yang terrekam dalam video tersebut terjadi belum lama ini. Video itu viral setelah diunggah oleh akun TikTok, Hellopandakitty. Video viral itu memperlihatkan dua perempuan beragama Islam dan Hindu melaksanakan ibadah sesuai keyakinan mereka masing-masing. Yang menjadi perhatian netizen, mereka kompak beribadah secara bersamaan dalam satu ruangan musala. Seorang perempuan mengenakan mukena berwarna hijau sedang melaksanakan salat. Sedangkan tak jauh di belakangnya, tampak seorang perempuan penganut agama Hindu juga beribadah. Mereka sangat khusyuk menjalankan ibadah masing-masing, tidak merasa terganggu satu sama lain. Bagi para netizen, video tersebut menunjukkan keduanya memiliki toleransi tinggi dalam beragama dan indahnya perbedaan. Pesan Menteri Kesehatan agar Masyarakat Lancar Beribadah Haji Para netizen membanjiri kolom komentar video viral yang diunggah akun Tiktok Hellopandakitty tersebut \"Berbeda jalannya tapi satu tujuan. Toleransi sesungguhnya. Kepercayaan itu ada di hati. Bukan untuk saling menghakimi,\" kata Cicilia Purwan8. \"Indahnya toleransi beragama,\" kata Sekar. \"Respect sekali, toleransi yang sangat luar biasa,\" kata Telurutramen.",
            sundanese: "Pidéo anu ngandung cuplikan dua awéwé béda agama di Kota Kendari, Sulawesi Tenggara (Sultra), sholat babarengan di mushola, viral di media sosial. Netizen muji dua budak awéwé éta pikeun nunjukkeun sikep kasabaran tinggi jeung alus teuing. Dumasar pilarian, moments unik kacatet dina video kajadian anyar. Pidéo éta viral saatos diunggah ku akun TikTok, Hellopandakitty. Éta video viral némbongkeun dua awéwé Muslim jeung Hindu ngalaksanakeun ibadah nurutkeun kapercayaan maranéhanana masing-masing. Anu jadi perhatian netizen, maranéhna ibadah babarengan dina hiji rohangan rohang solat. Awéwé maké mukena héjo keur solat. Bari teu jauh Di tukangeunana, aya awéwé Hindu ogé nyembah. Éta pisan solemn ngajalankeun silih sembah, ulah silih ganggu. Pikeun netizen, pidéo nunjukkeun duanana mibanda toleransi anu luhur dina agama jeung kaéndahan béda. Pesen ti Mentri Kaséhatan éta Masarakat Lancar Haji. Netizen membanjiri kolom komentar pikeun video viral anu diunggah ku akun éta. Tiktok Hellopandakitty \"Beda jalan tapi hiji tujuan. Toleransi anu leres. Éta amanah aya dina haté. Moal saling ngahakiman,\" ceuk Cicilia Purwan8. \"Kaéndahan toleransi beragama,\" pokna Sekar. \"Hormat toleransi anu luar biasa pisan,\" saur Egguramen.",
        },
    },
    SundaKecil: {
        story: {
            title: {
                english: "Story From The Lesser Sunda Islands",
                indonesian: "Cerita Dari Sunda Kecil",
                sundanese: "Carita Tina Sunda Kecil",
            },
            english: 'On Eid al-Adha 1444 H, Friday (31/7/2020), the congregation of Al Hidayah Sikka Mosque, not only distributed sacrificial animals to the Muslim poor, but also non-Muslims. A total of 250 poor people and 130 non-Muslims who live around the Al Hidayah Mosque, Buton village, Uneng City Village, Alok District, Sikka Regency, received a package of sacrificial meat from the committee at the local mosque. Uniquely, Catholics in the Buton village area also helped Muslims at Al-Hidayah Mosque cut and distribute sacrificial animals. Cooperation and tolerance among religious people have been built since ancient times. "This is our custom every year, not only Muslims but also non-Muslims are also given a ration of sacrificial animal meat on Eid al-Adha," said Chairman of Takmir Al Hidayah Mosque, Ishak Abdullah, to Liputan6.com, Friday (31/7/2020).',
            indonesian: "Di Hari Raya Iduladha 1444 H, Jumat (31/7/2020), jemaah Masjid Al Hidayah Sikka, bukan saja membagikan hewan kurban kepada fakir miskin beragama Islam, tetapi juga bagi umat nonmuslim. Sebanyak 250 fakir miskin dan 130 umat nonmuslim yang berdomisili di sekitar Masjid Al Hidayah kampung Buton, Kelurahan Kota Uneng, Kecamatan Alok, Kabupaten Sikka, mendapatkan paket daging kurban dari panitia di masjid setempat. Uniknya, umat katolik yang ada di wilayah kampung buton pun turut membantu umat muslim di Masjid Al-hidayah memotong dan membagikan hewan kurban. Kerja sama dan toleransi antarumat beragama ini sudah dibangun sejak jaman dahulu. \"Ini adalah kebiasaan kami tiap tahun, bukan hanya yang muslim namun juga nonmuslim juga diberikan jatah daging hewan kurban pada Hari Raya Iduladha,” ujar Ketua Takmir Masjid Al Hidayah, Ishak Abdullah, kepada Liputan6.com, Jumat (31/7/2020).",
            sundanese: "Dina Idul Adha 1444 H, Jumaah (31/7/2020), jamaah Masjid Al Hidayah Sikka, lain ngan ukur ngabagikeun sato. kurban ka fakir miskin Muslim, tapi ogé pikeun non-Muslim. Jumlahna aya 250 miskin jeung 130 urang non-Muslim anu cicing di sabudeureun Masjid Al Hidayah, Désa Buton, Désa Kota Uneng, Kacamatan Alok, Kabupatén Sikka, narima bungkusan daging qurban ti panitia di masjid satempat. unikna, Umat ​​Katolik di wewengkon Désa Buton ogé mantuan umat Islam di Masjid Al-Hidayah motong jeung ngabagikeun hewan kurban. Kerjasama sareng toleransi antar-agama ieu parantos diwangun ti jaman baheula baheula. “Ieu adat urang unggal taun, lain ngan ukur muslim tapi ogé non-muslim ogé dibéré jatah daging kurban dina Idul Adha,\" ceuk Ketua Takmir Masjid Al Hidayah Ishak Abdullah. ka Liputan6.com, Jumaah (31/7/2020).",
        },
    }
};

const ELEMENT_ID = [
    "about-title",
    "about-content",
    "howtouse-title",
    "howtouse-content",
    "start-button",
    "map-title",
    "map-hint",
    "story-title",
]

// the function
function setLang(page, lang) {
    // change the language picker text
    if (getCookie("language") === "english") {
        document.getElementById("lang-choice").textContent = LANG_BY_PAGE["universal"].lang.english;
    } else if (getCookie("language") === "indonesian") {
        document.getElementById("lang-choice").textContent = LANG_BY_PAGE["universal"].lang.indonesian;
    } else if (getCookie("language") === "sundanese") {
        document.getElementById("lang-choice").textContent = LANG_BY_PAGE["universal"].lang.sundanese;
    }
    // check whether the page is the index.html or not
    if (page === "main") {
        let lang = getCookie("language");
        for (i = 0; i < ELEMENT_ID.length; i++) {
            let current_id = ELEMENT_ID[i];
            switch(current_id) {
                case "about-title": document.getElementById("about-title").textContent = LANG_BY_PAGE["main"].about[lang][0];break;
                case "about-content": document.getElementById("about-content").textContent = LANG_BY_PAGE["main"].about[lang][1];break;
                case "howtouse-title": document.getElementById("howtouse-title").textContent = LANG_BY_PAGE["main"].howtouse[lang][0];break;
                case "howtouse-content": document.getElementById("howtouse-content").textContent = LANG_BY_PAGE["main"].howtouse[lang][1];break;
                case "start-button": document.getElementById("start-button").textContent = LANG_BY_PAGE["main"].start_button[lang];break;
                case "map-title": document.getElementById("map-title").textContent = LANG_BY_PAGE["main"].map[lang][0];break;
                case "map-hint": document.getElementById("map-hint").textContent = LANG_BY_PAGE["main"].map[lang][1];break;
                case "story-title": document.getElementById("story-title").textContent = LANG_BY_PAGE["main"].story[lang];break;
            }
        }
    } else {
        const story_title = document.getElementById("story-title")
        const story = document.getElementById("story");
        if (getCookie("language") === "english") {
            story_title.textContent = LANG_BY_PAGE[page].story.title.english;
            story.textContent = LANG_BY_PAGE[page].story.english;
        } else if (getCookie("language") === "indonesian") {
            story_title.textContent = LANG_BY_PAGE[page].story.title.indonesian;
            story.textContent = LANG_BY_PAGE[page].story.indonesian;
        } else if (getCookie("language") === "sundanese") {
            story_title.textContent = LANG_BY_PAGE[page].story.title.sundanese;
            story.textContent = LANG_BY_PAGE[page].story.sundanese;
        }
    }
}
