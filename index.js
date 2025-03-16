// let fs =require('fs');

// function wordCounter(fileName) {
//     fs.readFile(fileName, "utf-8", function (err,data){
//         let words=0;
//         for (let i=0; i<data.length; i++){
//             if (data [i]===" ") {
//                 words++;
//             }
//         }
//         console.log(words+1);
//     })
// }

// wordCounter("wordCounter.txt");

//assignment 1

// const fs = require('fs');
// const { Command } = require('commander');
// const program = new Command();

// program
//   .name('counter')
//   .description('CLI to do file based tasks')
//   .version('0.8.0');

// program.command('count')
//   .description('Count the number of words in a file')
//   .argument('<file>', 'file to count')
//   .action((file) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         const words = data.split(' ').length;
//         console.log(`There are ${words} words in ${file}`);
//       }
//     });
//   });

// program.parse();


//assignment 2

const fs = require('fs');
const { Command } = require('commander');
const program = new Command();
const filePath = 'tasks.json';

function loadTasks() {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    };


function saveTasks (tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf8');
}


program
  .name('ToDoApp')
  .description('CLI to do file based tasks')
  .version('0.0.1');

program.command('addTask')
  .description('Adds new Task')
  .argument("taskId", 'Id of the Task in Array')
  .argument("newTask", 'New Task to be added')
  .argument("taskDate", 'Date on which Task is to be Added')
  .action((taskId,newTask,taskDate) => {    
    let taskList= loadTasks();
    taskList.push({
        ID : taskId,
        Date :taskDate,
        Task : newTask
    })
    saveTasks(taskList);
    console.log('Task added successfully!', taskList);
  });

program.command('delTask')
  .description('Deletes Task by ID')
  .argument("taskId", 'Id of the Task in Array to be deleted')
  .action((taskId) => {
    let taskList= loadTasks();
    let indexOfDelTask = taskList.findIndex(task => task.ID === taskId);
    taskList.splice(indexOfDelTask, 1);
    saveTasks(taskList);

   
  });

program
    .command('listTasks')
    .description('List all tasks')
    .action(() => {
        let tasks = loadTasks();
        console.log('Your Tasks:', tasks);
    });
program.parse();
