import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.example1.viewmodel({
  share: 'clock',

  updateTime() {
    this.initialTime(new Date());
  }
});
Template.example2.viewmodel({
  share: 'clock',

  updateTime() {
    this.initialTime(new Date());
  }
});