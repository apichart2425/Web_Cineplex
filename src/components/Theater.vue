<template>
  <div>
    <div class="container">
      <TimeMovie/>
    </div>
  </div>
</template>

<script>
  import TimeMovie from "@/components/TimeMovie"
  export default {
    name: 'theater',
    components: {
      TimeMovie,
    },
    props: {},

    data() {
      return {
        movie: movies,
      }
    }
  }

</script>

<style scoped>


</style>
