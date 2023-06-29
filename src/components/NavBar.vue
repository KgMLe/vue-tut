<template>
<nav class="container-fluid">
<ul class="nav">
  <li class="nav-item">
    <router-link to="/">Home</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/about">About</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/products">Prodcuts</router-link>
  </li>
</ul>
</nav>

</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.nav-item{
    margin-inline: .2rem;
}
</style>