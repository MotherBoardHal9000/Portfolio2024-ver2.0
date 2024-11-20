let tyPographH2 = document.querySelector('.sectionIContents h2');
let sPonge = document.getElementById('sPonge');
let aBstract = document.getElementById('aBstract');
let Brick = document.getElementById('brick');
let Fluid = document.getElementById('fLuid');
let piPe = document.getElementById("piPe");



window.addEventListener("scroll",function(addEventListener){
    let value = window.scrollY;
    piPe.style.transform = `translateY(${value * 0.85}px)`
    aBstract.style.transform = `translateY(${value * 0.45}px)`
    sPonge.style.transform = `translateY(${value * 0.25}px)`
    Brick.style.transform = `translateY(${value * 0.15}px)`
    Fluid.style.transform = `translateY(${value * 0.25}px)`
    this.window.requestAnimationFrame
    console.log("scroll");
    
})

