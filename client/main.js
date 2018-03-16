// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
// import 'semantic-ui-css/semantic.min.css';

// import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

import React from 'react';
import { render } from 'react-dom';

import { Meteor } from 'meteor/meteor';

import 'semantic-ui-css/semantic.min.css';


import Application from '../imports/ui/App';

Meteor.startup(() => {
  render(<Application />, document.getElementById('render-target'));
});