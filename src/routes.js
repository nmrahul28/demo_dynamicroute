import {Home} from './Home.js';
import {Contact} from './Contact.js';
import {About} from './About.js';
import {filter} from './filter.js';
import {Showfilter} from './show_filters.js';
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
    },
    {
        path:'/filter',
        component:filter
    },
    {
        path:'/show_filter',
        component:Showfilter
    }
];

export const cities=[
    'Hyderabad', 'Gurugram', 'Pune', 'Banglore', 'chennai', 'Mumbai', 'Delhi'
]