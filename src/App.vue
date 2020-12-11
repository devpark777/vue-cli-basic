<template>
<!-- vuetify 사용하여 앱를 만드는 경우 이렇게 해야... -->
 <v-app>
   <v-app-bar app color="primary" dark> <!-- 앱의 bar를 만들어줌-->
     <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> <!-- 앱의 bar에 =(3줄아이콘) 만들어줌-->
     <v-toolbar-title>My Home</v-toolbar-title><!-- 앱의 bar에 타이틀 만들어줌-->
     <v-spacer />

     <v-btn v-if="isLogin" @click="$store.commit('logout')" color="orange">
       [logout({{loginUser.name}})]
     </v-btn> 
     <v-btn v-if="!isLogin" icon to="/login" color="orange">
       [로그인]
     </v-btn> 

     <v-btn icon to="/" color="yellow">
        <v-icon>mdi-home</v-icon>
     </v-btn> 
     <v-btn icon to="/about"> <!-- 앱의 bar에 icon 만들고 링크 걸수 있음 -->
        <v-icon>mdi-magnify</v-icon>
     </v-btn>
     <v-btn icon to="/memo_origin" color="pink"> <!-- 앱의 bar에 icon 만들고 링크 걸수 있음 -->
        <v-icon>mdi-heart</v-icon>
     </v-btn>
     <v-btn icon to="/product">
        <v-icon>mdi-domain</v-icon>
     </v-btn>  
     <v-btn icon to="/todolist" color="yellow">
        <v-icon>mdi-pencil</v-icon>
     </v-btn>  
     <v-btn icon href="http://www.naver.com" target="_blank">
      <v-icon large color="yellow">mdi-call-split</v-icon>
     </v-btn>
     <v-btn icon to="/login" color="yellow">
        <v-icon>more-vert</v-icon>
     </v-btn> 

   </v-app-bar>

   <!-- <v-navigation-drawer permanent> 항상 나타나게함-->
   <v-navigation-drawer app v-model="drawer">  
       <!--이 태그는 단순한 박스다. drawer에 true면 화면에 나타나고, 
           false이면 나타나지 않음 
           app : app화면으로 동작하도록 함, 안하면 위치가 이상하게 나타남-->
      
      <Menu1></Menu1>      
      
      <v-divider></v-divider>
      <v-divider></v-divider>

      <Menu2></Menu2>

   </v-navigation-drawer>

   <v-main> <!-- 앱에서 컨텐츠 영역을 지정함  -->
     <!-- <product-comp></product-comp> -->
     <router-view></router-view>
   </v-main>

   <Footer></Footer>

  </v-app>
  
    
</template>

<script>
// import ProductComp from './components/Product.vue'
import Menu1 from '@/views/site/Menu1.vue'
import Menu2 from '@/views/site/Menu2.vue'
import Footer from '@/views/site/Footer.vue'

import { mapState } from 'vuex'

export default {
  name: 'App',

  components: {
      // ProductComp,
      Footer,
      Menu1,
      Menu2
  },
  data: () => ({
    // title : 'My Vue App',
 
    drawer : false,
    group : null
  }),
  computed : {
    ...mapState(['isLogin', 'loginUser']),
  },
  methods : {
    upp() {
      this.count++
    }
    
  }
};
</script>
