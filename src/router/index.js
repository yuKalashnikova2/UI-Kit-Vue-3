import { createRouter, createWebHistory } from "vue-router";
import Index from '@/views/Index.vue'
import Typography from '@/views/Typography.vue'
import Button from '@/views/Button.vue'
import Checkbox from '@/views/Checkbox.vue'
import Modal from '@/views/Modal.vue'
import Radio from '@/views/Radio.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/typography',
            name: 'Typography',
            component: Typography
        },
        {
            path: '/button',
            name: 'Button',
            component: Button
        },
        {
            path: '/checkbox',
            name: 'Checkbox',
            component: Checkbox
        },
        {
            path: '/modal',
            name: 'Modal',
            component: Modal
        },
        {
            path: '/radio',
            name: 'Radio',
            component: Radio
        }
    ]
})

export default router