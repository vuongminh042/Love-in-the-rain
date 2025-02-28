function createClouds() {
    let container = document.querySelector('.container');
    let clouds = document.querySelectorAll('.cloud');

    clouds.forEach(cloud => {
        let numberOfDrops = 30; 
        for (let i = 0; i < numberOfDrops; i++) {
            let drop = document.createElement('div');
            drop.classList.add('drop');

            let posX = Math.random() * 220; 
            let delay = Math.random() * 1;
            let duration = Math.random() * 2 + 1;

            drop.style.left = posX + 'px';
            drop.style.animationDelay = delay + 's';
            drop.style.animationDuration = duration + 's';

            cloud.appendChild(drop);
        }
        createLightningEffect(cloud);
    });
}

function createLightningEffect(cloud) {
    setInterval(() => {
        cloud.style.transition = "box-shadow 0.1s ease, opacity 0.1s ease";
        cloud.style.boxShadow = "0 0 100px 40px rgba(255, 255, 255, 0.8)";
        cloud.style.opacity = "1";

        setTimeout(() => {
            cloud.style.boxShadow = "none";
            cloud.style.opacity = "0.9";
        }, 100);
    }, 3000); 
}

function animateRainbowText() {
    let text = document.getElementById("rainbow-text");
    let colors = ["red", "orange", "yellow", "green", "cyan", "blue", "violet"];
    let index = 0;

    setInterval(() => {
        text.style.color = colors[index];
        index = (index + 1) % colors.length;
    }, 500);
}

animateRainbowText();
createClouds();
