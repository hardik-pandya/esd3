elasticsearchd3app.factory("simpleFactory", function(){
	var customers = [
	   {name:'Dave Jones', city:'Phoenix'},
	   {name:'Jamie Riley', city:'Atlanta'},
	   {name:'Heedy Wahlin', city:'Chandler'},
	   {name:'Thoma Winter', city:'Seattle'}
	];
	var factory = {};
	
	factory.getCustomers = function(){
	    return customers;
	};
	
	return factory;
});

