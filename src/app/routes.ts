import { Home } from "./home/home";
import { Details } from "./details/details";
import { Routes } from "@angular/router";

const routeConfig: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home page',
    }, 
    {
        path: 'details/:id',
        component: Details,
        title: 'Home details'
    },
];

export default routeConfig;