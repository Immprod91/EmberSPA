import Ember from 'ember';


export default Ember.Route.extend({  
	model() {
		var url = 'http://localhost:1661/Departments';
		return Ember.$.getJSON(url).then(function(data) {
			return data.value;
		});
	},
	
	actions: {
		createDep() {
			var url = 'http://localhost:1661/Departments';
			var data = {
				"@odata.type":"TestApp.Models.Department",
				"Name": this.get('controller').get('newDep'), 
				"Address": "Default Address",
				"Email": "Default Email",
				"Phone": "Default Phone"
			};
			
			Ember.$.ajax({
				type: "POST",                                     
				url: url,    		   
				data: JSON.stringify(data), 
				contentType: "application/json"
			});
			
			this.get('controller').set('newDep', '');
			this.transitionTo('deps');
		}
	}
});
