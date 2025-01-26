// extras.js
function openCity(evt, cityName) {
    // Get all elements with class="tabcontent" and hide them
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Remove active class from all tab buttons
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // Show the selected tab and mark it as active
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    
    // Close all expandable boxes in other tabs
    const allBoxHeaders = document.querySelectorAll('.box-header');
    allBoxHeaders.forEach(header => {
        if (header.closest('.tabcontent').id !== cityName) {
            header.classList.remove('active');
            const content = header.nextElementSibling;
            content.classList.remove('active');
            const icon = header.querySelector('.expand-icon');
            icon.textContent = '+';
        }
    });
}

function toggleBox(header) {
    // Close any other open boxes in the same tab
    const currentTab = header.closest('.tabcontent');
    const allBoxHeadersInTab = currentTab.querySelectorAll('.box-header');
    
    allBoxHeadersInTab.forEach(otherHeader => {
        if (otherHeader !== header && otherHeader.classList.contains('active')) {
            otherHeader.classList.remove('active');
            otherHeader.nextElementSibling.classList.remove('active');
            otherHeader.querySelector('.expand-icon').textContent = '+';
        }
    });
    
    // Toggle the clicked box
    header.classList.toggle('active');
    const content = header.nextElementSibling;
    content.classList.toggle('active');
    
    // Update the expand/collapse icon
    const icon = header.querySelector('.expand-icon');
    icon.textContent = header.classList.contains('active') ? '−' : '+';
}

// Open the default tab (About) when the page loads
window.onload = function() {
    document.querySelector('.tablinks').click();
};