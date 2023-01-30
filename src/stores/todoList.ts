import { defineStore } from "pinia";

export const useTodoListStore = defineStore('todoList', {
    // state
    // getter
    // action
    state:() => ({
        todoList: [],
        id: 0
    }),
    actions: {
        addTodo(item:any) {
            this.todoList.push(<never>{
                item, id: this.id++, completed: false
            })
        },
        deleteTodo(itemId:number) {
            this.todoList = this.todoList.filter((object:any) => object.id != itemId)
        },
        toggleComplete(todoId:number) {
            const todo = this.todoList.find((obj:any) => obj.id === todoId);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    },
})