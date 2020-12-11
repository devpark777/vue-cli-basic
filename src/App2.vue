<template>
 <!-- <v-app>
        <v-container>
        <v-btn color="success">door</v-btn>
        </v-container>
  </v-app> -->
  <v-app>
    <v-container>
      <h1>{{ title }}</h1>
      <p>{{ count }}</p>
      <button @click="upp">증가</button>
      <v-btn color="success" @click="upp">증가2</v-btn>
      <hr>
       <VuetifyExComp></VuetifyExComp>
      <HomeComp></HomeComp>
      <ProductComp></ProductComp>
      <CardImageComp></CardImageComp>
      <ImageTest></ImageTest>
      <AppStatus></AppStatus>
     
    </v-container>
  </v-app>
    
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import HomeComp from './components/Home.vue'
import ProductComp from './components/Product.vue'
import CardImageComp from './components/CardImages.vue'
import ImageTest from './components/ImageTest.vue'

export default {
  name: 'App',

  components: {
    // HelloWorld,
    HomeComp,
    ProductComp,
    CardImageComp,
    ImageTest
  },
  data: () => ({
    title : 'My Vue App',
    count : 1
  }),
  methods : {
    upp() {
      this.count++
    }
    
  }
};
</script>
