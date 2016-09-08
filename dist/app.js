'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngMaterial', 'ngAnimate','ui.router',
  'components'
]).
config(['$stateProvider','$urlRouterProvider','$mdThemingProvider',function($stateProvider,$urlRouterProvider,$mdThemingProvider) {


	$mdThemingProvider.theme('docs-dark')
    .primaryPalette('blue')
    .accentPalette('orange');

	console.log('root app reload true');
    // $locationProvider.hashPrefix('!');

    $urlRouterProvider.otherwise('/login');
    // $routeProvider.otherwise({ redirectTo: '/view1' });
	$stateProvider.state('login',{
		url:'/login',
		templateUrl: 'components/ux/login.html'
	})
	.state('home',{
		url:'/home',
		templateUrl: 'components/ux/main.html'	
	});

		// $state.go('login');
}]);
;angular
	.module('components',['ui.router'])
	.config(['$stateProvider',function($stateProvider){
		// console.log($stateProvider;

		// $stateProvider.state('login',{
		// 	url:'/login',
		// 	templateUrl: 'login/login.html'
		// });
	}]);;var login = {
	bindings: {
	 // user: '<',
  //   button: '@',
  //   message: '@',
    onSubmit: '&'
  },
    templateUrl: 'components/login/login.html',
    controller: 'LoginController'
}

angular
    .module('components')
    .component('loginForm',login);
;function LoginController() {
    var ctrl = this;

    ctrl.submitForm = function() {
    	console.log('clicked submit')
    };

}

angular
    .module('components')
    .controller('LoginController', LoginController);
;angular.module('templates-dist', ['../app/components/login.html', '../app/components/login/login.html', '../app/components/ux/login.html', '../app/components/ux/main.html', '../app/components/ux/navbar.html', '../app/index-async.html', '../app/index.html']);

angular.module("../app/components/login.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/login.html",
    "<md-content layout=\"vertical\" flex id=\"content\">\n" +
    "    <div layout=\"row\" layout-align=\"center center\" layout-fill>\n" +
    "        <md-whiteframe class=\"md-whiteframe-z1\" layout=\"column\" flex=\"30\" layout-padding>\n" +
    "            <md-content md-theme=\"docs-dark\">\n" +
    "                <md-input-container>\n" +
    "                    <label>Email</label>\n" +
    "                    <input ng-model=\"user.email\">\n" +
    "                </md-input-container>\n" +
    "                <md-input-container>\n" +
    "                    <label>Password</label>\n" +
    "                    <input ng-model=\"user.password\" type=\"password\">\n" +
    "                </md-input-container>\n" +
    "                <md-input-container layout-align=\"center center\">\n" +
    "                    <div layout=\"row\" layout-sm=\"column\" layout-margin>\n" +
    "                        <md-button class=\"md-raised\" flex=\"50\" flex-sm=\"100\">Login</md-button>\n" +
    "                        <md-button class=\"md-raised md-primary\" flex=\"50\" flex-sm=\"100\">Register</md-button>\n" +
    "                    </div>\n" +
    "                </md-input-container>\n" +
    "            </md-content>\n" +
    "        </md-whiteframe>\n" +
    "    </div>\n" +
    "</md-content>\n" +
    "");
}]);

angular.module("../app/components/login/login.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/login/login.html",
    "<div laylayout=\"column\" layout-align=\"center center\">\n" +
    "<div flex>\n" +
    "<md-content  flex id=\"content\">\n" +
    "    <div layout=\"row\" layout-align=\"center center\" layout-fill  style=\"min-height: 500px\">\n" +
    "        <md-whiteframe class=\"md-whiteframe-z1\" layout=\"column\" flex=\"30\" layout-padding>\n" +
    "            <form name=\"loginForm\" ng-submit=\"$ctrl.submitForm();\">\n" +
    "            <md-content md-theme=\"docs-dark\">\n" +
    "                <md-input-container>\n" +
    "                    <label>Email</label>\n" +
    "                    <input ng-model=\"user.email\">\n" +
    "                </md-input-container>\n" +
    "                <md-input-container>\n" +
    "                    <label>Password</label>\n" +
    "                    <input ng-model=\"user.password\" type=\"password\">\n" +
    "                </md-input-container>\n" +
    "                <md-input-container layout-align=\"center center\">\n" +
    "                    <div layout=\"row\" layout-sm=\"column\" layout-margin>\n" +
    "                        <md-button class=\"md-raised\" flex=\"50\" flex-sm=\"100\">Login</md-button>\n" +
    "                        <md-button class=\"md-raised md-primary\" flex=\"50\" flex-sm=\"100\">Register</md-button>\n" +
    "                    </div>\n" +
    "                </md-input-container>\n" +
    "            </md-content>\n" +
    "            </form>\n" +
    "        </md-whiteframe>\n" +
    "    </div>\n" +
    "</md-content>\n" +
    "</div>\n" +
    "<div>\n" +
    "");
}]);

