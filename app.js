// Selects all nodes of class enemy_window
const enemy = document.querySelectorAll('.enemy_window');
const p = document.querySelector('p');
const gg = document.querySelector('.gameOver');

// Shows Enemy in RANDOM location
    const showEnemy = () => {
        let j = Math.floor(Math.random()*5);
        enemy[j].classList.add('turnRed');
        
        myVar = setTimeout(function(){ 
            enemy[j].classList.add('exposion'); 
            setTimeout(()=>{
                gg.classList.add('makeOver');
                document.querySelector('.score').innerHTML=points;
            }, 1000); 
        }, 1000); //Starts the timer to ENEMY SHOT
    }
    

    let points = 0; //counts points

// Removes class turnRed (that shows ENEMY) - from clicked node 
for (let i = 0; i < enemy.length; i++) {
enemy[i].addEventListener('click', ()=>{
    
    enemy[i].classList.add('kill');
    setTimeout(()=>{enemy[i].classList.remove('turnRed', 'kill');}, 400);
    points ++; 
    p.innerHTML = points;
    clearTimeout(myVar); // Stops the timer
});
};

// Shows an ENEMY every 2 sec
const gameBegin =  setInterval(showEnemy, 1500)


//window.location.reload();