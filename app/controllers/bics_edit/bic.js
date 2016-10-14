import Ember from 'ember';

export default Ember.Controller.extend({
	model: '',
	price: '',
	status: '',
	dep:'',
	actions: {
		selectDep(dep) {
			this.set('dep', dep);
		},
		
		selectStatus(status) {
			this.set('status', status);
		}
	}
});

