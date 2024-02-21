window.addEventListener('DOMContentLoaded', function(){
    const menuBtn = this.document.querySelector(".menu-btn")
    const navigation = this.document.querySelector(".navigation")
    const navigationItems = document.querySelectorAll(".navigation a")

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active")
        navigation.classList.toggle("active")
    })


    navigationItems.forEach(navItem => {
        navItem.addEventListener("click", () =>{
            menuBtn.classList.remove("active")
            navigation.classList.remove("active")
        })
    })


    // window.addEventListener("scroll", () =>{
    //     let reveals = document.querySelector(".reveal")

    //     let windowHeight = this.window.innerHeight;
    //     let revealTop = reveals[i].getBoundingClients().top;
    //     let revealPoint = 50;

    //     if(revealTop < windowHeight - revealPoint){
    //         reveal[i].classList.add("active")
    //     }
    // })
})
// var typed = new Typed(".typing", {
//     strings: ["Buxoriylar", "maktabi"],
//     typeSpeed: 140,
//     backSpeed: 50,
//     loop: true
// });
let myButton = document.querySelector("#myBtn");
window.onscroll = function(){
    scrollTop()
}
// 1 funksiya
function scrollTop(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        myButton.style.display = "block"
    } else{
        myButton.style.display = "none"
    }
}
// 2 funksiya
function goup(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// let ism = prompt("Iltimos ismingizni kiriting")

// let firstLetter = ism.charAt().toUpperCase()
// let davomi = ism.slice(1).toLowerCase()
// let result = firstLetter + davomi
// if(ism == "madina"){
//     alert(`nma gap Madina, saytga ozro qoshimchalar qo'shdim ko'rib turganizday,  etgancha dizaynga yordamlashganiz uchun raxmat kotta`)
// } else if (ism != "madina"){
//     alert(`salom ${result}, bu mening yangi portfolio rezume saytim va umid qilamanki bu sizga yoqadi...🙂`)
// }









