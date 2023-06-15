let travelling_Images=["https://wallpaperset.com/w/full/8/1/7/343024.jpg","https://wallpapercave.com/wp/wp2587569.jpg","https://cdn.wallpapersafari.com/13/86/GaUv3x.jpg"];
let travelling_Images1=["https://cdn.wallpapersafari.com/56/27/MXkow9.jpg","https://i.pinimg.com/originals/86/54/6b/86546b637a863933b67769c2403fc757.jpg","https://cdn.wallpapersafari.com/12/26/aeZoiF.jpg"];
let header=document.getElementById("Header");
let k=0;
let j=0;
let mediaquery=window.matchMedia(`(min-width:400px)`);
let id;
let id1;

window.addEventListener('resize', checkMediaQuery);

function checkMediaQuery(){
    clearInterval(id);
    clearInterval(id1);

if(window.innerWidth>800){
header.style.height="500px";
id=setInterval(function(){
    if(k>=travelling_Images.length){
        k=0;
    }
    header.style.backgroundImage=`url(${travelling_Images[k]})`;
    k++;
    
    },2000);
}

if(window.innerWidth<800){
    // header.style.backgroundImage=`url("https://i.pinimg.com/originals/86/54/6b/86546b637a863933b67769c2403fc757.jpg")`;
    header.style.height="600px";
    console.log("hi");  
    id1=setInterval(function(){
        if(j>=travelling_Images1.length){
            j=0;
        }
        header.style.backgroundImage=`url(${travelling_Images1[j]})`;
        j++;
        
        },2000);
    }
}
