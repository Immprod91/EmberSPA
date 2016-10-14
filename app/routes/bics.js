import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		var url = 'http://localhost:1661/Bicycles';
		return Ember.$.getJSON(url).then(function(data) {
			return data.value;
		});
	}
});
