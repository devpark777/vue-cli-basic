<template>
     <div id="app">
      {{name}} 원본정보 <br>
      이름 : {{name}}<br>
      주소 : {{address}}<br>
      나이 : {{age}}<br>
      <hr>
      <User_update v-bind:name="name"
                   v-bind:address="address"
                   v-bind:age="age"
                   v-on:updatefromchild="updateParent($event)"
                   ></User_update>
      
    </div>
</template>

<script>
import User_update from './User_update.vue'

export default {
    components : {
        User_update
    },
    data() {
        return {
          name : '트럼프',
          address : '미국 워싱턴',
          age : 72
        }
    },
     methods: {
          updateParent(child) {
            this.name = child.name;
            this.address = child.address;
            this.age = child.age;
            console.log('부모가 수정됨')
          }
        }
}
</script>