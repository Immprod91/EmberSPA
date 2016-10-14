import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		var url = 'http://localhost:60837/Bicycles/Default.GetByDep(id=' + params.id + ')';
		var bicycles = Ember.$.getJSON(url).then(function(data) {
			return data.value;
		});
		url = 'http://localhost:60837/Departments('+ params.id + ')';
		var department = Ember.$.getJSON(url);
		
		var promises = {
			bics: bicycles,
			dep: department
		};

		return Ember.RSVP.hash(promises).then(function(data) {
			return data;
		});
	},
	
	actions: {
		createBic(params) {
			var url = 'http://localhost:60837/Bicycles';
			var data = {
				"@odata.type":"TestApp.Models.Bicycle",
				"Model": this.get('controller').get('newBic'), 
				"Price": "100",
				"DepId": params,
				"Status": false
			};
			
			Ember.$.ajax({
				type: "POST",                                     
				url: url,    		   
				data: JSON.stringify(data), 
				contentType: "application/json"
			});
			
			this.get('controller').set('newBic', '');
			this.transitionTo('deps.dep', params);
		}
	}	
});
