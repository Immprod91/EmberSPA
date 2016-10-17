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
		controller.set('model', model.bic.Model);
		controller.set('price', model.bic.Price);
		controller.set('status', model.bic.Status);
		controller.set('dep', model.bic.DepId);
		controller.set('bic', model.bic);
		controller.set('deps', model.deps);
	},
	
	actions: {		
		changeBic(params) {	
			var url = 'http://localhost:60837/Bicycles(' + params + ')';
			var data = {
				"@odata.type":"TestApp.Models.Bicycle",
				"DepId": this.controllerFor('bics_edit.bic').get('dep'),
				"Model": this.controllerFor('bics_edit.bic').get('model'),
				"Price": this.controllerFor('bics_edit.bic').get('price'),
				"Status": this.controllerFor('bics_edit.bic').get('status')	
			};
			
			Ember.$.ajax({
				type: "PATCH",                                     
				url: url,    		   
				data: JSON.stringify(data), 
				contentType: "application/json"
			});
			
			var formData = new FormData();
			formData.append('file', $('#file')[0].files[0]);
			
			Ember.$.ajax({
				type: "POST",                                     
				url: 'http://localhost:60837/Bicycles/Default.PostLogo(id=' + params + ')',    		   
				data: formData,
				contentType: false,
				enctype: 'multipart/form-data',
				processData: false
			});
			
			this.transitionTo('bics.bic', params);	
		},
		
		cancel(params) {
			this.transitionTo('bics.bic', params);
		},
		
		deleteBic(params) {
			var url = 'http://localhost:60837/Bicycles(' + params + ')';
			
			Ember.$.ajax({
				type: "DELETE",                                     
				url: url
			});
			
			this.transitionTo('bics');
		}
	}
});
