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



let popular_places_to_visit=[{
    id:1,
    image:"https://www.tourmyindia.com/packages-tour-india/image/rajasthan-tour-packages.webp",
    state:"Rajasthan",
    rating:"3.0",
    day:"10 Nights - 11 Days"
}
,
{
    id:2,
    image:"https://www.tourmyindia.com/packages-tour-india/image/himachal-hill-stations.webp",
    state:"Himachal",
    rating:"4.0",
    day:"4 Nights-5 Days"
},
{
    id:3,
    image:"https://www.tourmyindia.com/packages-tour-india/image/kerala-travel-packages.webp",
    state:"Kerala",
    rating:"5.0",
    day:"7 Nights-8 Days"
},
{
    id:4,
    image:"https://www.tourmyindia.com/packages-tour-india/image/jammu-kashmir-packages.webp",
    state:"Kashmir",
    rating:"4.0",
    day:"5 Nights-6 Days"
},
{
    id:5,
    image:"https://www.tourmyindia.com/packages-tour-india/image/sikkim-tour-packages.webp",
    state:"Sikkim",
    rating:"4.0",
    day:"3 Nights-4 Days"
},
{
    id:6,
    image:"https://www.tourmyindia.com/packages-tour-india/image/uttarakhand-packages.webp",
    state:"Uttarakhand",
    rating:"3.0",
    day:"3 Nights-4 Days"
},
{
    id:7,
    image:"https://www.tourmyindia.com/packages-tour-india/image/gujarat-tours.webp",
    state:"Gujarat",
    rating:"3.0",
    day:"8 Nights-9 Days"
},
{
    id:8,
    image:"https://www.tourmyindia.com/packages-tour-india/image/tamilnadu-tours.webp",
    state:"Tamil Nadu",
    rating:"4.0",
    day:"4 Nights-5 Days"
},
{
    id:9,
    image:"https://www.tourmyindia.com/imgnew/ladakh0.webp",
    state:"Ladakh",
    rating:"3.0",
    day:"7 Nights-8 Days"
}, 
{
    id:10,
    image:"https://www.tourmyindia.com/imgnew/arunachal.webp",
    state:"Arunachal",
    rating:"4.0",
    day:"5 Nights-6 Days"
}                                                         
                             
}
]

let popular=document.getElementById("popular");

displayPopularPlaces(popular_places_to_visit);
function displayPopularPlaces(data){
console.log(data);
    for(let i=0;i<8;i++){
        let card=document.createElement("div");
        let image=document.createElement("img");
        let state=document.createElement("h3");
        let card2=document.createElement("div");
        let card3=document.createElement("div");
        let rating=document.createElement("h4");
        let stars=document.createElement("div");
        let days=document.createElement("p");
        let card4=document.createElement("div");

        let enquiry=document.createElement("button");

        image.src=data[i].image;
        state.innerText=data[i].state;
        rating.innerText=data[i].rating;
        days.innerText=data[i].day;
        for(let j=1;j<=5;j++){
            let span=document.createElement("span");
            if(j<=Number(data[i].rating)){
                span.setAttribute("class","fa fa-star checked");
            }
            else{
                span.setAttribute("class","fa fa-star");
            }
            stars.append(span);
        }
        
        enquiry.innerText="Send Enquiry";
        card2.append(rating,stars);
        card3.append(days,card2);
        card4.append(state);
        card2.id="rating";
        card3.id="day_rating";
        card.append(image,card3,card4,enquiry);
        popular.append(card);
    }

}


let seeMore=document.getElementById("seeMore");

seeMore.addEventListener("click",function(){

    window.open("./Popular_Places.html");
})
        card.append(image,card3,card4);
        popular.append(card);
    }

}
