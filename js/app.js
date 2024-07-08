/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


const section = document.createElement("section");
const secdiv = document.createElement("div");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const headsection = document.createElement("h2");
const main = document.querySelector("main");

const li1 = document.createElement("li");

const li2 = document.createElement("li");



const li3 = document.createElement("li");

const li4 = document.createElement("li");

const li5 = document.createElement("li");


const a1 = document.createElement("a");
const a2 = document.createElement("a");
const a3 = document.createElement("a");
const a4 = document.createElement("a");
const a5 = document.createElement("a");


const getAllSec = document.querySelectorAll("section");
let secArray = [getAllSec[0], getAllSec[1], getAllSec[2], getAllSec[3]];
const firstUl = document.getElementsByTagName("ul")[0];
let sections = document.querySelectorAll("section");

//end global variable
 //create section
 headsection.innerHTML = "Section 5";
 p1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod";
 p2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";
 secdiv.appendChild(headsection);
 secdiv.appendChild(p1);
 secdiv.appendChild(p2);
 section.appendChild(secdiv);
 section.setAttribute("id", "section5");
 section.setAttribute("data-nav", "Section 5");
 secdiv.setAttribute("class", "landing__container");
 main.appendChild(section);
 secArray[4]=section;
 //end build section
 




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
li1.innerHTML = "Section 1";
li1.classList.add("menu__link");

li2.innerHTML = "Section 2";
li2.classList.add("menu__link");
li3.innerHTML = "Section 3";
li3.classList.add("menu__link");

li4.innerHTML = "Section 4";
li4.classList.add("menu__link");

li5.innerHTML = "Section 5";
li5.classList.add("menu__link");


a1.setAttribute("href", "#section1");
a2.setAttribute("href", "#section2");
a3.setAttribute("href", "#section3");
a4.setAttribute("href", "#section4");
a5.setAttribute("href", "#section5");

a1.appendChild(li1);
a2.appendChild(li2);
a3.appendChild(li3);
a4.appendChild(li4);
a5.appendChild(li5);

firstUl.append(a1,a2,a3,a4,a5);

document.querySelectorAll(".menu__link")[0].style = "display:inline-block";
document.querySelectorAll(".menu__link")[1].style = "display:inline-block";
document.querySelectorAll(".menu__link")[2].style = "display:inline-block";
document.querySelectorAll(".menu__link")[3].style = "display:inline-block";
document.querySelectorAll(".menu__link")[4].style = "display:inline-block";

//end build nav






// Add class 'active' to section when near top of viewport




function makeActive() {
    for (let i = 0; i < secArray.length; i++) {
        let box = secArray[i].getBoundingClientRect();

        // Find a value that works best, but 150 seems to be a good start.
        if (box.top <= 150 && box.bottom >= 150) {
            // Apply active state on current section and corresponding Nav link
            secArray[i].classList.add("active");
        } else {
            // Remove active state from other section and corresponding Nav link
            secArray[i].classList.remove("active");
        }
    }
}
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
document.querySelectorAll("a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(anchor.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Set sections as active
 

window.addEventListener('scroll',makeActive);


//

const setActiveSection = (entries) => {
  entries.forEach((entry) => {
    const navLink = document.querySelector(
      `a[href="#${entry.target.id}"]`
    );

    if (entry.isIntersecting) {
      entry.target.classList.add("active-nav");
      navLink.classList.add("active-nav"); // Add active class to nav link
      navLink.style = `    display:inline-block;
    font-weight: bold;
    text-decoration: none;
    background-color:#333`;
    // Change text color to white for contrast

    } else {
      entry.target.classList.remove("active-nav");
      navLink.classList.remove("active-nav"); // Remove active class from nav link
        navLink.style = ""; // Change text color to white for contrast
    }
  });
};


  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Adjust threshold as needed
  };

  const observer = new IntersectionObserver(setActiveSection, observerOptions);
 
for(let i = 0; i < secArray.length; i++) {
  observer.observe(secArray[i]);
}

