<template>
  <div>
    <h1>UserList(from jsonplaceholder)</h1>
    <div v-for="user in users" :key="user.id">
        {{user.name}}
    </div>
   </div>
</template>

<script>
// import axios from 'axios'
export default {
   
    created() {
       this.getUsers();
    },
    computed : {
        users() {
            return this.$store.state.users
        }
    },
    methods : {
        getUsers() {
            // axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            //          //console.log(res);
            //         this.users = res.data;
            // })
            this.$store.dispatch('getUsers')
        }
    }
}
</script>