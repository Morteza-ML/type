const sentence="Recognising Organisations can use the results of individuals or groups and receive alerts when new results are shared. Let's take a quick look inside the Service and see how easy it is to use.";
const list =["'", "?", "/", ",", ".", ";", ":", " ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var target2;
var target1;
var shmar= 0;
var flag=true;
var date1;
var word= 0;
var worng= 0;
var clear=false;
var tam=false;

const container= document.createElement("div");
container.classList.add("container");
document.body.append(container);

for ( i=0; i<sentence.length; i++){
    const para= document.createElement("span");
    para.textContent= sentence[i];
    para.classList.add("letter");
    container.append(para);   
}

document.addEventListener( 'keydown' ,()=>{ if (flag){ check(event) }});
document.querySelector(".fotter").addEventListener('click',refresh);

function check(event){
    
    if ( shmar === 0 ){ date1 = Date.now(); s()};
    if ( list.includes((event.key).toLowerCase()) ){
        if(sentence[shmar]===" "){word++};
        target2= document.querySelectorAll(".letter")[shmar];
        if (event.key===sentence[shmar]){
            target2.style.color="green";
            target2.style.backgroundColor="white";
        }
        else{
            worng++;
            target2.style.color="red";
            target2.style.backgroundColor="rgb(255, 206, 206)"
        }

        if ( shmar+1 === (sentence.length )  ) {setTimeout(()=>{atmam()},5);clear=true};
        if ( shmar < (sentence.length ) -1 ) {shmar++;};
        
        target1= document.querySelectorAll(".letter")[shmar];
        target1.style.border="1px solid";
        target2.style.border="0px";
    }
    else if (event.key==="Backspace"){
        target2=document.querySelectorAll(".letter")[shmar];
        if ( shmar > 0 ){ shmar--};
        target1= document.querySelectorAll(".letter")[shmar];
        if ( target1.style.backgroundColor === "rgb(255, 206, 206)"){worng--;}
        target1.style.border="1px solid";
        target2.style.border="0px";
        target1.style.color="black";
        target1.style.backgroundColor="white";
    }
}

function s(){
const spead=setInterval(()=>{
    const timeDelay=(Date.now()-date1)/60000 ;
    const percentError=Math.floor((worng/shmar)*100);
    const speadWord=Math.floor(word/timeDelay);
    const speadCharacters= Math.floor(shmar/timeDelay);
    if ( shmar!== 0){
        document.querySelector("#Label1").innerHTML=`percent error ${percentError} % <p>nomber worng : ${worng}</p>`;
        document.querySelector("#Label2").textContent=`spead word ${speadWord}`;
        document.querySelector("#Label3").textContent=`spead characters ${speadCharacters}`; 
    }
    if (clear){clearInterval(spead);clear=false}
},100)
}

function atmam(){
    flag= false;
    target1=undefined;
    target2=undefined;
    shmar=0;
    word=0;
    worng=0;
    tam=true;
} 
function refresh(){
    if (!tam){target1.style.border="0px";clear=true}
    else{tam=false};
    target1=undefined;
    target2=undefined;
    shmar=0;
    word=0
    worng=0
    flag=true;
    for (i=0;i<sentence.length;i++){
        document.querySelectorAll('.letter')[i].style.color='black';
        document.querySelectorAll('.letter')[i].style.backgroundColor='white';
    }
    document.querySelectorAll(".letter")[0].style.border="1px solid black";
    document.querySelector("#Label1").textContent="percent error";
    document.querySelector("#Label2").textContent="spead word";
    document.querySelector("#Label3").textContent="spead characters";
}
