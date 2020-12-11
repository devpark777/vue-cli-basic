<template>
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
</template>

<script>
export default {
     data: () => ({
    // title : 'My Vue App',
 
    drawer : false,
    group : null
  }),
}
</script>