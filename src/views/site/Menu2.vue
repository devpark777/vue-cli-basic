<template>
    <v-list>
      <v-list-group
        v-for="(item,i) in items"
        :key="i"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <!-- <v-list-item to="/memo_origin"> -->
        <v-list-item
          v-for="child in item.items"
          :key="child.title"
          :to="child.to"
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          action: 'mdi-ticket',
          items: [
              { title: 'go Home' , to : '/'},
              { title: 'go About' , to : '/about'}
              ],
          title: 'Site정보',
         
        },
        {
          action: 'mdi-school',
          items: [
              { title: '메모장(origin)' ,to:'/memo_origin'},
              { title: '메모장(vuex활용)',to:'/memo_vuex' },
              { title: 'List Item' }
          ],
          title: '메모장',
        },
        {
          action: 'mdi-run',
          items: [
              { title: '수정하기', to:'/user' },
              { title: 'User List(axios활용)', to:'/axios_userlist' }
              ],

          title: '사용자정보',
        },
        {
          action: 'mdi-bottle-tonic-plus',
          items: [{ title: 'TodoList', to:'/todolist' }],
          title: 'TodoList',
        },
        {
          action: 'mdi-content-cut',
          items: [{ title: '이미지보기' ,to:'/images'}],
          title: '이미지',
        },
        {
          action: 'mdi-silverware-fork-knife',
          active: true,
          items: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' },
          ],
          title: 'Dining',
        },
       
        {
          action: 'mdi-tag',
          items: [{ title: 'List Item' }],
          title: 'Promotions',
        },
      ],
    }),
  }
</script>