import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('user_name', () => {
    const userName = ref('');

    
  const setUserName = (user_name) => {
    userName.value = user_name;
  }

  const removeUserName = () => {
    userName.value = '';
  }

  return {userName ,setUserName , removeUserName}

}, {persist : true});