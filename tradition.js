const cartpg=document.querySelector(`.cart`);
cartpg.addEventListener("click",function(){
    cartpage(count);
});
function cartpage(count){
    if(count===0){
        alert("there is nothing in the cart");
    }
    else{
        window.location.href="cart.html";
    }
};
const cart = document.querySelectorAll('.addtocart');  // Select all elements with class 'add'
const add = document.querySelector('.add');  // Assuming this is an input to show count
let count=0

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
document.querySelectorAll(`.cart`).forEach(button=>{
    button.addEventListener("click",function(){
        let item=this.closest('.container');
        let itemHTML=item.outerHTML;
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(itemHTML);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Update the cart count (assuming you have a cart count element)
       
    });
});
   
function copyDiv() {
    // Select the container to copy
    var divToCopy = document.querySelector('.container').outerHTML;

    // Store the div in localStorage
    localStorage.setItem('copiedDiv', divToCopy);

    alert("Item added!");
}
