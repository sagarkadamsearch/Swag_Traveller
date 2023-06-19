let signUpBtn=document.getElementById("createBtn");
let headingACCheck=document.getElementById("accountCheck");
let inputId=document.getElementById("id");
let inputPass=document.getElementById("pass");
let logData=localStorage.getItem("logData");
let closeBtn=document.getElementById("closeBtn");

if(logData==null){
    logData=[];
}
else{
    logData=JSON.parse(logData);
}

signUpBtn.addEventListener("click",(e)=>{
    e.preventDefault();
  let acCheckflag=false;
    for(let i=0;i<logData.length;i++){

        if(logData[i].id==inputId.value){
            headingACCheck.style.color="red";
            headingACCheck.innerText="Sorry, But this 'id' already present in our system.";
            inputId.value="";
            inputPass.value="";
            acCheckflag=true;
            break;
        }
    }

    data={
        "id":inputId.value,
        "password":inputPass.value
    }

    if(acCheckflag==false){
       logData.push(data);
       localStorage.setItem("logData",JSON.stringify(logData));
       headingACCheck.style.color="green";
       headingACCheck.innerText="Congrats,You have successfully created your account on our website.";
       inputId.value="";
       inputPass.value="";
    }
   
})

closeBtn.addEventListener("click",()=>{

    window.open("./home.html","_self");

})