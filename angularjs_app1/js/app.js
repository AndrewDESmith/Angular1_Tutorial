// 'store' is the application name, then any dependencies (or an empty array) are passed in.

(function() {
  // Modules – Where our application components live.
  var app = angular.module('store', []);

  // Controllers – Where we add application behavior.
  app.controller('StoreController', function() {
    // Set a property of this controller to contain the gem object, in order to be able to access in the index.html page (pass it to the view):
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
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
      canPurchase: false
    }
  ];

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
})();
