class Dog {
    constructor(data) {
        Object.assign(this, data);
    }
    getDogHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
        return `
            <div class="dog">
                <img src="/images/badge-like.png" alt="" class="badge hide" id="badge-like">
                <img src="/images/badge-nope.png" alt="" class="badge hide" id="badge-nope">
                <h1 class="dog-name">${name}, ${age}</h1> 
                <h2 class="dog-bio">${bio}</h2>
            </div>
        `;
    }
}

export default Dog;