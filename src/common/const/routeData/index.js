import lazyComponent from 'components/lazyComponent';

const routeData = [
  {
    key: 'home',
    label: '首页',
    path: '/',
    component: lazyComponent('home'),
    isAuth: true,
    children: [],
  },
];

export default routeData;
