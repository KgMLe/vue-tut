<template>
  <NavBar/>
  <main class="container-fluid">
    <router-view/>
  </main>
 <FooTer/>
</template>


<script>
import NavBar from './components/NavBar.vue'
import FooTer from './components/FooTer.vue';
export default {
components:{
  NavBar, FooTer
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-columns: repeat (3, 1fr );
  grid-template-rows: auto minmax(100vh, 1fr) auto;

}

#app>*{
  grid-column: -1/1;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
