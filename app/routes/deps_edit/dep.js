import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		var url = 'http://localhost:60837/Departments(' + params.id + ')';
		return Ember.$.getJSON(url);
	},
	
	setupController: function(controller, model) {
		controller.set('name', model.Name);
		controller.set('address', model.Address);
		controller.set('phone', model.Phone);
		controller.set('email', model.Email);
		controller.set('model', model);
	},
	
	actions: {	
		changeDep(params) {
			var url = 'http://localhost:60837/Departments(' + params + ')';
			var data = {
				"@odata.type":"TestApp.Models.Department",
				"Name": this.controllerFor('deps_edit.dep').get('name'),
				"Address": this.controllerFor('deps_edit.dep').get('address'),
				"Phone": this.controllerFor('deps_edit.dep').get('phone'),
				"Email": this.controllerFor('deps_edit.dep').get('email')	
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
				url: 'http://localhost:60837/Departments/Default.PostLogo(id=' + params + ')',    		   
				data: formData,
				contentType: false,
				enctype: 'multipart/form-data',
				processData: false
			});
	
			this.transitionTo('deps.dep', params);
		},
		
		cancel(params) {
			this.transitionTo('deps.dep', params);
		},
		
		deleteDep(params) {
			var url = 'http://localhost:60837/Departments(' + params + ')';
			
			Ember.$.ajax({
				type: "DELETE",                                     
				url: url
			});
			
			this.transitionTo('deps');
		}
	}
});
