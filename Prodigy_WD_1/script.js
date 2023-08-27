
window.addEventListener("scroll", function() {
    const navigation = document.querySelector("#navbar");
    const isScrolled = window.scrollY > 10;
  
    if (isScrolled) {
      navigation.classList.add("scrolled");
    } else {
      navigation.classList.remove("scrolled");
    }
  });
  
const textToType = "Hello, this is home page!";
const typingDelay = 100;
function typeText() {
    const textElement = document.getElementById('typingText');
    let currentCharIndex = 0;
    function addNextChar() {
        textElement.textContent += textToType[currentCharIndex];
        currentCharIndex++;
        if (currentCharIndex < textToType.length) {
            setTimeout(addNextChar, typingDelay);
        }
    }
    addNextChar();
}
window.onload = typeText;


const headingTexts = ["Welcome!", "This is About page!", "Prodigy!"];
const headingElement = document.getElementById("changingHeading");

let currentIndex = 0;

function changeHeading() {
  headingElement.textContent = headingTexts[currentIndex];
  currentIndex = (currentIndex + 1) % headingTexts.length;
}

setInterval(changeHeading, 2000);


const headingTexts1 = ["Hello, World!", "Welcome!", "Keep Writing H1!"];
const headingElement1 = document.getElementById("changingHeading1");

let currentIndex1 = 0;

function changeHeading1() {
  headingElement1.textContent = headingTexts1[currentIndex1];
  currentIndex1 = (currentIndex1 + 1) % headingTexts1.length;
}


setInterval(changeHeading1, 2000);
