console.log("javaScript is working!");

// Sidebar toggle functionality

var toggleButton = document.getElementById("toggleSidebar");
var Sidebar = document.querySelector(".sidebar");
toggleButton.onclick = function () {
    Sidebar.classList.toggle("active");
};

// Section visibility function
function showSection(sectionID) {
    // Hide all sections first
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show the selected section (if it exists)
    let targetSection = document.getElementById(sectionID);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    } else {
        console.error("Section not found:", sectionID);
    }

    // Hide the banner when any section is clicked, except for "Home"
    let banner = document.getElementById("banner");
    if (banner) { // ✅ Ensure banner exists before modifying it
        if (sectionID === "home-section") {
            banner.classList.remove("hidden"); // ✅ Show banner if Home is clicked
        } else {
            banner.classList.add("hidden"); // ✅ Hide banner for other sections
        }
    } else {

        console.error("Banner not found!"); // ✅ Debugging message
    }
}

// Logout function
function logoutuser() {
    alert("You have been logged out.");
    window.location.href = "login.html"; // Change to your actual login page
}