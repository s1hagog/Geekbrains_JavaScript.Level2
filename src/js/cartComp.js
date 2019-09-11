const cartItem = {
    props: ['img', 'item'],
    template: `<div class="cart-item">
                    <div class="product-bio">
                        <img :src="img" alt="Some image">
                        <div class="product-desc">
                            <p class="product-title">{{ item.product_name }}</p>
                            <p class="product-quantity">Quantity: {{ item.quantity }}</p>
                            <p class="product-single-price">$ {{ item.price }} each</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">$ {{ item.price * item.quantity }}</p>
                        <button class="del-btn" @click="$root.$refs.cart.removeProduct(item)">&times;</button>
                    </div>
                </div>  `
}

const cart = {
    data() {
        return {
            imgCart: 'https://placehold.it/100x80',
            cartURL: '/getBasket.json',
            cartItems: [],
            isVisibleCart: false,
            API_URL: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
        }
    },
    components: {
        'cart-item': cartItem
    },
    methods: {
        showCart(){
            this.isVisibleCart = !this.isVisibleCart;
        },
        addProduct (product) {
            console.log(`Product ${product.product_name} added`)
        },
        removeProduct (product) {
            console.log(`Product ${product.product_name} removed`)
        }
    },
    mounted() {
        this.$parent.getJSON(this.API_URL + this.cartURL)
            .then(data => {
                for(let el of data.contents){
                    this.cartItems.push(el)
                }
            })
    },
    template: `
        <div>
            <button class="btn-cart" type="button" @click="showCart()">Корзина</button>
            <div v-show="isVisibleCart" class="cart-block">
                <p v-if="!cartItems.length"> Cart Is Empty </p>
                <cart-item 
                v-for="product of cartItems"
                :key="product.id_product"
                :img="imgCart"
                :item="product"
                ></cart-item>
            </div>
        </div>
    `
}

export default cart