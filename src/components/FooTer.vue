<template>
    <footer class="container-fluid">
<div class="row">
<p cllas="lead">Copyright &copy; {{cYear}}</p>
</div>
    </footer>
</template>

<script>
    export default {
        data(){
            return{
                cYear: new Date().getUTCFullYear()
            }
        }
    }
</script>

<style scoped>

</style>