let hamburgerButton = document.getElementById("hamburger");
let navList = document.getElementById("nav-list");

function toggleButton() {
  navList.classList.toggle("show");
}

hamburgerButton.addEventListener("click", toggleButton);

function addGifMouseover(dogPic, dogGif) {
  let original = document.getElementById("dogHug");
  original.setAttribute("alt", "picture of a small apartment dog");
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

function quiz() {
  let name = prompt("What's your first name?");
  name = name[0].toUpperCase() + name.substring(1);
  let active = prompt("Do you like active dogs? Yes/No");
  active = active.toLowerCase();
  active = active.trim();
  let allergy = prompt("Are you allergic to dogs? Yes/No");
  allergy = allergy.toLowerCase();
  allergy = allergy.trim();
  let experienced = prompt("Have you had a dog before? Yes/No");
  experienced = experienced.toLowerCase();
  experienced = experienced.trim();
  alert("I've found a dog for you!");
  /* Changes top text*/
  let bestie = document.getElementById("bestFriend");
  bestie.innerHTML =
    "<span class='gradient-text'>Here's your new best friend!</span>";
  let h2 = document.getElementById("quizHeader");
  var breedText = document.getElementById("breedText");
  /* If non-active, show Shih Tzu */
  if (active === "no") {
    /*Changes greeting text*/
    h2.innerHTML = `Hi ${name}, a <em>Shih Tzu</em> would suit you best!`;
    /*Changes breedText to a paragraph on Shih Tzus*/
    breedText.innerHTML =
      "Shih Tzus, also known as 'little lions', are hypoallergenic dogs who have an outgoing, affectionate and playful personality. <br />Their toy size, low exercise requirements and calm temperament makes them especially suited for apartment living. <br /> Fun fact: Shih Tzus were prized by Chinese royalty in the imperial courts, and were said to lie at the feet of emperors and empresses to provide warmth. <br /><br /> To find out more about Shih Tzus, click here: <a href='https://en.wikipedia.org/wiki/Shih_Tzu' target='_blank' > Shih Tzu Info </a> <br />To see more photos of the Shih Tzu above, click here: <a href='https://www.instagram.com/safyra.ou/' target='_blank' >@safyra.ou</a>";
    /*Changes the original circle image to one of my dog, Fifi & adding a gif by me of my shih Tzu Fifi on mousehover to her static pic. when the mouse leaves the gif, it changes back to the original static pic*/
    let fifi = "src/images/Fifi.jpeg";
    let shihTzuGif = "src/images/fifigif.gif";
    addGifMouseover(fifi, shihTzuGif);
  } else if (allergy === "no") {
    h2.innerHTML = `Hi ${name}, a <em>Pomsky</em> would suit you best!`;
    breedText.innerHTML = `Pomskies are a cross between the Siberian Husky and Pomeranian. As they are highly adaptable, don't require a lot of space and don't require a ton of exercise, pomskies are suitable for city apartment life. <br /></br>They want lots of attention and look like adorable mini huskies. As they are very intelligent and quite playful around the house, they require lots of training and are not as suitable for first-time dog owners or for people who need to leave their pets alone at home. Pomskies don't take well to being left alone, and might destroy your furniture while you're hitting the town! <br /> <br /> Find out more about Pomskies here: <a href='https://dogtime.com/dog-breeds/pomsky#/slide/1' target='_blank'> Pomsky Info </a> <br /> Look at more Pomsky photos here: <a href='https://www.instagram.com/miya.pomsky' target='_blank'>@miya.pomsky</a>`;
    var mimi = "src/images/mimi.jpeg";
    var pomskyGif = "src/images/mimipomsky.gif";
    addGifMouseover(mimi, pomskyGif);
  } else if (experienced === "yes") {
    h2.innerHTML = `Hi ${name}, a <em>Brussels Griffon</em> would suit you best!`;
    breedText.innerHTML = `Brussels Griffons, known as Griffon Bruxellois in Europe, were originally bred for rat-hunting but have now become popular house pets. With their flat face, large eyes and dense coat, it wouldn't be a surprise if you mistook them for a Wookie! Griffons require a lot of time and personal attention, and need to live indoors with the family rather than be outside all day. <br /><br /> For more information on Brussels Griffons, click here: <a href='https://en.wikipedia.org/wiki/Griffon_Bruxellois' target='_blank'> Brussels Griffon Info</a><br /> For more photos of the cutie above, click here: <a href='https://www.instagram.com/squidthegriff/' target='_blank'>Squid the Griff</a>`;
    var brusselsGriffonPic = "src/images/brussels.jpeg";
    var brusselsGif = "src/images/brusselssprout.gif";
    addGifMouseover(brusselsGriffonPic, brusselsGif);
  } else {
    h2.innerHTML = `Hi ${name}, a <em>Basenji</em> would suit you best!`;
    breedText.innerHTML = `Basenjis are known as the 'barkess' dogs of Africa, and were originally trained to hunt small game. They are now beautiful family pets with a certain stubborn streak, a  fierce intelligence and escape artist tendencies. While they don't bark, Basenjis can certainly get your attention by yodeling. They require lots of walks and exercise as they are high-energy dogs. <br />If you're looking for a new hobby, why not take up lure coursing with your Basenji?<br /><br /> For more information on Basenjis, click here: <a href='https://dogtime.com/dog-breeds/basenji#/slide/1' target='_blank'>Basenji Info</a> <br /> For cute Basenji photos, click here: <a href='https://www.instagram.com/basenji_bertje/' target='_blank'>Bertje the Basenji</a>`;
    /* Changing the dogHug photo to a basenji photo by Edvinas Bruzas on Unsplash*/
    var basenjiPic = "src/images/basenji.jpeg".setAttribute("alt", "YO");

    /*adding a gif by Westminster Kennel Club via Giphy on mousehover to the basenji pic*/
    var basenjiGif = "src/images/basenjicutie.gif";
    addGifMouseover(basenjiPic, basenjiGif);
    /*when the mouse leaves the gif, it changes back to the original static pic*/
  }
}

let button = document.getElementById("quizButton");
button.addEventListener("click", quiz);
