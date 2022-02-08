import { createRouter, createWebHashHistory } from "vue-router";
import isAutenticatedGuard from "./auth-guard";

const routes = [
  {
    path:'/',
    redirect:'/pokemon'
  },
  {
    path:'/pokemon',
    name:'pokemon',
    component:()=>import('../modules/pokemon/layouts/PokemonLayout'),
    children:[
        {
          path: "home",
          name:'pokemon-home',
          component: () =>
            import(
              /*webpackChunkName: "ListPage" */ "../modules/pokemon/pages/ListPage"
            ),
        },
        {
          path: "about",
          name:'pokemon-about',
          component: () =>
            import(
              /*webpackChunkName: "AboutPage" */ "../modules/pokemon/pages/AboutPage"
            ),
        },
        {
          path: "pokemonid/:id",
          name:'pokemon-id',
          component: () =>
            import(
              /*webpackChunkName: "PokemonPage" */ "../modules/pokemon/pages/PokemonPage"
            ),
            props:(route)=>{
              const id = Number(route.params.id);
              return isNaN(id) ?{id:1}:{id}
            }
        },
        {
          path:'',
          redirect:{name:'pokemon-about'}
        },
    ]
  },


  {
    path:'/dbz',
    beforeEnter:[isAutenticatedGuard],
    component:()=> import('../modules/dbz/layout/DragonBallLayout'),
    children:[
      {
        path:'characters',
        name:'dbz-characters',
        component:()=>import('../modules/dbz/pages/Characters')
      },
      {
        path:'about',
        name:'dbz-about',
        component:()=>import('../modules/dbz/pages/About')
      },
      {
        path:'',
        redirect:{name:'dbz-characters'}
      },
    ]
  },
  
  {
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /*webpackChunkName: "PokemonPage" */ "../modules/shared/pages/NoPageFound"
      ),
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
