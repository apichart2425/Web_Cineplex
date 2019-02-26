<template>
  <div>
    <!-- <Theater/> -->
    <TimeMovie/>
  </div>
</template>

<script>
  import TimeMovie from "@/components/TimeMovie"
  import Theater from "@/components/Theater"

  export default {
    name: 'ThearterShowTime',
    components: {
      TimeMovie,
      Theater,
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
