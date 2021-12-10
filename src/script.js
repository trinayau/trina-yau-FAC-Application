let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 3000);

let bestie = document.getElementById("bestFriend");
let button = document.getElementById("quizButton");
let form = document.getElementById("quizForm");
let h2 = document.getElementById("quizHeader");
var breedText = document.getElementById("breedText");

function addGifMouseover(dogPic, dogGif) {
  let original = document.getElementById("dogHug");
  original.style.background = `url(${dogPic})`;
  original.style.backgroundSize = "100%";
  original.addEventListener("mouseover", function () {
    original.style.background = `url(${dogGif})`;
    original.style.backgroundSize = "100%";
  });
  original.addEventListener("mouseleave", function () {
    original.style.background = `url(${dogPic})`;
    original.style.backgroundSize = "100%";
  });
}

function basenji() {
  h2.innerHTML = `A <em>Basenji</em> would suit you best!`;
  breedText.innerHTML = `Basenjis are known as the 'barkless' dogs of Africa, and were originally trained to hunt small game. They are now beautiful family pets with a certain stubborn streak, a  fierce intelligence and escape artist tendencies. While they don't bark, Basenjis can certainly get your attention by yodeling. They require lots of walks and exercise as they are high-energy dogs. <br />If you're looking for a new hobby, why not take up lure coursing with your Basenji?<br /><br /> For more information on Basenjis, click here: <a href='https://dogtime.com/dog-breeds/basenji#/slide/1' target='_blank'>Basenji Info</a> <br /> For cute Basenji photos, click here: <a href='https://www.instagram.com/basenji_bertje/' target='_blank'>Bertje the Basenji</a>`;
  var basenjiPic = "src/images/basenji.jpeg";
  var basenjiGif = "src/images/basenjicutie.gif";
  addGifMouseover(basenjiPic, basenjiGif);
}

function brusselsGriffon() {
  h2.innerHTML = `A <em>Brussels Griffon</em> would suit you best!`;
  breedText.innerHTML = `Brussels Griffons, known as Griffon Bruxellois in Europe, were originally bred for rat-hunting but have now become popular house pets. With their flat face, large eyes and dense coat, it wouldn't be a surprise if you mistook them for a Wookie! Griffons require a lot of time and personal attention, and need to live indoors with the family rather than be outside all day. <br /><br /> For more information on Brussels Griffons, click here: <a href='https://en.wikipedia.org/wiki/Griffon_Bruxellois' target='_blank'> Brussels Griffon Info</a><br /> For more photos of the cutie above, click here: <a href='https://www.instagram.com/squidthegriff/' target='_blank'>Squid the Griff</a>`;
  var brusselsGriffonPic = "src/images/brussels.jpeg";
  var brusselsGif = "src/images/brusselssprout.gif";
  addGifMouseover(brusselsGriffonPic, brusselsGif);
}

function pomsky() {
  h2.innerHTML = `A <em>Pomsky</em> would suit you best!`;
  breedText.innerHTML = `Pomskies are a cross between the Siberian Husky and Pomeranian. As they are highly adaptable, don't require a lot of space and don't require a ton of exercise, pomskies are suitable for city apartment life. <br /></br>They want lots of attention and look like adorable mini huskies. As they are very intelligent and quite playful around the house, they require lots of training and are not as suitable for first-time dog owners or for people who need to leave their pets alone at home. Pomskies don't take well to being left alone, and might destroy your furniture while you're hitting the town! <br /> <br /> Find out more about Pomskies here: <a href='https://dogtime.com/dog-breeds/pomsky#/slide/1' target='_blank'> Pomsky Info </a> <br /> Look at more Pomsky photos here: <a href='https://www.instagram.com/miya.pomsky' target='_blank'>@miya.pomsky</a>`;
  var mimi = "src/images/Mimi.jpeg";
  var pomskyGif = "src/images/mimipomsky.gif";
  addGifMouseover(mimi, pomskyGif);
}

function shihTzu() {
  h2.innerHTML = `A <em>Shih Tzu</em> would suit you best!`;
  breedText.innerHTML =
    "Shih Tzus, also known as 'little lions', are hypoallergenic dogs who have an outgoing, affectionate and playful personality. <br />Their toy size, low exercise requirements and calm temperament makes them especially suited for apartment living. <br /> Fun fact: Shih Tzus were prized by Chinese royalty in the imperial courts, and were said to lie at the feet of emperors and empresses to provide warmth. <br /><br /> To find out more about Shih Tzus, click here: <a href='https://en.wikipedia.org/wiki/Shih_Tzu' target='_blank' > Shih Tzu Info </a> <br />To see more photos of the Shih Tzu above, click here: <a href='https://www.instagram.com/safyra.ou/' target='_blank' >@safyra.ou</a>";
  let fifi = "src/images/Fifi.jpeg";
  let shihTzuGif = "src/images/fifigif.gif";
  addGifMouseover(fifi, shihTzuGif);
}
function quiz() {
  let personName = document.getElementById("nameInput").value;
  personName = personName[0].toUpperCase() + personName.substring(1);
  bestie.innerHTML = `<span class='gradient-text'>${personName}, here's your new best friend!</span>`;
  if (document.getElementById("noActivity").checked) {
    //activity button is checked yes
    shihTzu();
  } else if (document.getElementById("notAllergic").checked) {
    //Female radio button is checked
    pomsky();
  } else if (document.getElementById("experienced").checked) {
    brusselsGriffon();
  } else {
    basenji();
  }
}

function toggleButton() {
  form.classList.toggle("show");
  button.classList.toggle("hide");
}
function handleForm(event) {
  event.preventDefault();
  quiz();
  form.classList.remove("show");
  button.classList.remove("hide");
  document.getElementById("bestFriend").scrollIntoView({ behavior: "smooth" });
}
form.addEventListener("submit", handleForm);

button.addEventListener("click", toggleButton);

let hamburgerButton = document.getElementById("hamburger");
let navList = document.getElementById("nav-list");

function toggleButton() {
  navList.classList.toggle("show");
}

hamburgerButton.addEventListener("click", toggleButton);
