// AlgoForge Hackathon Promotion JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the countdown timer
    initCountdown();
    
    // Initialize the floating badge
    initFloatingBadge();
});

// Function to initialize the countdown timer
function initCountdown() {
    // Set the date we're counting down to (example: May 15, 2024)
    const hackathonDate = new Date("May 15, 2024 09:00:00").getTime();
    
    // Update the countdown every 1 second
    const countdownTimer = setInterval(function() {
        // Get current date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the hackathon date
        const distance = hackathonDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update the countdown elements
        if (document.getElementById("countdown-days")) {
            document.getElementById("countdown-days").innerHTML = days;
            document.getElementById("countdown-hours").innerHTML = hours;
            document.getElementById("countdown-minutes").innerHTML = minutes;
            document.getElementById("countdown-seconds").innerHTML = seconds;
        }
        
        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(countdownTimer);
            const countdownElements = document.querySelectorAll('.countdown-timer');
            countdownElements.forEach(element => {
                element.innerHTML = "<p>The hackathon has started!</p>";
            });
        }
    }, 1000);
}

// Function to initialize the floating badge
function initFloatingBadge() {
    // Check if the user has dismissed the badge before
    const badgeDismissed = localStorage.getItem('algoforge_badge_dismissed');
    
    if (!badgeDismissed) {
        // Create the badge element
        const badge = document.createElement('div');
        badge.className = 'hackathon-badge';
        badge.innerHTML = `
            <img src="assets/images/algoforge-logo.png" alt="AlgoForge" class="algoforge-logo">
            <span class="pulse-dot"></span>
            <div class="badge-popup">
                <h3>AlgoForge Hackathon</h3>
                <p>36-hour coding challenge with ₹50,000+ in prizes!</p>
                <div class="countdown-timer">
                    <div class="countdown-unit">
                        <span id="countdown-days" class="countdown-value">00</span>
                        <span class="countdown-label">Days</span>
                    </div>
                    <div class="countdown-unit">
                        <span id="countdown-hours" class="countdown-value">00</span>
                        <span class="countdown-label">Hours</span>
                    </div>
                    <div class="countdown-unit">
                        <span id="countdown-minutes" class="countdown-value">00</span>
                        <span class="countdown-label">Mins</span>
                    </div>
                    <div class="countdown-unit">
                        <span id="countdown-seconds" class="countdown-value">00</span>
                        <span class="countdown-label">Secs</span>
                    </div>
                </div>
                <a href="https://algoforge.tech/" target="_blank" class="badge-btn">Register Now</a>
            </div>
        `;
        
        // Add the badge to the body
        document.body.appendChild(badge);
        
        // Add close button to the badge popup
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '&times;';
        closeButton.style.cssText = 'position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 20px; cursor: pointer; color: #aaa;';
        
        const badgePopup = badge.querySelector('.badge-popup');
        badgePopup.appendChild(closeButton);
        
        // Add event listener to close button
        closeButton.addEventListener('click', function(e) {
            e.stopPropagation();
            badge.remove();
            localStorage.setItem('algoforge_badge_dismissed', 'true');
        });
        
        // Prevent the badge from being dismissed when clicking on the popup
        badgePopup.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

// Function to add the AlgoForge event to the slider
function addAlgoForgeToSlider() {
    const slider = document.getElementById('slider');
    
    if (slider) {
        // Create a new slide for AlgoForge
        const algoForgeSlide = document.createElement('div');
        algoForgeSlide.className = 'slide';
        algoForgeSlide.style.backgroundImage = "url('assets/images/algoforge-banner.jpg')";
        
        algoForgeSlide.innerHTML = `
            <div class="slide-overlay">
                <h2 class="slide-title">AlgoForge Hackathon</h2>
                <p class="slide-subtitle">36-hour coding marathon with ₹50,000+ in prizes</p>
                <a href="https://algoforge.tech/" target="_blank" class="btn btn-primary">Register Now</a>
            </div>
        `;
        
        // Add the slide to the beginning of the slider
        slider.insertBefore(algoForgeSlide, slider.firstChild);
        
        // Make it the active slide
        const currentActive = slider.querySelector('.slide.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        algoForgeSlide.classList.add('active');
    }
}

// Call the function to add AlgoForge to the slider
document.addEventListener('DOMContentLoaded', function() {
    addAlgoForgeToSlider();
}); 