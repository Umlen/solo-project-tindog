class Dog {
    constructor(data) {
        Object.assign(this, data);
    }
    getDogHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
        return `
            <div class="dog">
                <h1 class="dog-name">${name}, ${age}</h1> 
                <h2 class="dog-bio">${bio}</h2>
            </div>
        `;
    }
}

export default Dog;