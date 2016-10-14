import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {	
		var url = 'http://localhost:60837/Bicycles(' + params.id + ')';
		var bic = Ember.$.getJSON(url);
		url = 'http://localhost:60837/Departments';
		var deps = Ember.$.getJSON(url).then(function(data) {
		  return data.value;
		});
		
		var promises = {
			bic: bic,
			deps: deps
		};
		
		return Ember.RSVP.hash(promises).then(function(data) {
			return data;
		});
	},
	
	setupController: function(controller, model) {
		controller.set('date', null);
		controller.set('time', null);
		controller.set('dep', model.bic.DepId);
		controller.set('bic', model.bic);
		controller.set('deps', model.deps);
	},
	
	actions: {
		cancel(params) {
			this.transitionTo('bics.bic', params);
		},
		
		returnBic(params) {
			var date = "" + this.controllerFor('return.bic').get('date');
			var time = "" + this.controllerFor('return.bic').get('time');
			var dep = this.controllerFor('return.bic').get('dep');
			
			if (time != "null" && date != "null")
			{
				var time_str =	time.split(' ')[4];
				time_str = time_str.substring(0, time_str.length - 3);
				
				var date_str = date.split(' ')[2] + '.';
				switch (date.split(' ')[1]) {
				  case "Jan": date_str += "01"; break;
				  case "Feb": date_str += "02"; break;
				  case "Mar": date_str += "03"; break;
				  case "Apr": date_str += "04"; break;
				  case "May": date_str += "05"; break;
				  case "Jun": date_str += "06"; break;
				  case "Jul": date_str += "07"; break;
				  case "Aug": date_str += "08"; break;
				  case "Sep": date_str += "09"; break;
				  case "Oct": date_str += "10"; break;
				  case "Nov": date_str += "11"; break;
				  case "Dec": date_str += "12"; break;
				}
				date_str += '.' + date.split(" ")[3];
				
				var url = 'http://localhost:60837/Histories(' + params + ')';
				var data = {
					"@odata.type":"TestApp.Models.History",
					"End_date": date_str + ' ' + time_str,
					"End_dep": dep
				};
				
				Ember.$.ajax({
					type: "PATCH",                                     
					url: url,    		   
					data: JSON.stringify(data), 
					contentType: "application/json"
				});
				
				url = 'http://localhost:60837/Bicycles(' + params + ')';
				data = {
					"@odata.type":"TestApp.Models.Bicycle",
					"Status": false,
					"DepId": dep
				};
				
				Ember.$.ajax({
				   type: "PATCH",                                     
				   url: url,    		   
				   data: JSON.stringify(data), 
				   contentType: "application/json"
				});
				
				this.transitionTo('bics.bic', params);
			}
			else alert("Error: empty date/time");
		}
	}
});
