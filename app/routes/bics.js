import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		var url = 'http://localhost:60837/Bicycles';
		return Ember.$.getJSON(url).then(function(data) {
			return data.value;
		});
	}
});
