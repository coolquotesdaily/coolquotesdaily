/*
  {"quoteDate": "", 
  "imgSrc":"", 
  "quoteText":"", 
  "authorName":"", 
  "authorDescription":""},

  
*/

var slideIndex = 1;
quoteDataList = 
[
  {"quoteDate": "January 14th, 2023", 
  "imgSrc":"taet.png", 
  "quoteText":"People call me a misogynist, but I've actually worked with a ton of women.", 
  "authorName":"Andrew Tate", 
  "authorDescription":"Human Trafficker"},

  {"quoteDate": "January 13th, 2023", 
  "imgSrc":"roag.png", 
  "quoteText":"The only good vaccine is the one that protects you from being gay.", 
  "authorName":"Joe Rogan", 
  "authorDescription":"Brain Trauma Victim"},

  {"quoteDate": "January 12th, 2023", 
  "imgSrc":"rusk.png", 
  "quoteText":"In ten years, technology will have advanced to the point where I will have a robot wife who is programmed to never divorce me.", 
  "authorName":"Elon Musk", 
  "authorDescription":"Visionary"},

  {"quoteDate": "January 11th, 2023", 
  "imgSrc":"merg.png", 
  "quoteText":"Guys help, I'm trying to fix my page on Wikipedia. It says I was born of an unholy union between a snake and an albino jackal, and that's not true! I can't believe someone would spread lies on the internet.", 
  "authorName":"Mark Zuckerberg", 
  "authorDescription":"Concerned Citizen"},
  
  {"quoteDate": "January 10th, 2023", 
  "imgSrc":"jurd.png", 
  "quoteText":"Penis pills how to enlarge penis actual big penis make penis hard longer how to fix penis real.", 
  "authorName":"Jordan Peterson", 
  "authorDescription":"Googler"},
  
  {"quoteDate": "January 9th, 2023", 
  "imgSrc":"grusk.png", 
  "quoteText":"Did you check out the meme I sent you? It's from 4chan.", 
  "authorName":"Elon Musk", 
  "authorDescription":"Billionaire"},

  {"quoteDate": "January 8th, 2023", 
  "imgSrc":"rul.png", 
  "quoteText":"If men can be women too, then that takes power and attention away from me, and I can't allow that.", 
  "authorName":"J.K. Rowling", 
  "authorDescription":"Activist"},

  {"quoteDate": "January 7th, 2023", 
  "imgSrc":"roge.png", 
  "quoteText":"You have to grab life by the balls, kick it right in its balls, and when that ball's in your court, you play the game of life.", 
  "authorName":"Joe Rogan", 
  "authorDescription":"Podcaster"},

  {"quoteDate": "January 6th, 2023", 
  "imgSrc":"shup.png", 
  "quoteText":"How come when I take my penis out and spin it around in public, suddenly I'm a sex pervert, but when I ask a woman to do the same, suddenly I'm a sex pervert? Men just aren't treated fairly in today's world.", 
  "authorName":"Ben Shapiro", 
  "authorDescription":"Sex Pervert"},

  {"quoteDate": "January 5th, 2023", 
  "imgSrc":"jorf.png", 
  "quoteText":"First I'm going to fuck the Moon, and then I'm going to fuck Mars.", 
  "authorName":"Jeffrey Bezos", 
  "authorDescription":"Rocket Enthusiast"},

  {"quoteDate": "January 4th, 2023", 
  "imgSrc":"morg.png", 
  "quoteText":"Does anyone know how to edit pages on Wikipedia? There's a few things on there I'd like to change.", 
  "authorName":"Mark Zuckerberg", 
  "authorDescription":"Tech Wiz"},

  {"quoteDate": "January 3rd, 2023", 
  "imgSrc":"rowl.png", 
  "quoteText":"What people don't understand about Harry Potter is that all the things in those books are made up.", 
  "authorName":"J.K. Rowling", 
  "authorDescription":"Creative Writer"},

  {"quoteDate": "January 2nd, 2023", 
  "imgSrc":"marg.png", 
  "quoteText":"I didn't know about Wikipedia until yesterday. Pretty neat website!", 
  "authorName":"Mark Zuckerberg", 
  "authorDescription":"Business Owner"},

  {"quoteDate": "January 1st, 2023", 
  "imgSrc":"jarf.png", 
  "quoteText":"Every living creature on Earth will pay for what happened to me in my 10th grade biology class.", 
  "authorName":"Jeffrey Bezos", 
  "authorDescription":"Entrepreneur"}
];

showSlides(slideIndex);

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

/*
function randomCaption() {
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
*/

function showSlides(nextSlide) {
  var nextButtonElement = document.getElementById("nextButtonElement");
  var prevButtonElement = document.getElementById("prevButtonElement");
  var quoteDateElement = document.getElementById("quoteDateElement");
  var quoteImgElement = document.getElementById("quoteImgElement");
  var quoteTextElement = document.getElementById("quoteTextElement");
  var quoteAuthorElement = document.getElementById("quoteAuthorElement");
  var quoteContainerElement = document.getElementById("quoteContainerElement");
  var quoteDataObject = quoteDataList[nextSlide-1];

  document.getElementById("quoteSlideElement").style.display = "none";
  quoteImgElement.src = "blank.png";

  slideIndex = nextSlide;

  if (slideIndex == quoteDataList.length) {
    nextButtonElement.style.display = "none";
  }
  else if (slideIndex == 1) {
    prevButtonElement.style.display = "none";
  }
  else {
    nextButtonElement.style.display = "block";
    prevButtonElement.style.display = "block";
  }

  quoteDateElement.textContent = quoteDataObject.quoteDate;
  quoteImgElement.src = "img/" + quoteDataObject.imgSrc;
  quoteTextElement.textContent = quoteDataObject.quoteText;
  quoteAuthorElement.textContent = quoteDataObject.authorName + ", " + quoteDataObject.authorDescription;

  document.getElementById("quoteSlideElement").style.display = "block";
  fadeIn(quoteImgElement, quoteContainerElement);
  
} 

function fadeIn(quoteImgElement, quoteContainerElement) {
  fadeInAnimationDuration = 1250;
  quoteImgElement.classList.add("fadeIn");
  quoteContainerElement.classList.add("fadeIn");
  setTimeout(function() {
    quoteImgElement.classList.remove("fadeIn");
    quoteContainerElement.classList.remove("fadeIn");
  }, fadeInAnimationDuration);
}

/*
function fadeOut(quoteImgElement, quoteContainerElement) {
  quoteImgElement.classList.add("fadeOut");
  quoteContainerElement.classList.add("fadeOut");
  setTimeout(function() {
    quoteImgElement.classList.remove("fadeOut");
    quoteContainerElement.classList.remove("fadeOut");
  }, 750);
}
*/