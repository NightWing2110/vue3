<template>
    <h1>Overview page is here</h1>
    <input type="text" v-model="searchText">
    <ul>
        <li v-for="(customer, index) in customersFilled" :key="index">
        {{ customer }}</li>
    </ul>
    <button @click="onChangeSomething">CLick me</button>
</template>

<script>
import { computed, ref, reactive } from "vue"
export default {
    setup() {
        const searchText = ref("");
        const customers = reactive(["Alazul", "NightWing", "Robin", "Bat"]);

        const customersFilled = computed(() => 
            customers.map(customer => {
                customer = customer.toLowerCase()
                return customer
            }).filter((customer) => customer.includes(searchText.value.toLowerCase()))
        );
        
        return { customersFilled, searchText};
    }
};
</script>