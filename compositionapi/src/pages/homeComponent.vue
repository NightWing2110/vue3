<template>
    <h1>Overview page is here</h1>
    <p>{{ secondName }}</p>
    <p>{{ car }}</p>
    <button @click="onChangeSomething">CLick me</button>
</template>

<script>
import { ref, reactive } from "vue"
export default {
    setup() {
        const firstName = ref("NightWing");
        const secondName = ref({
            name: "Hu",
            something: "Ha"
        });
        let car = reactive({
            price: 2110,
            name: "Audi"

        });
        
        function onChangeSomething()
        {
            // console.log("Running..............");
            // // firstName = "Alazul";
            // console.log(secondName);
            // console.log(car);
            // firstName.value = "Alazul";
            // secondName.value.name = "fffffff";
            // car.price = 1999;
            secondName.value = {
                name: "Alazul",
                something: "batcave"
            };
            car = {
                price: 1999,
                name: "something"
            }
        }

        return { car, firstName, secondName, onChangeSomething };
    }
};
</script>