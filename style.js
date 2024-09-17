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
const directTra=document.getElementById('tra');
directTra.addEventListener('click',function(){
    window.location.href="shopping.html";
});
const loginpg=document.getElementById('login');
loginpg.addEventListener('click',function(){
    window.location.href="loginpg.html";
});
const stories=document.getElementById('story');
stories.addEventListener('click',function(){
    window.location.href="stories.html";
});
