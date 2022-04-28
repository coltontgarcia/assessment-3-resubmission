console.log("Jeddy was here. (not really)");


let BMW = [ "Bimmer file", "BMW coop", "Bimmer forums" ];

let randButton = document.getElementById('randButton');


const randomBMW = (event) => {
    event.preventDefault();
    
    alert(BMWList[Math.floor(Math.random()*BMWList.length)]);
}

randButton.addEventListener('click', randomBMW);