angular.module("../app/components/ux/login.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/ux/login.html",
    "<login-form></login-form>");
}]);

angular.module("../app/components/ux/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/ux/main.html",
    "<div ui-view> \n" +
    "	Augusteen\n" +
    "</div>");
}]);

angular.module("../app/components/ux/navbar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/ux/navbar.html",
    "<div ng-controller=\"AppCtrl\" ng-cloak>\n" +
    "  <md-content class=\"md-padding\">\n" +
    "    <md-nav-bar md-selected-nav-item=\"currentNavItem\" nav-bar-aria-label=\"navigation links\">\n" +
    "      <md-nav-item md-nav-click=\"goto('page1')\" name=\"page1\">Page One</md-nav-item>\n" +
    "      <md-nav-item md-nav-click=\"goto('page2')\" name=\"page2\">Page Two</md-nav-item>\n" +
    "      <md-nav-item md-nav-click=\"goto('page3')\" name=\"page3\">Page Three</md-nav-item>\n" +
    "      <!-- these require actual routing with ui-router or ng-route, so they won't work in the demo\n" +
    "      <md-nav-item md-nav-sref=\"app.page4\" name=\"page4\">Page Four</md-nav-item>\n" +
    "      <md-nav-item md-nav-href=\"#page5\" name=\"page5\">Page Five</md-nav-item>\n" +
    "      -->\n" +
    "    </md-nav-bar>\n" +
    "    <div class=\"ext-content\">\n" +
    "      External content for `<span>{{currentNavItem}}</span>`\n" +
    "    </div>\n" +
    "  </md-content>");
}]);

