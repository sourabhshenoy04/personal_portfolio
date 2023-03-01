/*Show Navigation bar*/
const navMenu = document.getElementById('sidebar'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')
/* Validate If Constant Exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-sidebar')
    })
}
/*Navbar hidden*/
/* Validate If Constant Exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-sidebar')
    })
}
/* Skills section */
const tabs = document.querySelectorAll('[data-target]'),
tabContent = document.querySelectorAll('[data-content]')
tabs.forEach(tab => {
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)
        tabContent.forEach(tabContents => {
            tabContents.classList.remove('skills_active')
        })
        target.classList.add('skills_active')
        tabs.forEach(tab => {
            tab.classList.remove('skills_active')
        })
        tab.classList.add('skills_active')
    })
})
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', navHighlighter);
function navHighlighter(){
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId =  current.getAttribute('id'); 
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else
        {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

