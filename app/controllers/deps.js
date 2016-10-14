import Ember from 'ember';

export default Ember.Controller.extend({
	newDep: '',
	disabled: Ember.computed('newDep', function() {
		return Ember.isEmpty(this.get('newDep'));
	})
});