angular.module("../app/index-async.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/index-async.html",
    "<!doctype html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "  <meta charset=\"utf-8\">\n" +
    "  <link rel=\"stylesheet\" href=\"bower_components/html5-boilerplate/dist/css/normalize.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"bower_components/html5-boilerplate/dist/css/main.css\">\n" +
    "  <style>\n" +
    "    [ng-cloak] {\n" +
    "      display: none;\n" +
    "    }\n" +
    "  </style>\n" +
    "  <script src=\"bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js\"></script>\n" +
    "  <script>\n" +
    "    // include angular loader, which allows the files to load in any order\n" +
    "    //@@NG_LOADER_START@@\n" +
    "    // You need to run `npm run update-index-async` to inject the angular async code here\n" +
    "    //@@NG_LOADER_END@@\n" +
    "\n" +
    "    // include a third-party async loader library\n" +
    "    /*!\n" +
    "     * $script.js v1.3\n" +
    "     * https://github.com/ded/script.js\n" +
    "     * Copyright: @ded & @fat - Dustin Diaz, Jacob Thornton 2011\n" +
    "     * Follow our software http://twitter.com/dedfat\n" +
    "     * License: MIT\n" +
    "     */\n" +
    "    !function(a,b,c){function t(a,c){var e=b.createElement(\"script\"),f=j;e.onload=e.onerror=e[o]=function(){e[m]&&!/^c|loade/.test(e[m])||f||(e.onload=e[o]=null,f=1,c())},e.async=1,e.src=a,d.insertBefore(e,d.firstChild)}function q(a,b){p(a,function(a){return!b(a)})}var d=b.getElementsByTagName(\"head\")[0],e={},f={},g={},h={},i=\"string\",j=!1,k=\"push\",l=\"DOMContentLoaded\",m=\"readyState\",n=\"addEventListener\",o=\"onreadystatechange\",p=function(a,b){for(var c=0,d=a.length;c<d;++c)if(!b(a[c]))return j;return 1};!b[m]&&b[n]&&(b[n](l,function r(){b.removeEventListener(l,r,j),b[m]=\"complete\"},j),b[m]=\"loading\");var s=function(a,b,d){function o(){if(!--m){e[l]=1,j&&j();for(var a in g)p(a.split(\"|\"),n)&&!q(g[a],n)&&(g[a]=[])}}function n(a){return a.call?a():e[a]}a=a[k]?a:[a];var i=b&&b.call,j=i?b:d,l=i?a.join(\"\"):b,m=a.length;c(function(){q(a,function(a){h[a]?(l&&(f[l]=1),o()):(h[a]=1,l&&(f[l]=1),t(s.path?s.path+a+\".js\":a,o))})},0);return s};s.get=t,s.ready=function(a,b,c){a=a[k]?a:[a];var d=[];!q(a,function(a){e[a]||d[k](a)})&&p(a,function(a){return e[a]})?b():!function(a){g[a]=g[a]||[],g[a][k](b),c&&c(d)}(a.join(\"|\"));return s};var u=a.$script;s.noConflict=function(){a.$script=u;return this},typeof module!=\"undefined\"&&module.exports?module.exports=s:a.$script=s}(this,document,setTimeout)\n" +
    "\n" +
    "    // load all of the dependencies asynchronously.\n" +
    "    $script([\n" +
    "      'bower_components/angular/angular.js',\n" +
    "      'bower_components/angular-route/angular-route.js',\n" +
    "      'app.js',\n" +
    "      'view1/view1.js',\n" +
    "      'view2/view2.js',\n" +
    "      'components/version/version.js',\n" +
    "      'components/version/version-directive.js',\n" +
    "      'components/version/interpolate-filter.js'\n" +
    "    ], function() {\n" +
    "      // when all is done, execute bootstrap angular application\n" +
    "      angular.bootstrap(document, ['myApp']);\n" +
    "    });\n" +
    "  </script>\n" +
    "  <title>My AngularJS App</title>\n" +
    "  <link rel=\"stylesheet\" href=\"app.css\">\n" +
    "</head>\n" +
    "<body ng-cloak>\n" +
    "  <ul class=\"menu\">\n" +
    "    <li><a href=\"#!/view1\">view1</a></li>\n" +
    "    <li><a href=\"#!/view2\">view2</a></li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <div ng-view></div>\n" +
    "\n" +
    "  <div>Angular seed app: v<span app-version></span></div>\n" +
    "\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("../app/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/index.html",
    "<!DOCTYPE html>\n" +
    "<!--[if lt IE 7]>      <html lang=\"en\" ng-app=\"myApp\" class=\"no-js lt-ie9 lt-ie8 lt-ie7\"> <![endif]-->\n" +
    "<!--[if IE 7]>         <html lang=\"en\" ng-app=\"myApp\" class=\"no-js lt-ie9 lt-ie8\"> <![endif]-->\n" +
    "<!--[if IE 8]>         <html lang=\"en\" ng-app=\"myApp\" class=\"no-js lt-ie9\"> <![endif]-->\n" +
    "<!--[if gt IE 8]><!--> <html lang=\"en\" ng-app=\"myApp\" class=\"no-js\"> <!--<![endif]-->\n" +
    "<head>\n" +
    "  <meta charset=\"utf-8\">\n" +
    "  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "  <title>My AngularJS App</title>\n" +
    "  <meta name=\"description\" content=\"\">\n" +
    "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
    "  <link rel=\"stylesheet\" href=\"../bower_components/html5-boilerplate/dist/css/normalize.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"../bower_components/html5-boilerplate/dist/css/main.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"app.css\">\n" +
    "  <script src=\"../bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js\"></script>\n" +
    "</head>\n" +
    "<body>\n" +
    "  <!--<ul class=\"menu\">\n" +
    "    <li><a href=\"#/home\">view1</a></li>\n" +
    "    <li><a href=\"#/login\">view2</a></li>\n" +
    "  </ul>\n" +
    "  -->\n" +
    "  \n" +
    "  <!--[if lt IE 7]>\n" +
    "      <p class=\"browsehappy\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade your browser</a> to improve your experience.</p>\n" +
    "  <![endif]-->\n" +
    "\n" +
    "  <div ui-view></div>\n" +
    "\n" +
    "  <!-- In production use:\n" +
    "  <script src=\"//ajax.googleapis.com/ajax/libs/angularjs/x.x.x/angular.min.js\"></script>\n" +
    "  -->\n" +
    "\n" +
    "  \n" +
    "  <script src=\"../bower_components/angular/angular.js\"></script>\n" +
    "  <script src=\"../bower_components/angular-route/angular-route.js\"></script>\n" +
    "  <script src=\"../bower_components/angular-ui-router/release/angular-ui-router.js\"></script>\n" +
    "  <script src=\"../bower_components/angular-aria/angular-aria.js\"></script>\n" +
    "  <script src=\"../bower_components/angular-messages/angular-messages.js\"></script>\n" +
    "  <script src=\"../bower_components/angular-animate/angular-animate.js\"></script>\n" +
    "  <script src=\"../bower_components/angular-material/angular-material.js\"></script>\n" +
    " \n" +
    "  <!--\n" +
    "  <script src=\"app.js\"></script>\n" +
    "  <script src=\"view1/view1.js\"></script>\n" +
    "  <script src=\"view2/view2.js\"></script>\n" +
    "  <script src=\"components/version/version.js\"></script>\n" +
    "  <script src=\"components/version/version-directive.js\"></script>\n" +
    "  <script src=\"components/version/interpolate-filter.js\"></script>\n" +
    "  -->\n" +
    "  <script type=\"text/javascript\" src=\"../dist/app.js\"></script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);
