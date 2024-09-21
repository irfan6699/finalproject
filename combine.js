// Slider functionality
const slider = document.querySelector('.slider');
let count1 = 0;

function changeImage() {
    const imagecon = ["slider1.jpg", "slider2.jpg","story1.jpg"];
    count1 = (count1 + 1) % imagecon.length;
    slider.style.backgroundImage = `url('${imagecon[count1]}')`;
}
fetch('navbar.html')
.then(response=>response.text())
.then(data=>{
    document.querySelector(`.nav`).innerHTML=data;
    runafterattach();
})

setInterval(changeImage, 3000);
function runafterattach(){
// Change heart icon functionality
const changes = document.querySelectorAll('.change');
changes.forEach(change => {
    change.addEventListener('click', () => {
        change.src = change.src.includes('black.png') ? 'Heart.png' : 'black.png';
    });
});
// Change heart icon functionality

// Redirect with zoom effect
const redirectWithZoom = (targetUrl) => {
    document.body.classList.add('zoom-out-active');
    setTimeout(() => {
        window.location.href = targetUrl;
    }, 500); // Match this duration with the CSS transition duration
};

// Navbar redirection
const directTra = document.getElementById('tra');
if (directTra) {
    directTra.addEventListener('click', () => redirectWithZoom("shopping.html"));
}
const story = document.querySelector('.more');
if (story) {
    story.addEventListener('click', () => redirectWithZoom("stories.html"));
}
let home = document.querySelector('.logo');
if (home) {
    home.addEventListener("click", () => {
        window.location.href = "index.html";
    });
}
const loginpg = document.getElementById('login');
if (loginpg) {
    loginpg.addEventListener('click', () => redirectWithZoom("loginpg.html"));
}

const stories = document.getElementById('story');
if (stories) {
    stories.addEventListener('click', () => redirectWithZoom("stories.html"));
}
}

// stories video function
const storyelement=document.querySelectorAll(`.stories1`);
const videocontainer=document.querySelector(`.video-frame-container`);
const videoframe=document.querySelector(`.videoframe`);
const videoSource = document.getElementById('video-source');
const closeBtn = document.getElementById('close-btn');

storyelement.forEach(story=>{
    story.addEventListener('click',()=>{
    const videosrc=story.getAttribute('data-video');
    videoSource.src=videosrc;
    videocontainer.classList.remove('hidden');
    })
})
closeBtn.addEventListener('click', () => {
    videocontainer.classList.add('hidden'); // Hide the video container
    const videoElement = document.getElementById('story-video'); // Reference the video element
    videoElement.pause(); // Pause the video
    videoSource.src = ''; // Clear the video source
});

const onam = document.querySelector('.row11');
if (onam) {
    onam.addEventListener('click', () => redirectWithZoom("onam1.html"));
}

const diwali = document.querySelector('.class31');
if (diwali) {
    diwali.addEventListener('click', () => redirectWithZoom("diwali1.html"));
}


