let temperatureField=document.querySelector(".weather1");
let locationField=document.querySelector(".weather p");
let dateField=document.querySelector(".weather2 span");
let emojiField=document.querySelector(".weather3 img");
let conditionField=document.querySelector(".weather3 span");
let searchField=document.querySelector(".inputField")
let form=document.querySelector("form")

let target="mumbai";
const fetchData=async(target)=>{
    const url=`http://api.weatherapi.com/v1/current.json?key=dc115fe2f8234dc7b0444654232503&q=${target}`;
    const response=await fetch(url);
    const data=await response.json();
    
    const {
        current:{temp_c,condition:{
            icon,text
        }},
        location:{name,localtime},
        


    } =data;
    updateDom(temp_c,name,localtime,icon,text)

}

function updateDom(temperature,city,time,emoji,text1){
    temperatureField.textContent=temperature +"°";
    locationField.textContent=city;
    const exactTime=time.split(" ")[1];
    const exactDate=time.split(" ")[0];
    dateField.textContent=`${exactDate}-${fullDayName(new Date(exactDate).getDay())}-${exactTime}`
     emojiField.src=emoji;
    conditionField.textContent=text1;

}


fetchData(target);
function fullDayName(num){
    switch (num) {
        case 0:
        return "SunDay";
        case 1:
        return "MonDay" 
        case 2:
        return "TuesDay";
        case 3:
        return "WednesDay" 
        case 4:
        return "ThursDay";
        case 5:
        return "Friday";
        case 6:
        return "SaturDay" ; 

        default:
         return "IDontknow";
    }
}
const searchs = (e) =>{
    e.preventDefault();
    target=searchField.value;
    fetchData(target);
    
    
}
form.addEventListener('submit',searchs)