<template>
     <v-app>
        <div class="header">
            메모장(veux기능 사용 안함)
        </div>
        <div class="list" v-if="mode=== 'list'">
            <ul>
                <li v-for="m in memos" @click="memoOpen(m.id)" :key="m.id">{{m.content}}</li>
            </ul>
            <!-- <button class="add-btn" v-on:click="memowrite()">+</button> -->
             <v-btn class="mx-2 add-btn" fab dark color="indigo" v-on:click="memowrite()">
                <v-icon dark>mdi-plus</v-icon>
            </v-btn>
        </div>
        <div class="write" v-else-if="mode === 'write'">
            <!-- <textarea v-model="memo.content"></textarea> -->
            <v-col cols="12" md="6">
                <v-textarea
                filled
                name="input-7-4"
                label="메모입력"
                v-model="memo.content"
                ></v-textarea>
            </v-col>
             <div class="text-center">
                <v-btn class="save-btn  mx-2" @click="saveNew()" color="success">저장</v-btn>
                <v-btn class="cancel-btn mx-2" @click="mode='list'" color="primary">취소</v-btn>
             </div>
        </div>
        <div class="edit" v-else>
            <textarea v-model="memo.content"></textarea>
            <v-btn class="save-btn" @click="saveEdit()">저장</v-btn>
            <v-bin class="save-btn" @click="remove()" color="error">삭제</v-bin>
            <v-btn class="cancel-btn" @click="mode='list'" color="primary">취소</v-btn>
        </div>

    </v-app>
</template>

<script>
export default {
    data() {
        return {
            mode : 'list',
            memo : {
                id : '',
                content : '',
                regDate : ''
            },
            memos : [
                {id:1, content : '메모1', regDate : new Date()},
                {id:2, content : '메모2', regDate : new Date()}
            ],
        }
    },
    methods : {
         memowrite() {
            this.mode = "write"
            this.memo = {
                id : '',
                content : '',
                regDate : ''
            }
         },
         saveNew() {
            this.memos.push({
                id : this.memos.length + 1,
                content : this.memo.content,
                regDate : new Date()
            });
            this.mode = 'list'
         },
         saveEdit() {
            for(var i in this.memos) {
                if(this.memos[i].id === this.memo.id) {
                    this.memos[i].id = this.memo.id
                    this.memos[i].content = this.memo.content
                    this.memos[i].id = this.memo.regDate
                    break
                }
            }
            this.mode = 'list'
         },
         memoOpen(index) {
                console.log('memoOpen',index)
                for(var i=0; i<this.memos.length;i++) {
                    if(this.memos[i].id === index) {
                        console.log('finded')
                        this.memo.id = this.memos[i].id;
                        this.memo.content = this.memos[i].content
                        this.memo.regDate = new Date()
                    }
                }
                this.mode = 'edit'
         },
         remove(){
            if(confirm('삭제하시겠습닉까?')) {
                for(var i in this.memos) {
                    if(this.memos[i].id === this.memo.id) {
                        this.memos.splice(i,1)
                        break
                    }
                }
                this.mode = 'list'
            }
         }
         
    }
    
        //****************** */
}
</script>

<style>
        .header {
            text-align: center;
            font-size: 20px;
            color : white;
            font-weight: bold;
            background: rgb(139, 195, 235);
            padding: 10px;
        }
        .list ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .list ul li {
            border-bottom : 1px solid #ddd;
            font-size: 20px;
            padding : 10px;
        }
        .add-btn {
            font-size: 30px;
            color : white;
            background: #07c;
            position: fixed;
            right : 30px;
            bottom : 30px;
        }
        #app textarea {
            width: 98%;
            height: 300px;
            margin-top : 10px;
            font-size: 17px;
        }
    </style>