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
     <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/about"> <!--<router-link >태그 안써도 되네... -->
            <v-list-item-icon>
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item to="/product">
            <v-list-item-icon>
              <v-icon>mdi-domain</v-icon>
            </v-list-item-icon>
              <v-list-item-title>Product</v-list-item-title>
          </v-list-item>

          <v-list-item to="/todolist">
             <v-list-item-icon>
                <v-icon>mdi-pencil</v-icon>
             </v-list-item-icon> 
             <v-list-item-title>TodoList</v-list-item-title>
          </v-list-item>

           <v-list-item to="/memo_origin">
             <v-list-item-icon>
                <v-icon>mdi-pencil</v-icon>
             </v-list-item-icon> 
              <v-list-item-title>메모장(origin)</v-list-item-title>
          </v-list-item>

           <v-list-item to="/memo_vuex">
             <v-list-item-icon>
                <v-icon>mdi-pencil</v-icon>
             </v-list-item-icon> 
             <v-list-item-title>메모장(vuex기능)</v-list-item-title>
          </v-list-item>

          <v-list-item to="/user">
             <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
             </v-list-item-icon> 
             <v-list-item-title>사용자수정하기</v-list-item-title>
          </v-list-item>

           <v-list-item to="/axios_userlist">
             <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
             </v-list-item-icon> 
             <v-list-item-title>User List(axios활용)</v-list-item-title>
          </v-list-item>

          <v-list-item to="/images">
             <v-list-item-icon>
               <v-icon>mdi-thumb-up</v-icon>
             </v-list-item-icon> 
             <v-list-item-title>이미지보기</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>      
     
   </v-navigation-drawer>

   <v-main> <!-- 앱에서 컨텐츠 영역을 지정함  -->
     <!-- <product-comp></product-comp> -->
     <router-view></router-view>
   </v-main>

   <v-footer 
        color="primary" dark
        absolute  
        class="font-weight-medium"
      > <!-- absolute ->  제일 아래화면에 닥 붙어있게 함 -->
        <v-col
          class="text-center"
          cols="12"
        >
          <strong>Vue-Router / Vuetify/ Vuex 활용했음</strong>
           <p>Copy right by YUPARK in 2020-2학기 캡스톤디자인(1)수업 </p>
        </v-col>
   </v-footer>

  </v-app>
  
    
</template>

<script>
// import ProductComp from './components/Product.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',

  components: {
      // ProductComp
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
