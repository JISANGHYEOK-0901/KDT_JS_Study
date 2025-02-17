const $zelda_link = document.querySelector('#zelda_link');
const characterLocation = {
    x: 0,
    y: 0
};

const allowedKeys = ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'];

document.addEventListener('keydown', (event) => {
    if (!allowedKeys.includes(event.key)) {
        return;
    }

    $zelda_link.classList.remove('pause-moving');

    switch (event.key) {
        case 'ArrowRight':
            $zelda_link.classList.remove('play-moving-left', 'play-moving-up', 'play-moving-down');
            $zelda_link.classList.add('play-moving-right');
            break;
        case 'ArrowLeft':
            $zelda_link.classList.remove('play-moving-right', 'play-moving-up', 'play-moving-down');
            $zelda_link.classList.add('play-moving-left');
            break;
        case 'ArrowUp':
            $zelda_link.classList.remove('play-moving-right', 'play-moving-left', 'play-moving-down');
            $zelda_link.classList.add('play-moving-up');
            break;
        case 'ArrowDown':
            $zelda_link.classList.remove('play-moving-right', 'play-moving-left', 'play-moving-up');
            $zelda_link.classList.add('play-moving-down');
            break;
    }

    // 위치 업데이트
    calcCharacterLocation(event.key);
    $zelda_link.setAttribute('style', `transform: translate(${characterLocation.x}px, ${characterLocation.y}px)`);
});

document.addEventListener('keyup', (event) => {
    if (!allowedKeys.includes(event.key)) {
        return;
    }
    console.log(event.key);


    switch (event.key) {
        case 'ArrowRight':
            $zelda_link.classList.remove('play-moving-right', 'play-moving-left', 'play-moving-up', 'play-moving-down');
            $zelda_link.classList.add('pause-moving');
            break;
        case 'ArrowLeft':
            $zelda_link.classList.remove('play-moving-right', 'play-moving-left', 'play-moving-up', 'play-moving-down')
            $zelda_link.classList.add('pause-moving');
            break;
        case 'ArrowUp':
            $zelda_link.classList.remove('play-moving-right', 'play-moving-left', 'play-moving-up', 'play-moving-down');
            $zelda_link.classList.add('pause-moving');
            break;
        case 'ArrowDown':
            $zelda_link.classList.remove('play-moving-right', 'play-moving-left', 'play-moving-up', 'play-moving-down')
            $zelda_link.classList.add('pause-moving');
            break;
    }
});

function calcCharacterLocation(key) {
    switch (key) {
        case 'ArrowRight':
            characterLocation.x += 10;
            break;
        case 'ArrowLeft':
            characterLocation.x -= 10;
            break;
        case 'ArrowUp':
            characterLocation.y -= 10;
            break;
        case 'ArrowDown':
            characterLocation.y += 10;
            break;
        default:
            break;
    }
}
