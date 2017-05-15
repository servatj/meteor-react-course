import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';


// the callback in startup methos is run when the dom is ready
Meteor.startup(function (){
  let jsx = <p>This is from main.js client</p>;
  ReactDom.render(jsx, document.getElementById('app'));
});