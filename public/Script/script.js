$(".ham").on("click", function () {

    $(".container").toggleClass("isNavbar");
    $("#searchInput").toggleClass("isNavbarPlaceholder");

    if($(".container").hasClass("isNavbar")){
        $("#searchInput").css("box-shadow", "5px 5px 5px");
        $(".navbar").css("visibility", "visible");
        $(".navbar").slideDown();


    }else{
        $("#searchInput").css("box-shadow", "0px 0px 0px");
        $(".navbar").slideUp();
    }
});

var $sliderImage = $('.sliderImage');
        var $itemImages = $sliderImage.clone();
        $(".container-image").append($itemImages);

$(".exploreAbout").on("click", function () {
            console.log("tess");
            $(".ham").click();
});

function checkEnter(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        document.getElementById('searchForm').submit(); 
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeDot", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " activeDot";
}


