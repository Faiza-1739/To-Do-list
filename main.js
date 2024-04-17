#! /usr/bin/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
//while(condition)
// {
//     let addTask = await inquirer.prompt([
//     {
//         name:"todo",
//         type:"input",
//         message:"What do you want to add in your Todos"
//     }
//     ,
//     {
//         name:"addMore",
//         type:'confirm',
//         message:"Do you want to add more?",
//         default:"false"
//     }
// ]);
// todos.push(addTask.todo);
// condition = addTask.addMore;
// console.log(todos);
// }
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choise",
                type: "list",
                message: "Select an option you want to do",
                choices: ["Add Task", "Delete Task", "Update Task", "View TodoList", "Exit"]
            }
        ]);
        if (option.choise === "Add Task") {
            await addTask();
        }
        else if (option.choise === "Delete Task") {
            await deleteTask();
        }
        else if (option.choise === "Veiw TodoList") {
            await veiwTask();
        }
        else if (option.choise === "Exit") {
            condition = false;
        }
    }
};
//function to add new task in todo list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task",
        }
    ]);
    todos.push(newTask.task);
    console.log(`\n ${newTask.task} Task add successfully in to do list`);
};
//function to veiw todo list
let veiwTask = async () => {
    console.log(`\n Your todo list: \n`);
    todos.forEach((task, index) => {
        console.log(`${index}: ${task}`);
    });
};
//function to delete a task in todo list
let deleteTask = async () => {
    await veiwTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index number of the task you want ot delete"
        }
    ]);
    let deletedTask = todos.splice(taskIndex.index, 1);
    console.log(`\n ${deletedTask} this task has been deleted successfully in your todo list`);
};
main();
