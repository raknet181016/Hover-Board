const sliders = document.querySelectorAll(".slide");

for (let slide of sliders) {
    slide.addEventListener("click", function(event) {
        let currentSlider = event.target;

        for (let slide of sliders) {
            slide.classList.remove("active");
        }

        currentSlider.classList.add("active");
    });
}