import { computed } from "@vue/reactivity";
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

    function addUser(name:any, age:any) { // getter
        userList.value.push(<any>{
            name,
            age
        })
    };

    const totalUser = computed(() => userList.value.length);
 
    return {
        userList,
        addUser,
        totalUser
    };
});