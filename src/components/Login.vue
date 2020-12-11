<template>
 <div class="loginform">
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="id"
      :rules="idRules"
      :counter="10"
      label="Id"
    ></v-text-field>

    <v-text-field
      v-model="pwd"
      label="password"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      
      @click="login({
        id:id,
        pwd:pwd
      })"
    >
      Validate(로그인)
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form(취소)
    </v-btn>

   
  </v-form>
  </div>
</template>

<script>

  import { mapState, mapActions} from 'vuex'

  export default {
    data() {
      return {
        // allUsers : [
        //   {id : 1, name :'kim', email:"kim@naver.com", password:"1111"},
        //   {id : 2, name :'lee', email:"kim@naver.com", password:"1111"},
        // ],
        valid: true,
        id: '',
        idRules: [
          v => !!v || 'Name is required',
          v => (v && v.length >= 3) || 'Name must be more than 4 characters',
        ],
        pwd: '',
      }
    },
    computed : {
      ...mapState(['isLogin'])
    },

    methods: {
      ...mapActions(["login"]),

      // validate () {
      //   this.$refs.form.validate()
      //   let find = null
      //   this.allUsers.forEach(user => {
      //     if(user.name === this.id && user.password === this.pwd) {
      //       find = true
      //     }
      //   });
      //   if(find === true) {
      //       alert('로긴 성공');
      //       this.$router.push('/')
      //   }else {
      //       alert('로긴 실패')
      //   }
      // },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>

<style scoped>
  .loginform {
      width : 50%;
      margin : 0 auto;
      padding-top: 100px;
  }
</style>