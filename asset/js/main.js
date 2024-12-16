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
        
        if(i <= itemCount/2)
        {
            firstHtml += `<div class="scrolling-div"><img src="./asset/img/recruiters/image_${i}.webp" class="recruiters-img" alt=""></div>`;
        }

        else
        {
            secondHtml += `<div class="scrolling-div"><img src="./asset/img/recruiters/image_${i}.webp" class="recruiters-img" alt=""></div>`;
        }
    }

    return {
        firstHtml : firstHtml,
        secondHtml : secondHtml
    }
}

function addRecruiters() {

    const itemCount = 24;
    const scrollingDiv = document.querySelector('.scrolling-divs');
    const scrollingDiv2 = document.querySelector('.scrolling-divs.slower');

    const {firstHtml, secondHtml} = createRecruiterDOM(itemCount);

    if(scrollingDiv )
    {
        scrollingDiv.innerHTML = firstHtml + firstHtml + firstHtml; 
    }
    if(scrollingDiv2)
    {
        scrollingDiv2.innerHTML = secondHtml + secondHtml + secondHtml;
    }
}

addRecruiters();


