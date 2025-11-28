// Update active nav link on click
document.querySelectorAll(".nav-link").forEach(function (link) {
  link.addEventListener("click", function () {
    document.querySelectorAll(".nav-link").forEach(function (l) {
      l.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// FAQ accordion
document.querySelectorAll(".faq-item").forEach(function (item) {
  var question = item.querySelector(".faq-question");
  question.addEventListener("click", function () {
    var isActive = item.classList.contains("active");
    document.querySelectorAll(".faq-item").forEach(function (i) {
      i.classList.remove("active");
    });
    if (!isActive) {
      item.classList.add("active");
    }
  });
});
