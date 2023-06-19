let travelling_Images=["https://wallpaperset.com/w/full/8/1/7/343024.jpg","https://wallpapercave.com/wp/wp2587569.jpg","https://cdn.wallpapersafari.com/13/86/GaUv3x.jpg"];
let travelling_Images1=["https://cdn.wallpapersafari.com/56/27/MXkow9.jpg","https://i.pinimg.com/originals/86/54/6b/86546b637a863933b67769c2403fc757.jpg","https://cdn.wallpapersafari.com/12/26/aeZoiF.jpg"];


let header=document.getElementById("Header");
let k=0;
let j=0;
let mediaquery=window.matchMedia(`(min-width:400px)`);
let id;
let id1;

window.addEventListener('resize', checkMediaQuery);
window.addEventListener("load",checkMediaQuery);

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

let logOutBtn=document.getElementById("logOutBtn");
let logInBtn=document.getElementById("logInBtn");
let loggedIn=localStorage.getItem("loggedIn");

if(loggedIn==null){
    loggedIn=null;
    logOutBtn.style.display="none";
}
else{
    loggedIn=JSON.parse(loggedIn);
    logInBtn.style.display="none";
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
                             
]

let popular=document.getElementById("popular");
let like=localStorage.getItem("heart");
if(like==null){
    like=[];
}
else{
    like=JSON.parse(like);
}

displayPopularPlaces(popular_places_to_visit);
function displayPopularPlaces(data){

   for(let i=0;i<8;i++){
    
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
            heart.innerText="♡";   
            like.forEach((e2)=>{
                if(e2.id==data[i].id && e2.loggedIn==loggedIn){
                    heart.style.color="red";
                    
                }
            })
            enquiry.innerText="Send Enquiry";
            card2.append(rating,stars);
            card3.append(days,card2);
            card4.append(enquiry,heart);
            card2.id="rating";
            card3.id="day_rating";
            card.append(image,card3,state,card4);
            popular.append(card);
    
            heart.addEventListener("click",()=>{
                if(localStorage.getItem("loggedIn")!=null){
                if(heart.style.color!="red"){
                heart.style.color="red";
                data[i].loggedIn=JSON.parse(localStorage.getItem("loggedIn"));
                like.push(data[i]);
                localStorage.setItem("heart",JSON.stringify(like));
                }
                else{
                    heart.style.color="black";
                    like = like.filter((e1)=>{
                        if(e1.id==data[i].id && e1.loggedIn==loggedIn){
                   
                        }
                        else{
                            return e1;
                        }
                    })
      
                    localStorage.setItem("heart",JSON.stringify(like));
                }
                  }
                  else{
                    openForm();
                   }

            })

            enquiry.addEventListener("click",()=>{
                enquiry_openForm();
            })
                }
    
    }


let navHeart=document.getElementById("navHeart");

navHeart.addEventListener("click",()=>{

    window.open("./like.html","_self");
})


let seeMore=document.getElementById("seeMore");

seeMore.addEventListener("click",function(){

    window.open("./Popular_Places.html","_self");
})



// Login form data save code
let userId=document.getElementById("id");
let password=document.getElementById("psw");
let login=document.getElementById("loginForm");
let logData=localStorage.getItem("logData");
let idline=document.getElementById("idline");
let passline=document.getElementById("passline");
let newAccount=document.querySelector(".newAccount");

function openForm() {
    document.getElementById("myForm").style.display = "block";
    passline.innerText="";
    idline.innerText="";
    userId.value="";
    password.value="";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


if(logData==null){
    logData=[];
}
else{
    logData=JSON.parse(logData);
}

login.addEventListener("submit",(e)=>{
e.preventDefault();
 let passFlag=false;
 let idFlag=false;
    for(let i=0;i<logData.length;i++){

        if(userId.value==logData[i].id){
              idFlag=true;
            if(password.value==logData[i].password){
                console.log("sucess");
                passFlag=true;
                idline.innerText="";
                passline.innerText="";
            }
            
        }
    }

    if(idFlag==false){
      idline.innerText="You have entered wrong user-id";
    }
    else{
        idline.innerText="";
    }
    if(passFlag==false){
        passline.innerText="You have entered wrong password";
    }
    else{
        passline.innerText="";
    }
   if(idFlag==true && passFlag==true){
    localStorage.setItem("loggedIn",userId.value);
    logInBtn.style.display="none";
    location.reload();
    closeForm();
   }
})

newAccount.addEventListener("click",()=>{

window.open("./signUpPage.html","_self");
})




logOutBtn.addEventListener("click",()=>{
    localStorage.removeItem("loggedIn");
    logInBtn.style.display="block";
    logOutBtn.style.display="none";
    location.reload();
})


function enquiry_openForm() {
    document.getElementById("my_enquiry-form").style.display = "block";
  }
  
  function enquiry_closeForm() {
    document.getElementById("my_enquiry-form").style.display = "none";
  }

  
