# To Do List

A simple, responsive to-do list web app for organizing daily tasks and staying focused.

## Features

- Add new tasks
- Add tasks by clicking **ADD** or pressing `Enter`
- Mark tasks as complete
- Edit existing tasks
- Delete individual tasks
- Delete all completed tasks
- Save tasks in the browser using `localStorage`
- Responsive layout for desktop and mobile screens
- Includes a starter list of productivity tasks for first-time use

## Built With

- HTML5
- CSS3
- Vanilla JavaScript
- Browser `localStorage` API

## Getting Started

No build tools or dependencies are required.

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   ```

2. Open the project folder.

3. Open `index.html` in your browser.

For local development, you can also use the VS Code **Live Server** extension or any static file server.

## Usage

1. Enter a task in the input field.
2. Click **ADD** or press `Enter`.
3. Use the checkbox to mark a task as complete.
4. Use **Edit** to update a task.
5. Use **Delete** to remove an individual task.
6. Use the top **Delete** button to remove all completed tasks.
7. Tasks are automatically saved in your browser. The **Save** button can be used to save them manually.

## Project Structure

```text
To Do List/
├── index.html   # Application markup
├── style.css    # Layout, colors, and responsive styles
├── script.js    # Task management and localStorage logic
└── README.md    # Project documentation
```

## Data Storage

Tasks are stored locally in the browser under the `todo_tasks` key. No server or database is used, so tasks are specific to the browser and device where the app is opened.

## License

This project is available for personal and educational use.
