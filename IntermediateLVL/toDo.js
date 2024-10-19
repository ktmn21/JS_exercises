var todoList = {
    tasks: {},

    addTask(task){
        this.tasks[task] = false;
    },

    completed(task){
        if (this.tasks[task] !== undefined) {
            this.tasks[task] = true;
        }else{
            console.log(`the task ${task} was not included!`);
        }

    },

    showTasks(){
        for(var task in this.tasks){
            var status;
            if (this.tasks[task]){
                status = "completed";
            }else{
                status = "not completed";
            }

            console.log(`${task}: ${status}`);
        }
    }
};

todoList.addTask("Do Hw");
todoList.addTask("take Medicine");
todoList.addTask("Go to gym");
todoList.showTasks()
todoList.completed("Do Hw")
todoList.showTasks()