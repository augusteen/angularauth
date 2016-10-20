function ErrorMessage(){
	return {
		restrict : 'A',
		compile: function($element,$attrs){

			$element.addClass('error');
			console.log(1);
			return {
				pre: function($scope,$element,$attrs){

				},
				post: function($scope,$element,$attrs){
					$element.addClass('error--' + $attrs.type);
				}
			}
			// return function postLink($scope,$element,$attrs){
			// 	$element.addClass('error--' + $attrs.type);
			// }
		}
	};
}

angular.module('cookbook')
	.directive('errorMessage',ErrorMessage);