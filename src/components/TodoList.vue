<template>
    <div class="todolist">

        <h1>Todo List3</h1>
        <!-- <input type="text" placeholder="Type todo" v-on:keyup.enter="addTodo()"> -->
        <!-- <input v-model="td" placeholder="Type todo" v-on:keyup.enter="addTodo(td)"> -->
        <input v-model="todoText" placeholder="Type todo" />
        <v-btn color="primary" v-on:click="addTodo(todoText)">add</v-btn>
        <!-- <input v-model="td"> -->
        <hr>
        <div v-for="(todo, index) in todos" v-bind:key="todo.id">
            <input type="checkbox"  :checked="todo.checked" v-on:change="toggleCheckbox(index)" >
            <span v-bind:class="{active : todo.checked}">
                {{todo.text}}
            </span>
            <v-btn color="error" v-on:click="deleteTodo(todo.id)">del</v-btn>
        </div>

    </div>
</template>

<script>
export default {
    data : function () {
         return {
               todoText : '',
               todos : [
                 {id : 1, text : 'Buy a car', checked : false},
                 {id : 2, text : 'Do a homework', checked : true},
               ]
            }
    },
    methods : {
                addTodo(todoText) {
                   // console.log(t);
                    var maxId = this.todos.reduce(function(max, b) {
                        return max > b.id ? max : b.id
                    }, 0)
                    this.todos.push({
                        id: maxId + 1,
                        text:todoText ,
                        checked : false
                    })
                    this.todoText = ''
                },
                toggleCheckbox(index) { //todos의 인덱스 값사용
                    this.todos[index].checked = !this.todos[index].checked
                },
                deleteTodo(id) {  //todos의 id값을 사용
                    const index = this.todos.findIndex(function(todo){
                        return todo.id === id
                    })
                    this.todos.splice(index,1)
                }
    }
}
</script>

<style>
    .active {
        color : red;
    }
    .todolist {
        background: yellow;
        width: 70%;
        padding-top: 50px;
        margin: 0 auto;
    }
</style>