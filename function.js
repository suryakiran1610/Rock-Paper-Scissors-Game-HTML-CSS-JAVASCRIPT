let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg")
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const computerchoice=()=>{
    const options=["rock","paper","scissors"];
    const randid=Math.floor(Math.random()*3);
    return options[randid];
};

const drawgame=()=>{
    msg.innerText="GAME WAS DRAW";
};

const showwinner=(userwin)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText="YOU WIN";
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText="YOU LOSE";
        msg.style.backgroundColor="red";
    }
};



const playgame=(userchoice)=>{
    console.log("userchoice=",userchoice);
    const compchoice =computerchoice();
    console.log("computer choice=",compchoice);

    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"? false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissors"? false:true;
        }
        else{
            userwin=compchoice==="rock"? false:true;
        }
        showwinner(userwin);
    }    
};    


choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    }); 
});