# Teams ToDo

A collaborative Teams ToDo app where users can create, assign, and manage tasks within a team. Inspired by JIRA, this app features a modern Kanban board, filters, and a responsive, intuitive UI.

## 🚀 Features

- **Authentication:** Signup & Login with email and password
- **User Dashboard:**
  - View tasks assigned to you and tasks you’ve assigned to others
  - Filter by status (ToDo, In Progress, Done) and deadline (approaching in 3 days)
- **Task Management:**
  - Create, edit, and assign tasks
  - Fields: Title, Description, Due Date, Priority, Assignee, Status
  - Form validations
- **Kanban Board:**
  - Drag-and-drop tasks between columns (ToDo, In Progress, Done)
  - Visual cues for deadlines and priorities
- **Responsive Design:** Works beautifully on desktop and mobile

## 🛠️ Tech Stack

- **Frontend:** React.js, Redux, Material-UI (MUI)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 2. Setup the server

```bash
cd server
npm install
# Create a .env file with your MongoDB URI and desired PORT
# Example:
# MONGO_URI=mongodb://localhost:27017/tododb
# PORT=5001
npm start
```

### 3. Setup the client

```bash
cd ../client
npm install
npm start
```

The client will run on [http://localhost:3000](http://localhost:3000) by default.

## 🌐 Demo

- **Live URL:** project-gamma-ruby.vercel.app
- **GitHub Repo:** https://github.com/AameyaDevansh


## 📄 Assignment Notes

- All registered users are considered team members.
- UI/UX is inspired by JIRA, with a focus on clarity and ease of use.
- Deadline approaching tasks are visually highlighted.
- Fully responsive and mobile-friendly.
