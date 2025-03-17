CLI To-Do App

A simple command-line To-Do application built with **Node.js** and **Commander.js** for managing tasks using a JSON file.

---
📚 Instructions to Run the Program

1. Install Node.js

Before running the program, you need to have Node.js installed on your system.

Download and Install Node.js

Visit Node.js official website

Download the LTS (Long-Term Support) version for your OS.

Install it by following the setup instructions.

After installation, verify by running:

node -v

This should display the installed Node.js version.

2. Clone the Repository

If you haven’t already, clone the project from GitHub:

git clone https://github.com/YOUR_GITHUB_USERNAME/cli-todo-app.git
cd cli-todo-app

3. Install Dependencies

Run the following command to install the required packages:

npm install

4. Run the Application

You can now use the CLI commands to manage your tasks.

Add a Task

node index.js addTask 1 "Go to Gym" "16 March 2025"

List All Tasks

node index.js listTasks

Delete a Task

node index.js delTask 1


Help
use node index.js -h for help

Features

- **Add a Task** with ID, task description, and date.
- **Delete a Task** by ID.
- **List All Tasks** in the JSON file.
- **Persistent Storage** using `tasks.json`.
