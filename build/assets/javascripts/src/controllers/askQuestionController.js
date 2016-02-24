/**
 * Created by hari on 10/20/15.
 */

'use strict';

require('../scss/expertPages.scss');

/**
 * Controller for the initial page.
 * @param $scope
 * @constructor
 * @ngInject
 */
function askQuestionController($state, $scope, $timeout, blueEconomics) {
    blueEconomics.categories.getCategories().then(function(data){
        $scope.categories = data;
    });
}

module.exports = askQuestionController;
