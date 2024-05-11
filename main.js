console.log(jQuery().jquery);
// Submit subscription form using Ajax
$('#fo').on('submit', function (e) {
    e.preventDefault();
    var $form = $(this);
    $.ajax({
      type: 'POST',
      url: 'contact_ajax.php',
      data: $form.serialize()
    }).done(function () {
      $form[0].reset();
      alert('Thank you for your message!');
    }).fail(function () {
      alert('Something went wrong with sending your message!');
    });
  });

  const initSlider = () => {

    const imagelist = document.querySelector(".slider-wrapper .image-list");
    
    const slideButtons = document.querySelectorAll(".slider-wrapper .slider-button");
    const maxScrolleft = imagelist.scrollWidth - imagelist.clientWidth;
    // Slide images according to the slide button clicks
    
    slideButtons.forEach(button => {
    button.addEventListener("click", () => {
    const direction = button.id === "pr-slider"? -1: 1;
    const scrollAmount = imagelist.clientWidth* direction;
    imagelist.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
    });

const handleSlideButtons = () =>{
    slideButtons[0].style.display = imagelist.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display = imagelist.scrollLeft >= maxScrolleft ? "none" : "block";
}

    imagelist.addEventListener("scroll", ()=>{
        handleSlideButtons();
    })
    }

  window.addEventListener("load", initSlider);