let table = document.getElementById("table");
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
                             
]
display(popular_places_to_visit);
function display(data){

data.forEach((e)=>{

    let card=document.createElement("div");
        let image=document.createElement("img");
        let state=document.createElement("h3");
        let card2=document.createElement("div");
        let card3=document.createElement("div");
        let rating=document.createElement("h4");
        let stars=document.createElement("div");
        let days=document.createElement("p");
        let enquiry=document.createElement("button");
        let heart=document.createElement("h1");
        let card4=document.createElement("div");

        image.src=e.image;
        state.innerText=e.state;
        rating.innerText=e.rating;
        days.innerText=e.day;
        for(let j=1;j<=5;j++){
            let span=document.createElement("span");
            if(j<=Number(e.rating)){
                span.setAttribute("class","fa fa-star checked");
            }
            else{
                span.setAttribute("class","fa fa-star");
            }
            stars.append(span);
        }
        heart.innerText="♡";   
        enquiry.innerText="Send Enquiry";
        card2.append(rating,stars);
        card3.append(days,card2);
        card4.append(enquiry,heart);
        card2.id="rating";
        card3.id="day_rating";
        card.append(image,card3,state,enquiry,card4);
        table.append(card);


})

}