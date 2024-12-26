// change navbar on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


// Show/hide faq questions 

// Select all FAQ elements
const faqs = document.querySelectorAll('.faq');

// Loop through each FAQ to add an event listener
faqs.forEach(faq => {
    const icon = faq.querySelector('.faq__icon');
    
    // Add click event to each icon
    icon.addEventListener('click', () => {
        faq.classList.toggle('active'); // Toggle the 'active' class


        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'fa-solid fa-plus'){
            icon.className =  'fa-solid fa-minus';   
        }else{
            icon.className = 'fa-solid fa-plus';
        }
    })
});


//show/hide navbar

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close navbar

const closeNav = () =>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)
// JavaScript for mobile menu toggle
const openMenuButton = document.getElementById('open-menu-btn');
const closeMenuButton = document.getElementById('close-menu-btn');
const nav_Menu = document.querySelector('.nav_menu');

openMenuButton.addEventListener('click', () => {
    navMenu.classList.add('active');
    openMenuButton.style.display = 'none';
    closeMenuButton.style.display = 'block';
});

closeMenuButton.addEventListener('click', () => {
    navMenu.classList.remove('active');
    openMenuButton.style.display = 'block';
    closeMenuButton.style.display = 'none';
});

const menuButton = document.querySelector('nav button');
const navMenu = document.querySelector('.nav_menu');

menuButton.addEventListener('click', () => {
    nav_Menu.classList.toggle('active');
});



