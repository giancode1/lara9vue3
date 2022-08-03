<template>
    How To Install Vue 3 in Laravel 9 with Vite
    <strong>hola</strong>

    <div>
        <p>count: {{count}}</p>
        <Button @click="count++" class="p-button-success">+1</Button>
        <Button @click="count=0" class="p-button-raised p-button-rounded">Reset</Button>
        <Button @click="decrease" class="p-button-warning">-1</Button>
    </div>
    <div>
        <DataTable :value="products" responsiveLayout="scroll">
            <Column field="name" header="Producto"></Column>
            <Column field="price" header="Precio"></Column>
            <Column field="quantity" header="Cantidad"></Column>
        </DataTable>
    </div>
</template>



<script setup>
import { ref, onMounted } from 'vue'
import useProducts from './composables/products'

const count = ref(0)
const decrease = () => count.value--

const { products, getProducts } = useProducts();

onMounted(getProducts)




console.log('hello script setup')
console.log('products', products)




</script>


<style scoped>
div{
    background-color: azure;
}
</style>
