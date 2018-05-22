# validate.js
form validate
function validate(option){

	var args = Array.prototype.slice.call(arguments);
	
	args.forEach(function(options,index){
		new Validate()
	});
}

var Validate = function(options){
	this.options = options
    this.el = document.querySelector(options.el);
	this.type = options.type;
	this.event = options.event;
	this.callBack = options.callBack;

	this.init();
}

Validate.prototype.init = function(){
	this.el
}
