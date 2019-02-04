import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import App from '../imports/ui/app';
import Login from '../imports/ui/Login';
import LoginBox from '../imports/ui/login-page';

Meteor.startup(() => {
    ReactDOM.render(<LoginBox />, document.getElementById('app'));
});