import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		var url = 'http://localhost:1661/Bicycles(' + params.id + ')';
		var bicycle = Ember.$.getJSON(url);
		url = 'http://localhost:1661/Histories(' + params.id + ')';
		var history = Ember.$.getJSON(url).then(function(data) {
			return data.value;
		});
		url = 'http://localhost:1661/Departments';
		var deps = Ember.$.getJSON(url).then(function(data) {
			return data.value;
		});
		
		var promises = {
			bicycle: bicycle,
			history: history,
			deps: deps
		};

		return Ember.RSVP.hash(promises).then(function(data) {
			return data;
		});
	},
	
	actions: {
		getBic(params) {
			var url = 'http://localhost:1661/Histories';
			var data = {
				"@odata.type":"TestApp.Models.History",
				"BicId": params.Id, 
				"Start_dep": params.DepId
			};
			
			Ember.$.ajax({
			   type: "POST",                                     
			   url: url,    		   
			   data: JSON.stringify(data), 
			   contentType: "application/json"
			});
			
			url = 'http://localhost:1661/Bicycles(' + params.Id + ')';
			data = {
				"@odata.type":"TestApp.Models.Bicycle",
				"Status": true
			};
			
			Ember.$.ajax({
				type: "PATCH",                                     
				url: url,    		   
				data: JSON.stringify(data), 
				contentType: "application/json"
			});
			
			alert("Success! You got that bicycle");
			this.transitionTo('bics.bic', params.Id);
		},
		
		returnBic(params) {
			this.transitionTo('return.bic', params.Id);
		}
	}	
});
