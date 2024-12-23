// playing the main banner video

(function () {
    // Writing js for banner
    // Initialize dash.js player
    var player = dashjs.MediaPlayer().create();

    // Set the source of the video player (MPD manifest file)
    player.initialize(document.querySelector("#videoElement"), "./asset/video/output.mpd", true);

})();
// JS for tab button 
const tabContainer = document.getElementById('tab-btn47');
let currentPanel = '1';

if (tabContainer) {
    const tabs = tabContainer.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.panel');

    function switchTabs(e) {
        const targetTab = e.target;
        const tabId = targetTab.getAttribute('data-id');

        // Hide all panels and remove 'active' class from all tabs
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        panels.forEach(panel => {
            panel.classList.remove('active');
        });

        // Show the corresponding panel and add 'active' class to the clicked tab
        document.getElementById(`tab-panel${tabId}`).classList.add('active');
        targetTab.classList.add('active');
    }

    // Set the initial active tab and panel
    tabs[0].classList.add('active');
    panels[0].classList.add('active');

    // Add event listeners to all tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', switchTabs);
    });
}


// JavaScript to dynamically duplicate rows to ensure seamless scrolling
const containers = document.querySelectorAll('.recruit-img47');

containers.forEach(container => {
    const images = container.innerHTML;
    container.innerHTML += images + images; // Duplicate the images for infinite scrolling effect
});


// Navbar Animation
var tabsNewAnim = $('#navbar-animmenu');
var activeItemNewAnim = tabsNewAnim.find('.active');
var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
var itemPosNewAnimLeft = activeItemNewAnim.position();

$(".hori-selector").css({
    "left": itemPosNewAnimLeft.left + "px",
    "width": activeWidthNewAnimWidth + "px"
});

$("#navbar-animmenu").on("click", "li", function () {
    $('#navbar-animmenu ul li').removeClass("active");
    $(this).addClass('active');
    var activeWidthNewAnimWidth = $(this).innerWidth();
    var itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
        "left": itemPosNewAnimLeft.left + "px",
        "width": activeWidthNewAnimWidth + "px"
    });
});

$(document).on("click", "#navbar-animmenu ul li", function () {
    var tabId = $(this).data("tab");
    $("#navbar-animmenu ul li").removeClass("active");
    $(this).addClass("active");
    $(".tab-content").removeClass("active");
    $("#" + tabId).addClass("active");
});

document.addEventListener('DOMContentLoaded', function () {
    var activePanel = document.querySelector('.panel.active');
    if (activePanel) {
        var activeAccordion = activePanel.previousElementSibling;
        activePanel.style.display = "block";
        activeAccordion.querySelector(".icon").innerHTML = "-";
        activeAccordion.classList.add("clicked");
    }
});

// 


// Custom Navbar Logic
var navbarMenu = $('#custom-navbar');
var activeTab = navbarMenu.find('.active-tab');
var activeHeight = activeTab.innerHeight();
var tabPositionTop = activeTab.position();

$(".custom-selector").css({
    "top": tabPositionTop.top + "px"
});

$("#custom-navbar").on("click", "li", function () {
    $('#custom-navbar ul li').removeClass("active-tab");
    $(this).addClass('active-tab');
    var activeHeight = $(this).innerHeight();
    var tabPositionTop = $(this).position();
    $(".custom-selector").css({
        "top": tabPositionTop.top + "px",
    });

    // Tab content logic
    const tabId = $(this).data("tab");
    $(".custom-tab-content div").removeClass("active-content");
    $("#" + tabId).addClass("active-content");
});

document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close-btn');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    let currentIndex = 0;

    const showImage = (index) => {
        lightboxImg.src = galleryImages[index].src;
        currentIndex = index;
        lightbox.style.display = 'flex';
    };

    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => showImage(index));
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === lightboxImg) {
            lightbox.style.display = 'none';
        }
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        showImage(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage(currentIndex);
    });
});




const container = document.getElementById("circleContainer");
const vidFrame = document.querySelector(".vid-frame");
const thumbnail = document.getElementById("thumbnail");


