/** 
 * Gets the navigation list element and retrieves all the section elements in the document. 
*/
const navList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

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

        // Adds the 'active' class to 'li' that has the text content of the corrosponding section. 
        // Example: If section 1 is the current viewed section, apply the active class. 
        // Then check the data-nav of that section and apply the active class to the 'li' with that 
        // info in the text content.
        const navItems = document.querySelectorAll('#navbar__list li');
        for (const item of navItems) {
            item.classList.remove("active");
            if (item.textContent === activeSection.getAttribute('data-nav')) {
                item.classList.add("active");
            }
        }
    }
}

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

// Scroll event listener that calls the makeActive() function
document.addEventListener("scroll", function() { makeActive();});


