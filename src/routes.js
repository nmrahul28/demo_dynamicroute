import {Home} from './Home.js';
import {Contact} from './Contact.js';
import {About} from './About.js';
export const Routes=[
    {
        path:'/',
        component:Home
    },
    {
        path:'/about',
        component:About
    },
    {
        path:'/contact',
        component:Contact
    }
]