

cart.forEach(button => {
    button.addEventListener("click", () => {
        if(button.textContent=="ADD"){
        button.textContent = "Added";  // Change the button text to 'Added'
        count++;
        add.innerHTML= count;  // Update the input with the new count value
        }
        else{
            button.textContent="ADD";
            if(count>=0){
                count--;
            add.innerHTML=count;
            }
        }
    });
});



const home=document.querySelector(`.home`);
home.addEventListener("click",function(){
    window.location.href="index.html";
});
// Traditional page script
