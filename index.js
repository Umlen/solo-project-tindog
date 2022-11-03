import dogsData from '/data.js';

document.querySelector('.person').style.backgroundImage = `url(${dogsData[2].avatar})`;
document.querySelector('.person-name').textContent = dogsData[2].name;
document.querySelector('.person-bio').textContent = dogsData[2].bio;