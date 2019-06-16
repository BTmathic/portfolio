import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import EditBlogPost from '../components/EditBlogPost';
import AddBlogPost from '../components/AddBlogPost';
import LoadingPage from '../components/LoadingPage';
import LoginPage from '../components/LoginPage';
import BlogPost from '../components/BlogPost';
import Archives from '../components/Archives';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Blog from '../components/Blog';
import Tags from '../components/Tags';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path='/' component={DashboardPage} exact={true} />
        <Route path='/blog' component={Blog} exact={true} />
        <Route path='/loader' component={LoadingPage} exact={true} />
        <Route path='/archives/:id' component={Archives} />
        <Route path='/read/:id' component={BlogPost} />
        <Route path='/tags/:id' component={Tags} />
        <PublicRoute path='/login' component={LoginPage} exact={true} />
        <PrivateRoute path='/create' component={AddBlogPost} />
        <PrivateRoute path='/edit/:id' component={EditBlogPost} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;