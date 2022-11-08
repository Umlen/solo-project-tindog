import dogsData from './data.js';
import Dog from './Dog.js';

let isWaiting = false;

const likeBtn = document.getElementById('like-btn');
const dislikeBtn = document.getElementById('dislike-btn');

dislikeBtn.addEventListener('click', dislike);
likeBtn.addEventListener('click', like);

const getNewDog = () => dogsData.length > 0 ? dogsData.shift() : {};

function dogRender() {
    document.getElementById('dog-wrapper').innerHTML = dog.getDogHtml();
    document.querySelector('.dog').style.backgroundImage = `url(${dog.avatar})`;
}

let dog = new Dog(getNewDog());
dogRender();

function like() {
    if (!isWaiting) {
        dog.hasBeenLiked = true;
        likeBtn.classList.add('like-active');
        badgeRender();
        isWaiting = true;
        setTimeout( () => {
            likeBtn.classList.remove('like-active');
            isWaiting = false;
            swipe();
        }, 1000 );
    }
}

function dislike() {
    if (!isWaiting) {
        dislikeBtn.classList.add('dislike-active');
        badgeRender();
        isWaiting = true;
        setTimeout( () => {
            dislikeBtn.classList.remove('dislike-active');
            isWaiting = false;
            swipe();
        }, 1000 );
    }
}

function swipe() { 
    dog.hasBeenSwiped = true;
    if (dogsData.length > 0) {
        dog = new Dog( getNewDog() ); 
        dogRender(); 
    } else {
        noMoreDogs();
    }
};

function badgeRender() {
    if (dog.hasBeenLiked) {
        document.getElementById('badge-like').classList.remove('hide');
    } else {
        document.getElementById('badge-nope').classList.remove('hide');
    }
}

function noMoreDogs() {
    document.getElementById('dog-wrapper').innerHTML = `<p class="end-message">No more search results</p>`;
    likeBtn.removeEventListener('click', like);
    dislikeBtn.removeEventListener('click', dislike);
    likeBtn.classList.add('hide');
    dislikeBtn.classList.add('hide');
}