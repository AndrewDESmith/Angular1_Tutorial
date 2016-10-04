(function() {
  // New closure means that we need a new app variable to store our 'store-products' module.
  var app = angular.module('store-products', []);

  // Dash in HTML (product-title) translates to camelCase (productTitle) in JavaScript.
  app.directive('productTitle', function() {
    // Returns a directive definition object: a configuration object defining how your directive will work.
    return {
      // Specifiy type of directive (here, 'E' for element).
      restrict: 'E',
      // What template page will this directive load into?
      templateUrl: 'product-title.html'
    };
  });

  app.directive("productPanels", function() {
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller: function() {
        app.controller("PanelController", function() {
          // Initial value of tab is 1.
          this.tab = 1;
          // Update the tab's value and feed it to ng-click in the list.
          this.selectTab = function(setTab) {
            this.tab = setTab;
          };
          this.isSelected = function(checkTab) {
            return this.tab === checkTab;
          };
        });
      },
      // Enables use of panels as our Controller alias, without having to specify it in our index.html when using our templateUrl.
      controllerAs: 'panels'
    };
  });
})();
