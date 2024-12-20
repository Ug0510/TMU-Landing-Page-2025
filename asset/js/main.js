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


// creating the scrolling marquee feature in the recruiters section

function createRecruiterDOM(itemCount) {
    let firstHtml = '';
    let secondHtml = '';
    for (let i = 1; i <= itemCount; i++) {

        if (i <= itemCount / 2) {
            firstHtml += `<div class="scrolling-div"><img src="./asset/img/recruiters/image_${i}.webp" class="recruiters-img" alt=""></div>`;
        }

        else {
            secondHtml += `<div class="scrolling-div"><img src="./asset/img/recruiters/image_${i}.webp" class="recruiters-img" alt=""></div>`;
        }
    }

    return {
        firstHtml: firstHtml,
        secondHtml: secondHtml
    }
}

function addRecruiters() {

    const itemCount = 24;
    const scrollingDiv = document.querySelector('.scrolling-divs');
    const scrollingDiv2 = document.querySelector('.scrolling-divs.slower');

    const { firstHtml, secondHtml } = createRecruiterDOM(itemCount);

    if (scrollingDiv) {
        scrollingDiv.innerHTML = firstHtml + firstHtml + firstHtml;
    }
    if (scrollingDiv2) {
        scrollingDiv2.innerHTML = secondHtml + secondHtml + secondHtml;
    }
}

addRecruiters();



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


const reviews = [{
    name: "Speaks about College of Computing Sciences & IT",
    text: "TMU, as a University is the cornerstone of my success as a Technical Architect. The transformative education equipped me with vital skills and mentorship from faculty. Practical learning and industry exposure provided confidence to excel in my profession. Grateful for TMU's profound impact on my career journey.",
    img: "asset/img/testimonial/1.png",
    profile: {
        img: "asset/img/testimonial/1.png",
        name: "Rajeev Mishra",
        link: "https://www.linkedin.com/in/rajeevmishra20/",
        designation: "Technology Architect",
        company: "Bearing Point, Germany",
        course: "B.Tech CSE",
        graduationYear: "2014",
    },
},
{
    name: "Speaks about TMIMT College of Management",
    text: "Teerthanker Mahaveer University (TMU) played a vital role in my success as Head of Saudi German Hospitals Group in Dubai. The transformative MBA experience provided essential skills and support from faculty mentors. Practical learning and industry exposure instilled confidence for leadership, and I am forever grateful for TMU's impact on my career.",
    img: "asset/img/testimonial/2.png",
    profile: {
        img: "asset/img/testimonial/2.png",
        name: "Shobhit Jain",
        link: "https://www.linkedin.com/in/shobhit-jain-49197ba0",
        designation: "Group Director - Talent Acquisition",
        company: "Saudi German Hospitals Group",
        course: "MBA",
        graduationYear: "2011",
    },
},
{
    name: "Speaks about Medical College & Research Centre",
    text: "TMU, Medical College & Research Centre has been the bedrock of my success as an MBBS doctor. The comprehensive medical education and mentorship from faculty have honed my skills and knowledge. With practical training and industry exposure, TMU empowered me to make a meaningful impact in healthcare. Forever grateful to TMU.",
    img: "asset/img/testimonial/3.png",
    profile: {
        img: "asset/img/testimonial/3.png",
        name: "Radhika Mathur",
        link: "#",
        designation: "Resident Physician",
        company: "HCA Florida Oak Hill Hospital",
        course: "MBBS",
        graduationYear: "2019",
    },
},
{
    name: "Speaks about Engineering College",
    text: "I am deeply grateful to TMU for laying the foundation of my academic and professional journey. Graduating with a Master of Computer Applications in 2005 as a First Division Honors topper, I can confidently say that the education and mentorship I received at TMU were pivotal in shaping my career. The institute’s strong curriculum and emphasis on practical learning equipped me with the skills necessary to excel in the technology field. Today, as a Senior Software Architect at HCL Software in Noida, I often reflect on the solid foundation and critical thinking skills I developed at TMU. The institute will always hold a special place in my heart, and I am proud to be an alumnus of such a distinguished institution. ",
    img: "asset/img/testimonial/1.png",
    profile: {
        img: "asset/img/testimonial/1.png",
        name: "Ashish Bhatnagar",
        link: "https://www.linkedin.com/in/abhatnagar83",
        designation: "Senior Software Architect",
        company: "HCL Software, Noida",
        course: "MCA",
        graduationYear: "2005",
    },
},
{
    name: "Speaks about College of Computing Sciences & IT",
    text: "TMU, as a University is the cornerstone of my success as a Technical Architect. The transformative education equipped me with vital skills and mentorship from faculty. Practical learning and industry exposure provided confidence to excel in my profession. Grateful for TMU's profound impact on my career journey.",
    img: "asset/img/testimonial/2.png",
    profile: {
        img: "asset/img/testimonial/2.png",
        name: "Rajeev Mishra",
        link: "https://www.linkedin.com/in/rajeevmishra20/",
        designation: "Technology Architect",
        company: "Bearing Point, Germany",
        course: "B.Tech CSE",
        graduationYear: "2014",
    },
},
{
    name: "Speaks about TMIMT College of Management",
    text: "Teerthanker Mahaveer University (TMU) played a vital role in my success as Head of Saudi German Hospitals Group in Dubai. The transformative MBA experience provided essential skills and support from faculty mentors. Practical learning and industry exposure instilled confidence for leadership, and I am forever grateful for TMU's impact on my career.",
    img: "asset/img/testimonial/3.png",
    profile: {
        img: "asset/img/testimonial/3.png",
        name: "Shobhit Jain",
        link: "https://www.linkedin.com/in/shobhit-jain-49197ba0",
        designation: "Group Director - Talent Acquisition",
        company: "Saudi German Hospitals Group",
        course: "MBA",
        graduationYear: "2011",
    },
},
{
    name: "Speaks about Medical College & Research Centre",
    text: "TMU, Medical College & Research Centre has been the bedrock of my success as an MBBS doctor. The comprehensive medical education and mentorship from faculty have honed my skills and knowledge. With practical training and industry exposure, TMU empowered me to make a meaningful impact in healthcare. Forever grateful to TMU.",
    img: "asset/img/testimonial/2.png",
    profile: {
        img: "asset/img/testimonial/2.png",
        name: "Radhika Mathur",
        link: "#",
        designation: "Resident Physician",
        company: "HCA Florida Oak Hill Hospital",
        course: "MBBS",
        graduationYear: "2019",
    },
},
];

