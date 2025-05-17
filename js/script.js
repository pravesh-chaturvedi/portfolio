document.addEventListener("DOMContentLoaded", function () {
    // Get all sections that have an ID defined
    const sections = document.querySelectorAll("section[id]");
    

    // Add an event listener to detect scrolling
    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {
        let scrollY = window.pageYOffset;

        // Now we loop through sections to get height, top, and ID values for each
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 70; // Adjust for navbar height
            sectionId = current.getAttribute("id");

            // If our current scroll position enters the space where the current section is on screen, add the .active class to the corresponding nav link, else remove it
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(".nav-link[href*=" + sectionId + "]").classList.add("active");
            } else {
                document.querySelector(".nav-link[href*=" + sectionId + "]").classList.remove("active");
            }
        });
    }

});
document.getElementById("downloadResume").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
  
    // Replace this path with your actual resume file path
    const resumePath = "pravesh_resume.pdf"; 
  
    // Create a temporary download link
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "pravesh_resume.pdf"; // Set the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

