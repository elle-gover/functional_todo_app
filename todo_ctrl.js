"use strict";

//Controller
function ToDoCtrl() {
    const vm = this;
    vm.todo = [ // to-do list objects here
        {
            task: "Walk the cat",
            complete: true
        },
        {
            task: "Pay the bills",
            complete: false
        },
        {
            task: "Drink more water",
            complete: false
        },
        {
            task: "Call mom",
            complete: true
        }
    ];
    
    //new task added / pushed to the controller
    vm.addTask = () => {
    vm.todo.push({
        task: vm.newTask,
        complete: false
    });
    vm.newTask = "";
    }
    
    //removeTask function splices / removes when X is clicked
    vm.removeTask = (index) => {
        //splice task from the array
        vm.todo.splice(index, 1);
      };

     //function that changes item to be strikethru when 'Complete' button is clicked
    vm.completeTask = (index) => {
        console.log('hello');
       vm.todo[index].complete = true;
        }
        
    
 }

angular
    .module("todoApp")
    .controller("ToDoCtrl", ToDoCtrl);