// 'store' is the application name, then any dependencies (or an empty array) are passed in.
(function() {
  // Modules – Where our application components live.
  // Second parameter is an array where the dependencies for the module of the first parameter are specified (names of other modules).
  var app = angular.module('store', ['store-products']);

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

  var gems = [
    {
      name: 'Dodecahedron Gem',
      price: 2.95,
      description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
      images: [
        {
          full: 'images/dodecahedron.gif',
          thumb: 'images/dodecahedron-thumb.JPG'
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
