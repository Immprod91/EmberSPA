import Ember from 'ember';

export default Ember.Controller.extend({
	newBic: '',
	disabled: Ember.computed('newBic', function() {
		return Ember.isEmpty(this.get('newBic'));
	}),
	sortOptions: [
		{ id: "Model:asc", name: "Sort by model (asc)" },
		{ id: "Model:desc", name: "Sort by model (desc)" },
		{ id: "Price:asc", name: "Sort by price (asc)" },
		{ id: "Price:desc", name: "Sort by price (desc)" },
		{ id: "Status:asc", name: "Sort by status (asc)" },
		{ id: "Status:desc", name: "Sort by status (desc)" }
	],
	sortProperties: ['Model:asc'],
	actions: {
		sortBy(property) {
			this.set('sortProperties', [property]);
		}
	},
	sortedBics: Ember.computed.sort('model.bics', 'sortProperties')
});

