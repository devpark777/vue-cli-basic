<template>
  <div>
       <img v-bind:src="imga" alt="imga"> <br>
       <v-img :src="imga" alt="why"></v-img>
       <v-img src="../assets/a.jpeg" aspect-ratio="1.7"></v-img>  
      
      <v-img
          src="https://picsum.photos/510/300?random"
          aspect-ratio="1.7"
        ></v-img>
      <v-img
          src="../assets/a.jpeg"
          aspect-ratio="1.7"
        ></v-img>  
 
  <!-- <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel> -->
  <!-- //******************************* */ -->
<div>
    <v-row justify="space-around">
      <v-icon @click="model--">
        mdi-minus
      </v-icon>
      {{ model }}
      <v-icon @click="model++">
        mdi-plus
      </v-icon>
    </v-row>
    <v-carousel v-model="model">
      <v-carousel-item
        v-for="(color, i) in colors"
        :key="color"
      >
        <v-sheet
          :color="color"
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3">
              <!-- Slide {{ i + 1 }} -->
               <v-img v-bind:src="img" alt="why?"></v-img>
               <!-- <img src="../images/page2.jpg" alt=""> -->
               <!-- <img v-bind:src="'../images/page'+(i+1)+'.jpg'" alt="a"> -->
               {{'../images/page'+(i+1)+'.jpg'}}
               <!-- <img :src="img" alt="aa"> <br> -->
               <!-- <img v-bind:src="'img/'+p+'.jpg'"> <br> -->
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
  <!--*****************************  -->
   </div>
    
</template>

<script>
//   export default {
//     data () {
//       return {
//         items: [
//           {
//             src : '../images/a.jpeg', 
//             // src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
//           },
//           {
//             src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
//           },
//           {
//             src: 'https://picsum.photos/id/11/500/300',
//           },
//           {
//             src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
//           },
//         ],
//       }
//     },
//   }
export default {
    data () {
      return {
        imga : require("@/assets/a.jpeg"),
        colors: [
          'primary',
          'secondary',
          'yellow darken-2',
          'red',
          'orange',
        ],
        model: 0,
      }
    },
  }
</script>