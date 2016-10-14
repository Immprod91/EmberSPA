import Ember from 'ember';

export default Ember.Controller.extend({
	newBic: '',
	disabled: Ember.computed('newBic', function() {
		return Ember.isEmpty(this.get('newBic'));
	})
});

