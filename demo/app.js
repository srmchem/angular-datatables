(function(angular) {
    'use strict';
    angular.module('datatablesSampleApp', ['datatables', 'ui.bootstrap']).
    controller('sampleCtrl', function($scope, DTOptionsBuilder, DTColumnBuilder) {
        $scope.dtOptions = DTOptionsBuilder.fromSource('data.json');
        $scope.dtColumns = [
            DTColumnBuilder.newColumn('id').withLabel('ID').withClass('text-danger'),
            DTColumnBuilder.newColumn('firstName').withLabel('First name'),
            DTColumnBuilder.newColumn('lastName').withLabel('Last name').setVisible(false)
        ];
    });
})(angular);