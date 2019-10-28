var ToDo = angular.module('ToDo',[]);

ToDo.controller('todoController',function($scope){
    $scope.todos = [
        { title:'build a todo app','done' : false}

    ];

$scope.addTodo = function(){
    $scope.todos.push({'title': $scope.newtodo,'done': false})
    $scope.newtodo = "";
}

$scope.clearCompleted = function(){
    $scope.todos = $scope.todos.filter(function(item){
        return !item.done
    })
}

});

