import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectDetails from '@/components/project/ProjectDetails.vue'
import Jobs from '@/components/jobs/Jobs.vue'
import Clients from '@/components/clients/Clients.vue'
import WhatWeOffer from "@/components/whatweoffer/WhatWeOffer.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectsView from "@/components/projects/ProjectsView.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/project/:id',
            name: 'project-details',
            component: ProjectDetails,
            props: true
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: Jobs
        },
        {
            path: '/clients',
            name: 'clients',
            component: Clients
        },
        {
            path: '/what-we-offer',
            name:'what we offer',
            component: WhatWeOffer
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectsView
        }
    ]
})

export default router
