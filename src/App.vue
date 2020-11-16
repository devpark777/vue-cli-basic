<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ count }}</p>
    <button @click="upp">증가</button>
    <v-btn block @click="upp">증가2</v-btn>
    <v-btn color="error">error</v-btn>
    <hr>
    <HomeComp></HomeComp>
    <ProductComp></ProductComp>
    <CardImageComp></CardImageComp>
    <AppStatus></AppStatus>
    <VuetifyExComp></VuetifyExComp>
  </div>
    
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import HomeComp from './components/Home.vue'
import ProductComp from './components/Product.vue'
import CardImageComp from './components/CardImages.vue'

export default {
  name: 'App',

  components: {
    // HelloWorld,
    HomeComp,
    ProductComp,
    CardImageComp
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
