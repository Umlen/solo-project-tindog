import dogsData from './data.js';
import Dog from './Dog.js';

const likeBtn = document.getElementById('like-btn');
const dislikeBtn = document.getElementById('dislike-btn');

dislikeBtn.addEventListener('click', dislike);
likeBtn.addEventListener('click', like);

function like() {
    dogsData.hasBeenLiked = true;
    likeBtn.classList.add('like-active');
    setTimeout( () => {
        likeBtn.classList.remove('like-active');
        swipe();
    }, 1500 );
}

function dislike() {
    dogsData.hasBeenSwiped = true;
    dislikeBtn.classList.add('dislike-active');
    setTimeout( () => {
        dislikeBtn.classList.remove('dislike-active');
        swipe();
    }, 1500 );
}

function swipe() { 
    if (dogsData.length > 0) {
        dog = new Dog( getNewDog() ); 
        render(); 
    } else {
        document.getElementById('dog-wrapper').innerHTML = `<p>No more search results</p>`;
        likeBtn.removeEventListener('click', like);
        likeBtn.classList.add('disabled-btn');
        dislikeBtn.removeEventListener('click', dislike);
        dislikeBtn.classList.add('disabled-btn');
    }
};

function getNewDog() {
    return dogsData.length > 0 ? dogsData.shift() : {};
}

function render() {
    document.getElementById('dog-wrapper').innerHTML = dog.getDogHtml();
    document.querySelector('.dog').style.backgroundImage = `url(${dog.avatar})`;
}

let dog = new Dog(getNewDog());
render();