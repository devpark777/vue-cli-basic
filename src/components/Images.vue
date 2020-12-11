<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            //src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            src : require("@/assets/page1.jpg")
          },
          {
            // src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            src : require("@/assets/page2.jpg")
          },
          {
            // src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            src : require("@/assets/page3.jpg")
          },
          {
            // src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            src : require("@/assets/page4.jpg")
          },
        ],
      }
    },
  }
</script>