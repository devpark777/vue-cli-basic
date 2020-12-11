<template>
 <v-app>
        <div class="header">
            메모 추가(vuex기능)
        </div>
        <div class="write" >
            <v-textarea
                    filled
                    name="input-7-4"
                    label="메모입력"
                    v-model="memo.content">
            </v-textarea>
           
            <div class="text-center">
                <v-btn class="save-btn  mx-2" @click="saveNew()" color="success">저장</v-btn>
                <v-btn class="cancel-btn mx-2" @click="cancel()" color="primary">취소</v-btn>
            </div>
        </div>
 </v-app>
</template>

<script>
export default {
    data() {
        return {
            memo : {
                id : '',
                content : '',
                regDate : ''
            },
        }
    },
   computed : {
        memos() {
            return this.$store.state.memos;
        }
    },
    methods : {
         saveNew() {
            // this.$store.commit('ADD_MEMO',{ 
            //     id : this.memos.length + 1,
            //     content : this.memo.content,
            //     regDate : new Date()
            // })
            this.$store.dispatch('addMemo',{ 
                id : this.memos.length + 1,
                content : this.memo.content,
                regDate : new Date()
            })

            // this.memos.push({  
            //     id : this.memos.length + 1,
            //     content : this.memo.content,
            //     regDate : new Date()
            // });
            //this.$store.state = 'list'
            // this.$store.commit('MODE_CHANGE', 'list')
            this.$router.push('/memo_vuex')
         },
          cancel() {
            if(confirm('취소하고 리스트로 돌아갑니다.')) {
                this.$router.push('/memo_vuex');
            }
           }
    }
}
</script>