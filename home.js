const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

/*=====clickable logo go to home page==============*/
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for logo click
    var logoLink = document.getElementById('logo-link');
    logoLink.addEventListener('click', function () {
        // Redirect to the home page (adjust the URL as needed)
        window.location.href = 'home.html';
    });
});

//show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

//close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display='none';
})

//change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

})

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) =>{
    panel.addEventListener("click", ()=>{
        removeActiveClasses();
        panel.classList.add("active");

    });
});
const removeActiveClasses =() => {
    panels.forEach((panel)=> {
       panel.classList.remove("active") ;

    });
};

