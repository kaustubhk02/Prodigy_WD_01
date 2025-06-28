// // Apply hover effect to select box
// const mode = document.getElementById("mode");
// if (mode) addHoverEffect(mode);

// // Scroll event to change navbar color
// window.addEventListener("scroll", () => {
//     const navbar = document.getElementById("navbar");
//     if (window.scrollY > 50) {
//         navbar.style.backgroundColor = "#118AB2";
//         navbar.style.color = "#fff";
//     } else {
//         navbar.style.backgroundColor = "#073B4C";
//         navbar.style.color = "aliceblue";
//     }
// });

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

