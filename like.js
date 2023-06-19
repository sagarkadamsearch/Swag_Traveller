
let table=document.getElementById("table");
let lastpart=document.getElementById("last");
let totalCount=document.getElementById("totalCount");

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


let like=localStorage.getItem("heart");
if(like==null || like==[]){
    like=[];
}
else{
    like=JSON.parse(like);
}

console.log(like);

display(like);

function display(data){
table.innerHTML="";
totalCount.innerText=0;

console.log(like.length);
data.forEach((e)=>{

  if(e.loggedIn==loggedIn){
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

               totalCount.innerText=Number(totalCount.innerText)+1;
                heart.style.color="red";
                
        

        enquiry.innerText="Send Enquiry";
        card2.append(rating,stars);
        card3.append(days,card2);
        card4.append(enquiry,heart);
        card2.id="rating";
        card3.id="day_rating";
        card.append(image,card3,state,card4);
        table.append(card);

        heart.addEventListener("click",()=>{
            if(localStorage.getItem("loggedIn")!=null){
                heart.style.color="black";
                like = like.filter((e1)=>{
                    if(e1.id==e.id && e1.loggedIn==loggedIn){
                
                    }
                    else{
                        return e1;
                    }
                })
  
                localStorage.setItem("heart",JSON.stringify(like));
                display(like);
            
              }
              else{
                openForm();
               }

        })
        enquiry.addEventListener("click",()=>{
            enquiry_openForm();
        })
 } })

 if(totalCount.innerText==0){
    lastpart.innerText=`Yet,you did'nt liked any package.`;
}

}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

// Login form data save code
let userId=document.getElementById("id");
let password=document.getElementById("psw");
let login=document.getElementById("loginForm");
let logData=localStorage.getItem("logData");
let idline=document.getElementById("idline");
let passline=document.getElementById("passline");
let newAccount=document.querySelector(".newAccount");

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
                }
                
            }
        }
    
        if(idFlag==false){
          idline.innerText="You have entered wrong user-id";
        }
        if(passFlag==false){
            passline.innerText="You have entered wrong password";
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
