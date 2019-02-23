<template>

    <div class="row container">
        <div v-for="movie in movies" class="card">

        </div>
        <!-- <div class="card card-1 " :style="{'background-image':'url('+movie.poster+')'}"> -->
    </div>

</template>

<script>
    export default {
        name: 'cardmovie',
        props: ['movies'],
    }
</script>

<style scoped>
   
</style>