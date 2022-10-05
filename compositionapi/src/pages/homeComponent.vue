<template>
    <h1>Overview page is here</h1>
    <input type="text" v-model="searchText">
    <ul>
        <li v-for="(customer, index) in customersFilled" :key="index">
        {{ customer }}
        </li>
    </ul>
</template>

<script>
import { watch, computed, ref, reactive, watchEffect } from "vue"
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

        watch(searchText, (newValue, oldValue) => {
            console.log(newValue, oldValue)
        });
        
        watchEffect(() => {
            if(searchText.value) {
                console.log("Run again");
            }
        })
        
        return { customersFilled, searchText};
    }
};
</script>