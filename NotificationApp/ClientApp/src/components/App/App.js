import React from 'react';
import { Route } from 'react-router-dom';

//Components
import Home from '../Home/Home';
import Layout from '../Master/Layout';
import NotificationList from '../Notification/NotificationList';

//Reference
import { PageRoute } from '../../utils/constants/index';

function App() {
    return (
        <Layout>
            <Route exact path={PageRoute.HomePage} component={Home}></Route>
            <Route exact path={PageRoute.NotificationListPage} component={NotificationList}></Route>
        </Layout>
    );
}

export default App;