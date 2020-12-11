<template>
    <v-app>
         <AppStatus></AppStatus>
        <h1>{{ homeTitle }}</h1>
        <!-- <img src="../assets/logo.svg" alt=""> -->
        <img src="@/assets/a.jpeg" alt="img1"> <!-- OK -->
        <img :src="imgc" alt="imgc">
        <img v-bind:src="imgd" alt="img2">  <!-- 이건 왜 안되지 -->
        <!-- <v-img src="../assets/page2.jpg"></v-img> --> <!-- OK -->
        <v-img v-bind:src="imgb" alt="bb"></v-img>  <!-- 이건 왜 안되지 -->

       
    </v-app>
</template>

<script>
export default {
    data () {
        return {
            homeTitle : "홈 화면 입니다.",
            img : '../assets/page1.jpg',
            imgb : "../assets/page2.jpg",
            imgc : require("@/assets/page3.jpg"), //이렇게 해야 함
            imgd : require('@/assets/page3.jpg')
        }
    }
}
</script>