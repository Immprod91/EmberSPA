import Ember from 'ember';

export default Ember.Controller.extend({
	date: '',
	time: '',
	dep:'',
	actions: {
		selectDep(dep) {
			this.set('dep', dep);
		}
	}
});

