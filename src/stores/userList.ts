import { defineStore } from "pinia";
import { ref } from 'vue';

interface UserInfo {
    name: string
    age: number
}

export const useUserListStore = defineStore('userListStore', () => {
    // state
    // getter
    // action

    const userList = ref([] as UserInfo[]);

    function addUser(name:any, age:any) {
        userList.value.push(<any>{
            name,
            age
        })
    };

    return {
        userList,
        addUser
    };
});