import Home from '../pages/Home';
import Posts from '../pages/Posts';
import PostDetails from '../pages/Posts/PostList/PostItem/PostDetails';
import Statistic from '../pages/Statistic';
import NoMatch from '../pages/NoMatch';

export const RouterConfig = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/posts',
    component: Posts,
  },
  {
    path: '/posts/:id',
    component: PostDetails,
  },
  {
    path: '/statistic',
    component: Statistic,
  },
  {
    path: '*',
    component: NoMatch,
  },
];
