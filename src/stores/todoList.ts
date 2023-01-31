import { defineStore } from "pinia";

export const useTodoListStore = defineStore('todoList', {
    // state
    // getter
    // action
    state:() => ({
        id: 0,
        todoList: [] as TodoInfo[],
        userList: [] as UserInfo[],
    }),
    actions: {
        addTodo(item:any) {
            this.todoList.push(<never>{
                item, id: this.id++, completed: false
            })
        },
        addUser(item:any) {
            this.userList.push(<never>{
                item
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

interface UserInfo {
    name: string
    age: number
}

interface TodoInfo {
    item: string
    completed: boolean
}