document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll(".article.d-none");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  let itemsToShow = 3; // tampilkan 3 artikel setiap kali klik

  loadMoreBtn.addEventListener("click", function () {
    let hiddenArticles = document.querySelectorAll(".article.d-none");

    // Tampilkan artikel sesuai jumlah itemsToShow
    for (let i = 0; i < itemsToShow && i < hiddenArticles.length; i++) {
      hiddenArticles[i].classList.remove("d-none");
    }

    // Kalau tidak ada artikel lagi yang disembunyikan, sembunyikan tombol
    if (document.querySelectorAll(".article.d-none").length === 0) {
      loadMoreBtn.style.display = "none";
    }
  });
});
