angular
  .module('dgmTodo', [
    'dgmTodo.auth',
    'dgmTodo.users',
  ])
  .value('dgmTodoHost', 'http://dgm-todo.herokuapp.com')
  .config([
     '$httpProvider',
     function($httpProvider){
       $httpProvider.defaults.withCredentials = true;
     }
  ]);
