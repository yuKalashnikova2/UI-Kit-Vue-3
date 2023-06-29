import { createRouter, createWebHistory } from "vue-router";
import Index from '@/views/index.js'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        }
    ]
})

export default router