const carousel = document.getElementById("reviewsCarousel");

fetch("data/reviews.json")
  .then((res) => res.json())
  .then((reviews) => {

   carousel.innerHTML = reviews.map((review, index) => {
        const prev = index === 0 ? reviews.length - 1 : index - 1;
        const next = index === reviews.length - 1 ? 0 : index + 1;

        return `<div class="carousel-item relative w-full">
            <div class="w-full flex flex-col rounded-xl items-center justify-center bg-gray-100 py-10 px-6 lg:px-0">
              <img src="${review.image}" alt="${review.name}" class="w-24 h-24 rounded-full ring-2 ring-teal-500 mb-4 object-cover">
              <h3 class="text-xl font-semibold mb-1">${review.name}</h3>
              <p class="text-gray-600 italic mb-2">"${review.comment}"</p>
              <p class="text-yellow-500 font-bold"><i class="fa-solid fa-star text-amber-500"></i> ${review.rating}/5</p>
            </div>

            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button class="btn btn-circle prev" data-prev="${prev}">❮</button>
              <button class="btn btn-circle next" data-next="${next}">❯</button>
            </div>
          </div>`;
      }).join("");


    const slides = carousel.querySelectorAll(".carousel-item");
    let current = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("hidden", i !== index);
      });
    }

    showSlide(current);

    carousel.addEventListener("click", (e) => {
      if (e.target.classList.contains("next")) {
        current = parseInt(e.target.dataset.next);
        showSlide(current);
      } else if (e.target.classList.contains("prev")) {
        current = parseInt(e.target.dataset.prev);
        showSlide(current);
      }
    });
  }).catch((err) => { console.error("Error loading reviews:", err);
    document.getElementById("reviewsCarousel").innerHTML ="<p class='text-center py-10 text-red-500'>Failed to load reviews.</p>";
  });
