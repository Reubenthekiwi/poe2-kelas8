// script to handle the "Pengalaman Teman Kita" cards :)

// the main story container row
const STORY_CONTAINER_ROW = document.getElementById("sc-row");

// the holy function to do this all
function createCard(story) {
    // create the column
    var col = document.createElement("div");
    // make the column responsive for extra small, small, medium, large, and extra large screens
    col.className = "col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4";
    col.style.maxHeight = "450px"

    // create the new card
    var newCard = document.createElement("div");
    newCard.className = "card my-4";

    // create the container for the card's contents
    var contentContainter = document.createElement("div");
    contentContainter.style.margin = "5%";

    // the card's title
    var cardTitle = document.createElement("h2");
    cardTitle.className = "card-title text-nowrap";
    cardTitle.style.overflowX = "auto"
    cardTitle.style.overflowY = "hidden"
    cardTitle.textContent = story[0];

    // and the main content itself
    var cardContent = document.createElement("p");
    cardContent.textContent = story[1];

    // appending children to the contentContainer
    contentContainter.appendChild(cardTitle)
    contentContainter.appendChild(document.createElement("hr"))
    contentContainter.appendChild(cardContent);
    // appending child to the newCard and col
    newCard.appendChild(contentContainter);
    col.appendChild(newCard);
    // finish it all by adding the new column to the story container row
    STORY_CONTAINER_ROW.appendChild(col);
}

// stories to be added to the page
// the first value is the author's name and the second value is the story text itself
const STORIES = [
    ["Kalista Araya", "Saya seorang siswa Muslim di sekolah Katolik, SMP Santa Ursula. Saya kira, saya akan di jauhi atau diejek karena berbeda agamanya, tetapi pada akhirnya saat saya berani untuk bergaul dan menyapa teman-teman, mereka menerima saya dengan baik, mereka tidak mengejek ataupun menjatuhkan saya. Dan di hari itu, saya merasa bahwa toleransi antar agama sangat kuat di lingkungan sekitar saya. Asal kalian berani untuk mencoba hal baru dan yakin kepada diri sendiri! Salam toleransi 😊"],
    ["Gianinna G Aileen H", "Pengalaman saya secara pribadi, saya pernah mengikuti beberapa kegiatan di luar sekolah. Dalam komunitas yang saya ikuti, semua anggotanya berbeda agama, terutama saya yang agamanya merupakan minoritas. Pada saat mereka menjalankan kewajiban agamanya mereka tidak pernah memaksakan saya untuk mengikuti. Saya juga tentunya harus menghormati mereka. Saya akan menunggu mereka sampai selesai beribadah, dan setelah itu melanjutkan aktivitas yang sedang kami lakukan."],
    ["A Luna Robby Puan Loano", "Toleransi beragama menurut pengalaman saya, sejujurnya jika membahas mengenai toleransi agama, ini sudah seperti makanan sehari hari bagi saya. Karna keluarga dari ayah saya mayoritas non islam, sedangkan saya islam. Kami saling menghormati dan menghargai satu sama lain. Kami tidak membeda beda kan karna beda agama. Kita pun tetep akrab dan sangat rukun. Disaat saya merayakan hari raya, mereka mengucapkan selamat, begitupun sebaliknya jika mereka merayakan hari raya, saya mengucapkan selamat. Disaat bepergian pun mereka menghormati saya yang berkerudung dan terkadang mengingatkan untuk menutup aurat. Bahkan, disaat masuk waktu ibadah, mereka sering mengingat kan saya untuk beribadah tiap waktunya, dan saat mereka beribadah pun saya menghormati mereka. Toleransi itu sangatlah indah. Terima kasih."],
    ["-", "-"],
]

// loop over the STORIES array and create a card for each of them
STORIES.forEach(createCard)