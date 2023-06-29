<template>
    <div class="container">
        <div class="row">
            <div class="card" style="width: 18rem;">
  <img :src= "products.image" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{products.make}}</h5>
    <p class="card-text">{{products.spec}}.</p>
    <p class="card-text">{{products.amount}}.</p>
  </div>
</div>
</div>
</div>
    
</template>

<script>
    export default {
        computed:{
            products(){
                return this.$store.state.products
            }
        },
        mounted(){
            this.$store.dispatch('fetchProducts')
        }
    }
</script>

<style lang="scss" scoped>

</style>