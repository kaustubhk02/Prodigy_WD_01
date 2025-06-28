let hoverEffect = (obj)=>{
    obj.addEventListener("mouseenter", ()=>{
        obj.style.cursor = "pointer";
        obj.style.padding = "0.7rem";
        obj.style.border = "solid whitesmoke";
    })

    obj.addEventListener("mouseleave", ()=>{
        obj.style.padding = "";
        obj.style.border = "";
    })
}

for(let i=2; i<=7; i++){
    let box = document.querySelector(`#box${i}`);
    hoverEffect(box);
}
const mode = document.querySelector("#mode");
hoverEffect(mode);

const navbar = document.querySelector("#navbar");
const body = document.querySelector("body");

window.addEventListener("scroll", (event) => { 
    if(window.scrollY > 20){
        navbar.style.backgroundColor = "black";
        mode.style.backgroundColor = "black";
    }
    else{
        navbar.style.backgroundColor = "";
        mode.style.backgroundColor = "";
    }
});

// navbar.onscroll = ()=>{
//     navbar.style.backgroundColor = "red";
//     mode.style.backgroundColor = "red";
// }
