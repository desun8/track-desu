import { type RouteRecordRaw } from 'vue-router';

const MainPage = async () => import('../pages/MainPage.vue');
const ProjectPage = async () => import('../pages/ProjectPage.vue');
// const NotFoundPage = async () => import('2_pages/NotFoundPage');

export const enum AppRoutes {
  MAIN = 'main',
  PROJECT = 'project',
  // NOT_FOUNT = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PROJECT]: '/project/', // + :id
  // [AppRoutes.NOT_FOUNT]: '/:pathMatch(.*)*',
};

export const routes: RouteRecordRaw[] = [
  {
    path: RoutePath.main,
    component: MainPage,
  },
  {
    path: `${RoutePath.project}:id`,
    component: ProjectPage,
    meta: { authOnly: true },
  },
  // {
  //   path: RoutePath.not_found,
  //   component: NotFoundPage,
  // },
];
