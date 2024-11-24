document.addEventListener('DOMContentLoaded', function() {
  const categories = [
    { name: "Aksiyon & Macera", subcategories: [
      { name: "Aksiyon Komedileri", code: 43040 },
      { name: "Aksiyon Gerilimleri", code: 43048 },
      { name: "Casus Aksiyonları", code: 10702 },
      { name: "Superhero Filmleri", code: 10118 }
    ]},
  {
    name: "Aksiyon & Macera",
    code: 1365,
    subcategories: [
      { name: "Aksiyon Komedileri", code: 43040 },
      { name: "Aksiyon Bilim Kurgu & Fantastik", code: 1568 },
      { name: "Aksiyon Gerilimleri", code: 43048 },
      { name: "Macera Filmleri", code: 7442 },
      { name: "Asya Aksiyon Filmleri", code: 77232 },
      { name: "Klasik Aksiyon & Macera", code: 46576 },
      { name: "Çizgi Roman & Süper Kahraman Filmleri", code: 10118 },
      { name: "Suç Aksiyon & Macera", code: 9584 },
      { name: "Yabancı Aksiyon & Macera", code: 11828 },
      { name: "Dövüş Sanatları Filmleri", code: 8985 },
      { name: "Askeri Aksiyon & Macera", code: 2125 },
      { name: "Casus Aksiyon & Macera", code: 10702 },
      { name: "Vahşi Batı Filmleri", code: 7700 },
    ],
  },
  {
    name: "Anime",
    code: 7424,
    subcategories: [
      { name: "Yetişkin Animasyon", code: 11881 },
      { name: "Hayvan Hikayeleri", code: 5507 },
      { name: "Anime Aksiyon", code: 2653 },
      { name: "Anime Komedileri", code: 9302 },
      { name: "Anime Dramaları", code: 452 },
      { name: "Anime Fantastiği", code: 11146 },
      { name: "Anime Filmleri", code: 3063 },
      { name: "Anime Korku", code: 10695 },
      { name: "Anime Bilim Kurgu", code: 2729 },
      { name: "Anime Dizileri", code: 6721 },
    ],
  },
  {
    name: "Çocuk & Aile Filmleri",
    code: 783,
    subcategories: [
      { name: "Hayvan Hikayeleri", code: 5507 },
      { name: "Disney", code: 67673 },
      { name: "Çocuklar için Eğitim", code: 10659 },
      { name: "Aile Filmleri", code: 51056 },
      { name: "Çocuk Müzikleri", code: 52843 },
      { name: "Çocuk TV", code: 27346 },
      { name: "Çocuk Kitaplarına Dayalı Filmler", code: 10056 },
      { name: "0-2 Yaş Filmleri", code: 6796 },
      { name: "2-4 Yaş Filmleri", code: 6218 },
      { name: "5-7 Yaş Filmleri", code: 5455 },
      { name: "8-10 Yaş Filmleri", code: 561 },
      { name: "11-12 Yaş Filmleri", code: 6962 },
      { name: "TV Çizgi Filmleri", code: 11177 },
    ],
  },
  {
    name: "Klasikler",
    code: 31574,
    subcategories: [
      { name: "Klasik Komediler", code: 31694 },
      { name: "Klasik Dramalar", code: 29809 },
      { name: "Klasik Yabancı Filmler", code: 32473 },
      { name: "Klasik Bilim Kurgu & Fantastik", code: 47147 },
      { name: "Klasik Gerilimler", code: 46588 },
      { name: "Klasik Savaş Filmleri", code: 48744 },
      { name: "Klasik Vahşi Batı Filmleri", code: 47465 },
      { name: "Epik Filmler", code: 52858 },
      { name: "Film Noir", code: 7687 },
      { name: "Sessiz Filmler", code: 53310 },
    ],
  },
  {
    name: "Kült Filmler",
    code: 7627,
    subcategories: [
      { name: "B-Horror Filmleri", code: 8195 },
      { name: "Kampla Filmler", code: 1252 },
      { name: "Kült Komediler", code: 9434 },
      { name: "Kült Korku Filmleri", code: 10944 },
      { name: "Kült Bilim Kurgu & Fantastik", code: 4734 },
    ],
  },
  {
    name: "Belgeseller",
    code: 6839,
    subcategories: [
      { name: "Biyografik Dramalar", code: 3179 },
      { name: "Klasik Dramalar", code: 29809 },
      { name: "Mahkeme Dramaları", code: 52858 },
      { name: "Suç Dramaları", code: 6889 },
      { name: "Kitaplardan Uyarlanan Dramalar", code: 4961 },
      { name: "Gerçek Hayata Dayalı Dramalar", code: 3653 },
      { name: "Yabancı Dramalar", code: 2150 },
      { name: "Bağımsız Dramalar", code: 384 },
      { name: "Askeri Dramalar", code: 11 },
      { name: "Dönem Filmleri", code: 12123 },
      { name: "Politik Dramalar", code: 6616 },
      { name: "Romantik Dramalar", code: 1255 },
      { name: "Gösteri Dünyası Dramaları", code: 5012 },
      { name: "Sosyal Sorunlar Dramaları", code: 3947 },
      { name: "Spor Dramaları", code: 7243 },
      { name: "Ağlatan Dramalar", code: 6384 },
      { name: "Gençlik Dramaları", code: 9299 },
    ],
  },
  {
    name: "Yabancı Filmler",
    code: 7462,
    subcategories: [
      { name: "Afrika Filmleri", code: 3761 },
      { name: "Arap Filmleri", code: 107456 },
      { name: "Arjantin Filmleri", code: 100310 },
      { name: "Sanat Evi Filmleri", code: 29764 },
      { name: "Avustralya Filmleri", code: 5230 },
      { name: "Belçika Filmleri", code: 262 },
      { name: "Bollywood Filmleri", code: 5480 },
      { name: "Brezilya Filmleri", code: 100373 },
      { name: "İngiliz Filmleri", code: 10757 },
      { name: "Kanada Filmleri", code: 107519 },
      { name: "Çin Filmleri", code: 3960 },
      { name: "Klasik Yabancı Filmler", code: 32473 },
      { name: "Hollanda Filmleri", code: 10606 },
      { name: "Doğu Avrupa Filmleri", code: 5254 },
      { name: "Yabancı Aksiyon & Macera", code: 11828 },
      { name: "Yabancı Komediler", code: 4426 },
      { name: "Yabancı Belgeseller", code: 5161 },
      { name: "Yabancı Dramalar", code: 2150 },
      { name: "Yabancı Korku Filmleri", code: 8654 },
      { name: "Yabancı Bilim Kurgu & Fantastik", code: 6485 },
      { name: "Yabancı Gerilimler", code: 10306 },
      { name: "Fransız Filmleri", code: 58807 },
      { name: "Alman Filmleri", code: 58886 },
      { name: "Yunan Filmleri", code: 61115 },
      { name: "Hint Filmleri", code: 10463 },
      { name: "İrlanda Filmleri", code: 58750 },
      { name: "İtalyan Filmleri", code: 8221 },
      { name: "Japon Filmleri", code: 10398 },
      { name: "Kore Filmleri", code: 5685 },
      { name: "Latin Amerika Filmleri", code: 1613 },
      { name: "Orta Doğu Filmleri", code: 5875 },
      { name: "Yeni Zelanda Filmleri", code: 63782 },
      { name: "Romantik Yabancı Filmler", code: 7153 },
      { name: "Rus Filmleri", code: 11567 },
      { name: "İskandinav Filmleri", code: 9292 },
      { name: "Güneydoğu Asya Filmleri", code: 9196 },
      { name: "İspanyol Filmleri", code: 58741 },
    ],
  },
    {
    name: "İnanç & Maneviyat",
    code: 26835,
    subcategories: [
      { name: "İnanç & Maneviyat Filmleri", code: 52804 },
      { name: "Manevi Belgeseller", code: 2760 },
      { name: "Çocuklar için İnanç & Maneviyat", code: 751423 },
      { name: "Büyücülük ve Karanlık Sanatlar", code: 81552046 },
    ],
  },
  {
    name: "Korku",
    code: 8711,
    subcategories: [
      { name: "B-Horror Filmleri", code: 8195 },
      { name: "Yaratık Filmleri", code: 6895 },
      { name: "Kült Korku Filmleri", code: 10944 },
      { name: "Derin Deniz Korku Filmleri", code: 45028 },
      { name: "Yabancı Korku Filmleri", code: 8654 },
      { name: "Şaşkın Korku Filmleri", code: 4021 },
      { name: "Korku Komedisi", code: 89585 },
      { name: "Canavar Filmleri", code: 947 },
      { name: "Satanik Hikayeler", code: 6998 },
      { name: "Kesici & Seri Katil Filmleri", code: 8646 },
      { name: "Doğaüstü Korku Filmleri", code: 42023 },
      { name: "Hayatta Kalma Korkusu", code: 2939659 },
      { name: "Gençlik Çığlıkları", code: 52147 },
      { name: "Vampir Korku Filmleri", code: 75804 },
      { name: "Kurtadam Korku Filmleri", code: 75930 },
      { name: "Zombi Korku Filmleri", code: 75405 },
    ],
  },
  {
    name: "Bağımsız Filmler",
    code: 7077,
    subcategories: [
      { name: "Deneysel Filmler", code: 11079 },
      { name: "Bağımsız Aksiyon & Macera", code: 11804 },
      { name: "Bağımsız Komediler", code: 4195 },
      { name: "Bağımsız Dramalar", code: 384 },
      { name: "Bağımsız Gerilimler", code: 3269 },
      { name: "Romantik Bağımsız Filmler", code: 9916 },
    ],
  },
  {
    name: "Müzik",
    code: 1701,
    subcategories: [
      { name: "Klasik Müzikal Filmler", code: 32392 },
      { name: "Country & Western/Folk", code: 1105 },
      { name: "Disney Müzikal Filmleri", code: 59433 },
      { name: "Caz & Kolay Dinlemelik Müzik", code: 10271 },
      { name: "Çocuk Müzikleri", code: 52843 },
      { name: "Latin Müzik", code: 10741 },
      { name: "Müzikaller", code: 13335 },
      { name: "Rock & Pop Konserleri", code: 3278 },
      { name: "Gösteri Dünyası Müzikalleri", code: 13573 },
      { name: "Sahne Müzikal Filmleri", code: 55774 },
      { name: "Şehir & Dans Konserleri", code: 9472 },
      { name: "Dünya Müzik Konserleri", code: 2856 },
    ],
  },
  {
    name: "Romantik",
    code: 8883,
    subcategories: [
      { name: "Klasik Romantik Filmler", code: 31273 },
      { name: "Farklı Romantik Filmler", code: 36103 },
      { name: "Romantik Komediler", code: 5475 },
      { name: "Romantik Dramalar", code: 1255 },
      { name: "Romantik Favoriler", code: 502675 },
      { name: "Romantik Yabancı Filmler", code: 7153 },
      { name: "Romantik Bağımsız Filmler", code: 9916 },
      { name: "Sert Romantik Filmler", code: 35800 },
    ],
  },
  {
    name: "Bilim Kurgu & Fantastik",
    code: 1492,
    subcategories: [
      { name: "Aksiyon Bilim Kurgu & Fantastik", code: 1568 },
      { name: "Yabancı Bilim Kurgu & Fantastik", code: 6485 },
      { name: "Klasik Bilim Kurgu & Fantastik", code: 47147 },
      { name: "Kült Bilim Kurgu & Fantastik", code: 4734 },
      { name: "Fantastik Filmler", code: 9744 },
      { name: "Bilim Kurgu Macerası", code: 6926 },
      { name: "Bilim Kurgu Dramaları", code: 3916 },
      { name: "Bilim Kurgu Korku Filmleri", code: 1694 },
      { name: "Bilim Kurgu Gerilimleri", code: 11014 },
    ],
  },
  {
    name: "Spor",
    code: 4370,
    subcategories: [
      { name: "Beyzbol Filmleri", code: 12339 },
      { name: "Basketbol Filmleri", code: 12762 },
      { name: "BMX & Aşırı Bisiklet Sürme", code: 4582 },
      { name: "Boks Filmleri", code: 12443 },
      { name: "Araba & Motorsport Filmleri", code: 49944 },
      { name: "Futbol Filmleri", code: 12803 },
      { name: "Dövüş Sanatları, Boks & Güreş", code: 6695 },
      { name: "Futbol Filmleri", code: 12549 },
      { name: "Spor Komedileri", code: 5286 },
      { name: "Spor Belgeselleri", code: 180 },
      { name: "Spor Dramaları", code: 7243 },
      { name: "Spor & Fitness", code: 9327 },
    ],
  },
  {
    name: "TV Şovları",
    code: 83,
    subcategories: [
      { name: "İngiliz TV Şovları", code: 52117 },
      { name: "Klasik TV Şovları", code: 46553 },
      { name: "Suç TV Şovları", code: 26146 },
      { name: "Kült TV Şovları", code: 74652 },
      { name: "Yemek & Seyahat TV", code: 72436 },
      { name: "Çocuk TV", code: 27346 },
      { name: "Kore TV Şovları", code: 67879 },
      { name: "Askeri TV Şovları", code: 25804 },
      { name: "Mini Diziler", code: 4814 },
      { name: "Reality TV", code: 9833 },
      { name: "Bilim & Doğa TV", code: 52780 },
      { name: "Gençlik TV Şovları", code: 60951 },
      { name: "TV Aksiyon & Macera", code: 10673 },
      { name: "TV Komedileri", code: 10375 },
      { name: "TV Belgeselleri", code: 10105 },
      { name: "TV Dramaları", code: 11714 },
      { name: "TV Korku", code: 83059 },
      { name: "TV Gizemleri", code: 4366 },
      { name: "TV Bilim Kurgu & Fantastik", code: 1372 },
    ],
  },
  {
    name: "Genç TV Şovları",
    code: 60951,
    subcategories: [
      { name: "Gençlik Komedileri", code: 3519 },
      { name: "Gençlik Dramaları", code: 9299 },
      { name: "Gençlik Korku Filmleri", code: 52147 },
    ],
  },
];


  const container = document.getElementById("categories");

  categories.forEach(category => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");

    const categoryHeader = document.createElement("h2");
    categoryHeader.textContent = category.name;
    categoryDiv.appendChild(categoryHeader);

    const subcategoryList = document.createElement("ul");

    category.subcategories.forEach(subcategory => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = `https://www.netflix.com/browse/genre/${subcategory.code}`;
      link.target = "_blank";
      link.textContent = subcategory.name;
      listItem.appendChild(link);
      subcategoryList.appendChild(listItem);
    });

    categoryDiv.appendChild(subcategoryList);
    container.appendChild(categoryDiv);
  });
});
