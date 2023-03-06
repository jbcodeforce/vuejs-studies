import { defineStore } from 'pinia'

export const useUserStore = defineStore('usersData', {
    state: () => {
        return{
            user: {}
        }
    }, 
    getters: {
        isAuthenticated: () => { return user !== null }
    },
    actions:{
        changeUsername (payload) {
            this.user = payload
            // hack from now:
            this.isLoggedIn = true
        }
    }
})
