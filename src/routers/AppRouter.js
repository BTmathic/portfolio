import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import Blog from '../components/Blog';
import BlogAuthenticated from '../components/BlogAuthenticated';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import DashboardPage from '../components/DashboardPage';
import AddBlogPost from '../components/AddBlogPost';
import EditBlogPost from '../components/EditBlogPost';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path='/' component={DashboardPage} exact={true} />
        <PublicRoute path='/blog' component={Blog} exact={true} />
        <PublicRoute path='/create' component={AddBlogPost} />
        <PublicRoute path='/edit/:id' component={EditBlogPost} />
        <PrivateRoute path='/blog-auth' component={BlogAuthenticated} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;