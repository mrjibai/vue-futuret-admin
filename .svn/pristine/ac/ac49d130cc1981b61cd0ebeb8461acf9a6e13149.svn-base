import { defineStore } from 'pinia'


export const drawerStore = defineStore('drawer', {
    state: () => ({
        opendrawer: false,
        checked: false
    }),
    actions: {
        setopendrawer() {
            this.opendrawer = !this.opendrawer
        },
        setchecked(val: Boolean) {
            this.checked = val
        }
    }
})