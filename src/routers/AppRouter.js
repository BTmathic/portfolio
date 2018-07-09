import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';

import BlogAuthenticated from '../components/BlogAuthenticated';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import EditBlogPost from '../components/EditBlogPost';
import AddBlogPost from '../components/AddBlogPost';
import LoginPage from '../components/LoginPage';
import BlogPost from '../components/BlogPost';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Blog from '../components/Blog';

// take snippet and have title/separate button Link to BlogPost with id
// style snippet with post background/other styles?
// edit button the only way to get to edit with id

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path='/' component={DashboardPage} exact={true} />
        <Route path='/blog' component={Blog} exact={true} />
        <Route path='/read/:id' component={BlogPost} />
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