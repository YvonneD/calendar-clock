setInterval((setClock),1000);

const hourHand=document.querySelector('.hour')
const minuteHand=document.querySelector('.minute')
const secondHand=document.querySelector('.second')
const addButton=document.getElementById('setting')

function setClock(){
    const currentTime=new Date()
    const secondRatio=currentTime.getSeconds()/60
    const minuteRatio=(secondRatio+currentTime.getMinutes())/60
    const hourRatio=(minuteRatio+currentTime.getHours())/24  
    setRotation(hourHand,hourRatio)
    setRotation(minuteHand,minuteRatio)
    setRotation(secondHand,secondRatio)
}

function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360)
}

// function addCalendar(){
//     const card=document.createElement('div')
//     card.classList.add('card')
//     //time
//     const startTime=document.createElement('')
// }

// addButton.addEventListener('click',addCalendar())
setClock()