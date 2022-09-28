// =>>>> onclick, show
// const app = Vue.createApp({
//     template: `<h1>Hello from {{ teamName }} and {{ isHello ? firstName + ' '+ lastName : "" }}</h1>
//     <button v-on:click="onChangeName">Change Name</button>
//     <button @click="onChangeName">Change Name But Shorter</button>
//     <div class="modal" v-if="isShowModal">
//         <h1>Model content</h1>
//     </div>`,
//     data() {
//         return {
//             teamName: "Red Hood",
//             firstName: "Duy",
//             lastName: "Luu",
//             isHello: true,
//             isShowModal: false
//         };
//     },
//     methods: {
//         onChangeName(){
//             console.log(this);
//             this.firstName = "Bruce";
//             this.lastName = "Wayne";
//             this.isShowModal = !this.isShowModal;
//         }
//     },
// });
// app.mount("#contact");

const app = Vue.createApp({
    data() {
        return {
            // x: 0,
            // y: 0,
            classTesting:"flex",
            products: [
                {
                    thumb: "./assets/p1.png",
                    name: "Product A",
                    price: 100,
                    isCart: false,
                },
                {
                    thumb: "./assets/p2.png",
                    name: "Product B",
                    price: 150,
                    isCart: false,
                },
                {
                    thumb: "./assets/p3.jpg",
                    name: "Product C",
                    price: 200,
                    isCart: true,
                }
            ]
        };
    },
    methods: {
        // onLogEvent(event, newX, newY) {
        //     console.log("Running", event);
        //     this.x = newX;
        //     this.y = newY;
        // },
        // onMouseMoveEvent(event) {
        //     console.log("Running mouse move event", event);
        //     this.x = event.offsetX;
        //     this.y = event.offsetY;
        // },
        onToggleCart(event, product){
            product.isCart = !product.isCart
        }
    },
    computed: {
        productsComputed() {
            return this.products.filter(product => product.price < 160);
        }
    }
});

app.mount("#contact");