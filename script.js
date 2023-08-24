let playerState = 'fall';
const dropdown=document.getElementById('animations')
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
})


const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
// Set up the game variables and constants:
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;


const playerImage = new Image();
//new** its used for objects
playerImage.src='shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 525;
//the size of te frame of the animation

// width and height of the frame
let gameFrame = 0;
//game start on the frame 0
const staggerFrames= 5; 


spriteAnimations=[];
//number of frames to animate
const animationStates= [
    {
        name:'idle',
        frames: 7,
    },
    {
        name:'jump',
        frames:7,
    },  
    {
        name:'fall',
        frames:7,
    },   {
        name:'run',
        frames: 9 ,
    }, 
    {
        name:'dizzy',
        frames: 11 ,
    },  
    {
        name:'sit',
        frames:5,
    },  
    {
        name:'roll',
        frames:7,
    },  
    {
        name:'bite',
        frames:7,
    },  
    {
        name:'ko',
        frames:12,
    },  
    {
        name:'getHit',
        frames:4,
    },  
];

animationStates.forEach((state, index) => {
    let frames ={
        loc:[],
    }
    for (let j = 0; j < state.frames; j++){
        let positionX= j*spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x:positionX, y:positionY});
    }
    spriteAnimations[state.name] = frames;
});
    console.log(spriteAnimations);

    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
    
        let frameX = spriteWidth*position;
        let frameY = spriteAnimations[playerState].loc[position].y;
    
        ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
        gameFrame++;
        requestAnimationFrame(animate);
    }
    
    animate();
    