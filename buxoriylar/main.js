var typed = new Typed(".typing", {
    strings: ["Buxoriylar", "maktabi"],
    typeSpeed: 140,
    backSpeed: 50,
    loop: true
});
document.querySelector("#ishtirok").addEventListener("click", function(){
    document.querySelector(".tilxat").style.display = "block"
    document.querySelector("#close1").style.display = "block"
})
document.querySelector("#close1").addEventListener("click", function(){
    document.querySelector(".tilxat").style.display = "none"
    document.querySelector("#close1").style.display = "none"
})