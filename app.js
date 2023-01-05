var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function randomCaption()
{
  var captions = [
    "Served up fresh",
    "Steamin' hot...ooh baby!",
    "The quotiest quotes",
    "100% REAL American-made quotes",
    "These quotes are HUGE",
    "Some quotes for you.",
    "Endlessly quotable",
    "An inspiration sensation",
    "It's the most quoterful time of the year",
    "Quotes from the quote sphere",
    "Warm, crispy, filling quotes, right out of the quote oven",
    "You can be a quoter too!",
    "Yes, they really said that"
  ]; 
  var caption = captions[Math.floor(Math.random() * (captions.length))];
  document.getElementById("randomCaption").innerHTML = caption; 
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  slides[slideIndex-1].style.display = "block";
} 