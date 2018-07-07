import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';

import BlogAuthenticated from '../components/BlogAuthenticated';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import EditBlogPost from '../components/EditBlogPost';
import AddBlogPost from '../components/AddBlogPost';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Blog from '../components/Blog';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path='/' component={DashboardPage} exact={true} />
        <Route path='/blog' component={Blog} exact={true} />
        <PublicRoute path='/login' component={LoginPage} exact={true} />
        <PrivateRoute path='/create' component={AddBlogPost} />
        <PrivateRoute path='/edit/:id' component={EditBlogPost} />
        <PrivateRoute path='/blog-auth' component={BlogAuthenticated} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;