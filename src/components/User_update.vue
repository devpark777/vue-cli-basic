<template>
    <div>
        <p>{{name}}에 대한 정보 수정</p>
        이름 : {{name}}<br>
        <!-- 주소 : <input v-model="localAddress"><br> -->
        <v-text-field v-model="localAddress" label="주소" ></v-text-field>
        <!-- 나이 : <input v-model="localAge"><br> -->
        <v-text-field v-model="localAge" label="나이"></v-text-field>
        <v-btn @click="updateC()" color="success">수정</v-btn>
        
    </div>
</template>

<script>
export default {
    props : ['name','address','age'],
    data() {
        return {
            localName : null,          
            localAddress : null,
            localAge : null,
        }
    },
     created: function () {
          this.localName = this.name;
          this.localAddress = this.address;
          this.localAge = this.age;
           //this.$emit('childs-event', {name : this.name, age : this.age, address: this.address})
        },
        methods : {
          updateC() {
            console.log('from child => updateFromChild 발생')
            this.$emit('updatefromchild', {name:this.localName, age:this.localAge, address:this.localAddress})
          }
        }
    
}
</script>