let currentReviewIndex = 0;

function showReview(index) {
    const review = reviews[index];
    document.querySelector('.testimonial-title').innerText = review.name;
    document.querySelector('.review-text').innerText = review.text;
    document.getElementById('profile-picture').src = review.profile.img;
    document.getElementById('profile-name').innerText = review.profile.name;
    document.getElementById('profile-link').href = review.profile.link;
    document.getElementById('profile-designation').innerText = review.profile.designation;
    document.getElementById('profile-company').innerText = review.profile.company;
    document.getElementById('profile-course').innerText = review.profile.course;
    document.getElementById('profile-graduationYear').innerText = review.profile.graduationYear;

    document.querySelectorAll('.thumb').forEach((thumb, i) => {
        thumb.classList.toggle('active-thumb', i === index);
    });
}

function showNextReview() {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    showReview(currentReviewIndex);
}

function showPreviousReview() {
    currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    showReview(currentReviewIndex);
}

function displayReviewByIndex(index) {
    currentReviewIndex = index;
    showReview(currentReviewIndex);
}

showReview(currentReviewIndex);

// Alumni profile section in alumni page end


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
const popup = document.getElementById('popup');
const closeButton = document.querySelector('.close-button');

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

function calculateRadius() {
    const containerWidth = container.offsetWidth;
    let val = 0.9;
    if (window.innerWidth <= 540) {
        val = 1.6;
    }
    radius = containerWidth / val;
}

function updateDots() {
    calculateRadius();
    dots.forEach((dot, index) => {
        const angle = ((index - currentIndex + totalDots) % totalDots) * (360 / totalDots);
        const radian = (angle * Math.PI) / 180;
        const x = radius * Math.cos(radian);
        const y = radius * Math.sin(radian);

        console.log('---');
        console.log(angle);

        if (window.innerWidth <= 540)
            dot.style.transform = `translate(${x}px, ${y}px) rotate(-90deg)`;
        else
            dot.style.transform = `translate(${x}px, ${y}px)`;

        dot.classList.remove("active", "near-active");

        // make dots visible 
        switch (angle) {
            case 0:
            case 24:
            case 48:
            case 312:
            case 336:
                dot.classList.add('visible');
            break;
            default:
                dot.classList.remove('visible');
        }

        if (angle === 0) {
            dot.classList.add("active");
            const id = dot.dataset.id;
            dot.setAttribute('data-angle',angle);
            thumbnail.src = `./asset/img/vid-banner${id}.png`;
            thumbnail.dataset.video = `https://www.youtube.com/embed/5rZSGSViPso?si=sZO54Wh6lE14nPI4`; // Update video source
            if (window.innerWidth <= 540) {
                dot.style.transform = `translate(${x}px, ${y}px) scale(1.6) rotate(-90deg)`;
            } else {
                dot.style.transform = `translate(${x}px, ${y}px) scale(1.6)`;
            }
        } else if (angle === 24 || angle === 336) {
            dot.classList.add("near-active");
            if (window.innerWidth <= 540)
                dot.style.transform = `translate(${x}px, ${y}px) scale(1.3) rotate(-90deg)`;
            else
                dot.style.transform = `translate(${x}px, ${y}px) scale(1.2)`;
        }
    });
}

thumbnail.addEventListener("click", () => {
    const videoSrc = thumbnail.dataset.video;
    vidFrame.innerHTML = `
    `;


    // Call the function when needed (e.g., button click)
    const iframe = vidFrame.querySelector('iframe');
    iframe.setAttribute('src', iframe.getAttribute('src') + '&autoplay=1');

});

function rotateDots(direction) {
    currentIndex = (currentIndex - direction + totalDots) % totalDots;
    updateDots();
}

window.addEventListener("resize", updateDots);
updateDots();


(function (){
    // popup.style.display = 'flex';
})();

      

        // Close popup when close button is clicked
        closeButton.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        // Close popup when clicking outside the iframe
        popup.addEventListener('click', (e) => {
            if (!e.target.closest('.popup-content')) {
                popup.style.display = 'none';
            }
        });