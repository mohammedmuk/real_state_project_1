

// About Us section transition effect


let BurgerMenu = document.querySelector(".burger"),
    HeaderList = document.querySelector(".header-list");


BurgerMenu.addEventListener("click", () => {
       HeaderList.classList.toggle("active");
})

let AboutUsTxtBox = document.querySelector(".About-Us .text-box"),
    ServicesTxtBox = document.querySelector(".Our-Services .text-box"),
    VisionTxtBox = document.querySelector(".Our-Vision .text-box");



window.onscroll = () => {
       console.log(window.scrollY);
       
       if (window.scrollY > 540){
        AboutUsTxtBox.style.opacity = 1;
        AboutUsTxtBox.style.transform = "translateY(0)";
       }

       if (window.scrollY > 1190){
              ServicesTxtBox.style.opacity = 1;
              ServicesTxtBox.style.transform = "translateX(0)";
       }

       if (window.scrollY > 1790){
              VisionTxtBox.style.opacity = 1;
              VisionTxtBox.style.transform = "translateX(0)";
       }
}

