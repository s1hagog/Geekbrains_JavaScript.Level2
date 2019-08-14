class Hamburger{
    constructor(isCheese, isTomato, isLettuce, isSpices, isMayo, isBig){
        this.calories = 20;
        this.price = 50;
        this.isCheese = isCheese;
        this.isTomato = isTomato;
        this.isLettuce = isLettuce;
        this.isSpices = isSpices;
        this.isMayo = isMayo;
        this.isBig = isBig;

        this._init();
    }

    _init() {
        if(this.isCheese){
            this.calories += 20;
            this.price += 10;
        }
        if(this.isLettuce){
            this.calories += 5;
            this.price += 20;
        }
        if(this.isTomato){
            this.calories += 10;
            this.price += 15;
        }
        if(this.isSpices){
            this.calories += 0;
            this.price += 15;
        }
        if(this.isMayo){
            this.calories += 5;
            this.price += 20;
        }
        if(this.isBig){
            this.calories += 20;
            this.price += 50;
        }
    }

    display() {
        return `
            <p>
                Your hamburger has ${this.calories} calories and costs ${this.price} rubles
            </p>
        `;
    }
}

document.querySelector('.btn-costs').addEventListener('click', () => {
    let isCheese;
    let isLettuce;
    let isTomato;
    let isSpices;
    let isMayo;
    let isBig;


    isCheese = document.querySelector('.cheese').classList.contains('active');
    isLettuce = document.querySelector('.lettuce').classList.contains('active');
    isTomato = document.querySelector('.tomato').classList.contains('active');
    isSpices = document.querySelector('.spices').classList.contains('active');
    isMayo = document.querySelector('.mayo').classList.contains('active');
    isBig = document.querySelector('.big').checked;

    let burger = new Hamburger(isCheese, isLettuce, isTomato, isSpices, isMayo, isBig);

    document.querySelector('.output').innerHTML = burger.display();
});