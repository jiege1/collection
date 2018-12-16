import React from 'react';
import css from './index.less';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import RouterData from 'common/const/routeData';

const buildRoute = (list, parentPath = '') => {
  return list.map(item => {
    if (item.children && item.children.length) {
      return buildRoute(item.children, item.path);
    }
    const props = {
      path: parentPath + item.path,
      component: item.component,
      exact: true,
    };
    return <Route key={`route_${item.key}`} {...props} />;
  });
};

export default function() {
  return (
    <div className={css.router}>
      <Router>
        <Switch>
          {buildRoute(RouterData)}
        </Switch>
      </Router>
    </div>
  );
};
