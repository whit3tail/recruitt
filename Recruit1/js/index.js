(function () {
    angular.module('app', []).controller('pageCtrl', [function () {
        var vm = this;
        vm.items= [];
      
        vm.add = function (todo) {
            if (todo!=null && todo!='') {
            vm.items.push({
                name: todo
            });

            }
           
        }

        vm.success = function (index) {
            vm.items.splice(index, 1);
        }
    }])
})();