const predefinedDots = Array.from(container.children); // Select the 5 predefined dots

// Clone the predefined dots to make a total of 15 dots
const totalDotsNeeded = 15;
const additionalDots = totalDotsNeeded - predefinedDots.length;

for (let i = 0; i < additionalDots; i++) {
    const dotToClone = predefinedDots[i % predefinedDots.length];
    const clonedDot = dotToClone.cloneNode(true);
    container.appendChild(clonedDot);
}

const dots = Array.from(container.children);
const totalDots = dots.length;
let radius;
let currentIndex = 0;
let player;

function calculateRadius() {
    const containerWidth = container.offsetWidth;
    let val = 0.9;

    if (window.innerWidth <= 540) {
        val = 1.5;
    }

    radius = containerWidth / val;
}

// function to return iframe src as per the id 


function handleDotClick(e) {
    const clickedDot = e.target.closest('.dot');
    const clickedIndex = Array.from(dots).indexOf(clickedDot);
    currentIndex = clickedIndex;
    updateDots();
}

function updateDots() {
    calculateRadius();
    dots.forEach((dot, index) => {
        const angle = ((index - currentIndex + totalDots) % totalDots) * (360 / totalDots);
        const radian = (angle * Math.PI) / 180;
        const x = radius * Math.cos(radian);
        const y = radius * Math.sin(radian);

        if (window.innerWidth <= 992)
            dot.style.transform = `translate(${x}px, ${y}px) rotate(-90deg)`;
        else
            dot.style.transform = `translate(${x}px, ${y}px)`;

        dot.classList.remove("active", "near-active", "visible");

        // make dots visible 
        switch (angle) {
            case 0:
            case 24:
            case 48:
            case 312:
            case 336:
                dot.classList.add('visible');
                dot.addEventListener('click', handleDotClick);
                break;
            default:
                dot.classList.remove('visible');
        }

        if (angle === 0) {
            dot.classList.add("active");
            const id = dot.dataset.id;
            dot.setAttribute('data-angle', angle);
            thumbnail.src = `./asset/img/vid-banner${id}.png`;
            if (window.innerWidth <= 992) {
                dot.style.transform = `translate(${x}px, ${y}px) scale(1.6) rotate(-90deg)`;
            } else {
                dot.style.transform = `translate(${x}px, ${y}px) scale(1.6)`;
            }
        } else if (angle === 24 || angle === 336) {
            dot.classList.add("near-active");
            if (window.innerWidth <= 992)
                dot.style.transform = `translate(${x}px, ${y}px) scale(1.3) rotate(-90deg)`;
            else
                dot.style.transform = `translate(${x}px, ${y}px) scale(1.2)`;
        }
    });

    // Replace video with thumbnail if dots are changed
    if (player) {
        player.reset();
        thumbnail.style.display = 'block';
        vidFrame.querySelector('video').remove();
    }
}

function rotateDots(direction) {
    currentIndex = (currentIndex + direction + totalDots) % totalDots;
    updateDots();
}

window.addEventListener("resize", updateDots);
updateDots();


// function to return video path as per the dot id
function getVidSrc(id) {

    switch (id) {
        case '1':
            return './asset/video/testimonial/udit/udit.mpd';
        case '2':
        case '3':
        case '4':
        case '5':
        default:
            return `/asset/video/output.mpd`;
    }
}

// Initialize dash.js player
function initializePlayer(id) {
    player = dashjs.MediaPlayer().create();
    player.initialize(document.createElement('video'),  getVidSrc(id), true);
    player.attachView(vidFrame.querySelector('video'));
}

// Handle click event on vid-frame
vidFrame.addEventListener('click', () => {


    // Check if the video element already exists
    let videoElement = vidFrame.querySelector('video');
    if (!videoElement) {
        const dotId = dots[currentIndex].dataset.id;
        initializePlayer(dotId);
        thumbnail.style.display = 'none';
        videoElement = document.createElement('video');
        videoElement.setAttribute('controls', 'controls');
        vidFrame.appendChild(videoElement);
        player.attachView(videoElement);
    }

    player.play();
});