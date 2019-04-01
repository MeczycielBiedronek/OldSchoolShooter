window.addEventListener("load", function(event) { // Waits for DOM elements to load
// Selects all nodes of class enemy_window
const enemy = document.querySelectorAll('.enemy_window');
const p = document.querySelector('p');
const gg = document.querySelector('.gameOver');
const restart = document.querySelector('.restart');
const cursor = document.querySelector('.curs');


// AIM pointer replacing cursor
window.addEventListener('mousemove', (event)=>{
    let x = event.clientX;
    let y = event.clientY; 
    cursor.style.left = x-50 +'px';
    cursor.style.top = y-50 +'px';
})

let points = 0; //counts points
// Shows Enemy in RANDOM location
    const showEnemy = () => {
        let j = Math.floor(Math.random()*5);      
            enemy[j].classList.add('turnRed');
            
            enemyShot = setTimeout(function(){ 
                enemy[j].classList.add('exposion'); 
                setTimeout(()=>{
                    gg.classList.add('makeOver');
                    document.querySelector('.score').innerHTML=points;
                }, 1000); 
            }, 1000); //Starts the timer to ENEMY SHOT 
    }
// Removes class turnRed (that shows ENEMY) - from clicked node 
for (let i = 0; i < enemy.length; i++) {
enemy[i].addEventListener('click', ()=>{
    
    enemy[i].classList.add('kill');
    setTimeout(()=>{enemy[i].classList.remove('turnRed', 'kill');}, 400);
    points ++; 
    p.innerHTML = points;
    clearTimeout(enemyShot); // Stops the timer
});
};
let speed = 1500 // Starting speed

// Shows the ENEMY every time 0,01 sec faster
const increasingSpeed = () => {
    speed -= 10;
    setTimeout(()=>{
        showEnemy();
        increasingSpeed();
    }, speed);
}
increasingSpeed();

/*let gameStart = setInterval(showEnemy, lvl);*/

//restarts the game
restart.addEventListener('click', ()=>{
    window.location.reload();
});
});