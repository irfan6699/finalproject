const slider = document.querySelector('.slider');

let count1 = 0;
function changeImage() {
    const imagecon = ["slider1.jpg", "slider2.jpg"];
    count1 = (count1 + 1) % imagecon.length;
    slider.style.backgroundImage = `url('${imagecon[count1]}')`; // Use template literals correctly
}

setInterval(changeImage,3000);

const changes = document.querySelectorAll('.change');
changes.forEach(change => {
    change.addEventListener('click', () => {
        if (change.src.includes('black.png')) {
            change.src = 'Heart.png';
        } else {
            change.src = 'black.png';
        }
    });
});


const redirectWithZoom = (targetUrl) => {
    document.body.classList.add('zoom-out-active');
    setTimeout(() => {
        window.location.href = targetUrl;
    }, 500); // Match this duration with the CSS transition duration
};

const directTra = document.getElementById('tra');
directTra.addEventListener('click', function() {
    redirectWithZoom("shopping.html");
});

const loginpg = document.getElementById('login');
loginpg.addEventListener('click', function() {
    redirectWithZoom("loginpg.html");
});

const stories = document.getElementById('story');
stories.addEventListener('click', function() {
    redirectWithZoom("stories.html");
});

const onam = document.querySelector('.row11');
if (onam) {
    onam.addEventListener('click', function() {
        redirectWithZoom("onam1.html");
    });
}

const diwali = document.querySelector('.class31');
if (diwali) {
    diwali.addEventListener('click', function() {
        redirectWithZoom("diwali1.html");
    });
}



