<template>
 <v-app>
        <div class="header">
            메모 수정(vuex기능)
        </div>
       <div class="edit">
            <!-- <textarea v-model="memo.content"></textarea> -->
            <v-col cols="12" md="6">
                <v-textarea
                filled
                name="input-7-4"
                label="메모입력"
                v-model="memo.content"
                ></v-textarea>
            </v-col>
            <v-btn class="save-btn" @click="saveEdit()" color="success">수정</v-btn>
            <v-btn class="save-btn" @click="remove()" color="error">삭제</v-btn>
            <v-btn class="cancel-btn" @click="cancel()" color="primary">취소</v-btn>
        </div>
 </v-app>
</template>

<script>
export default {
    props : ['id'],
   
   computed : {
        memos() {
            return  this.$store.state.memos
        },
        index() { //수정하는 메모의 배열상에서 위치
             const index = this.memos.findIndex( memo => {
                return memo.id === this.id
            })
            return index
        },
        memo() {
            return this.memos[this.index]
        },
        
    },
    methods : {
          saveEdit() {
            this.$store.commit('EDIT_MEMO',{ 
                id : this.memos.length + 1,
                content : this.memo.content,
                regDate : new Date(),
                index : this.index
            })
            // this.$store.commit('MODE_CHANGE', 'list')
            this.$router.push('/memo_vuex')
          },
           remove(){
            if(confirm('삭제하시겠습닉까?')) {
                // for(var i in this.memos) {
                //     if(this.memos[i].id === this.memo.id) {
                //         this.memos.splice(i,1)
                //         break
                //     }
                // }
                // this.mode = 'list'
                this.$store.commit('DELETE_MEMO', this.index);
                this.$router.push('/memo_vuex');
            }
           },
           cancel() {
            if(confirm('취소하고 리스트로 돌아갑니다.')) {
                this.$router.push('/memo_vuex');
            }
           }
    }
}
</script>