export const routes = [
    {
        path:'/',
        component: () => import('../layouts/MainLayout.vue'),
        children:[
            {
                path:'/',
                name:'homePage',
                component: () => import('../pages/HomePage.vue')
            }
        ]
    }
]