// 'store' is the application name, then any dependencies (or an empty array) are passed in.
(function() {
  // Modules – Where our application components live.
  var app = angular.module('store', []);

  // Controllers – Where we add application behavior.
  app.controller('StoreController', function() {
    // Set a property of this controller to contain the gem object, in order to be able to access in the index.html page (pass it to the view):
    this.products = gems;
  });

  app.controller("PanelController", function() {
    this.tab = 1;
    
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller("ReviewController", function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      // Reset the this.review to a new JS object so that the form removes previous values (live previewed) upon submission.
      this.review = {};
    };
  });

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
      // Enables use of panels as our Controller alias.
      controllerAs: 'panels'
    };
  });

  var gems = [
    {
      name: 'Dodecahedron Gem',
      price: 2.95,
      description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
      images: [
        {
          full: 'images/dodecahedron.gif',
          thumb: ''
        },
        {
          full: 'images/dodecahedron2.gif',
          thumb: ''
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: "joe@thomas.com"
        },
        {
          stars: 1,
          body: "They shipped me a piece of plastic!",
          author: "tim@hater.com"
        }
      ],
      canPurchase: true,
      soldOut: true
    },
    {
      name: "Pentagonal Gem",
      price: 5.95,
      description: "Origin of the Pentagonal Gem is unknown, hence its low value.  It has a very high shine and 12 sides, however.",
      images: [
        {
          full: 'images/pentagon.gif',
          thumb: ''
        },
        {
          full: 'images/pentagon2.png',
          thumb: ''
        }
      ],
      reviews: [],
      canPurchase: false
    }
  ];
})();
