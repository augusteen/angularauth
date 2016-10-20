  function ErrorController(){

  	this.list =[{
  		message : 'Oh no error occured',
  		type : 'error'
  	},{
  		message : 'Make sure you have filled all the fields',
  		type : 'warning' 
  	},{
  		message : 'This is invalid',
  		type : 'invalid'
  	}]
 
}

angular.module('cookbook')
	.controller('ErrorController', ErrorController);