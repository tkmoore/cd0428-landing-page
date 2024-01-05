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
*/

/** 
 * Gets the navigation list element and retrieves all the section elements in the document. 
*/
const navList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");


/**
 * End Global Variables
 * Start Helper Functions 
*/

/**
 * This function checks each section to see if it's near the top of the viewport. 
 * Returns the size of an element and its position relative to the viewport. 
 * If the top of the bounding rectangle is between 0 and 150 pixels from
 * the top of the viewport, the section is considered to be near the top.
 */
function makeActive() {
    let activeSection = null;

    // Detects the element location relative to the viewport using .getBoundingClientRect()
    // The scroll event listener at the bottom calls the makeActive() function
    for (const section of sections) {
        const box = section.getBoundingClientRect();

        if (box.top >= 0 && box.top < 150) {
            activeSection = section;
            break;
        }
    }

    if (activeSection) {
        for (const section of sections) {
            section.classList.remove("active");
        }
        activeSection.classList.add("active");
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

/**
 * Loops over each section. For each section, it creates a new list item 
 * and an anchor element. The anchor's href attribute is set to the 
 * section's ID for smooth scrolling, and its text 
 * content is set to the value of the 'data-nav' attribute of the section.
 */
for (const section of sections) {
    const sectionID = section.id;
    const sectionDataNav = section.dataset.nav;

    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.href = `#${sectionID}`;
    anchor.textContent = sectionDataNav;
    anchor.classList.add("menu__link");

    // Scroll to section on link click
    anchor.addEventListener("click", (event) => {
        event.preventDefault(); // stifle default behavior
        document.getElementById(sectionID).scrollIntoView({ behavior: "smooth" });
    });

    // The anchor is appended to the list item, and the list item is then appended to the navigation menu.
    listItem.appendChild(anchor);
    navList.appendChild(listItem);
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
// !! Defined on line 89 !!

// Set sections as active
// Scroll event listener that calls the makeActive() function
document.addEventListener("scroll", function() { makeActive();});


