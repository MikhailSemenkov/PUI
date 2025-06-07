import React, { useEffect, useState } from 'react';
import HomePage from './pages/Home.js';
import TasksListPage from './pages/TasksList.js';
import CreateTaskPage from './pages/CreateTask.js';
import SingleTaskPage from './pages/SingleTask.js';
import AboutPage from './pages/About.js';
import ProfilePage from './pages/Profile.js';
import LoginPage from './pages/Login.js';
import RegisterPage from './pages/Register.js';
import NavigationBar from './components/NavigationBar';
import { Container, CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { getItem, setItem, updateUser } from './utils/LocalStorage.js';

// Router Component
const Router = ({ currentPath, navigate, user, onLogin, onUserUpdate, tasks, onTasksUpdate, currentTask, onCurrentTaskUpdate }) => {
  const routes = {
    '/': () => <HomePage navigate={navigate} isAuthorized={user != null} />,
    '/profile': () => <ProfilePage navigate={navigate} user={user} onUserUpdate={onUserUpdate} />,
    '/login': () => <LoginPage navigate={navigate} onLogin={onLogin} />,
    '/register': () => <RegisterPage navigate={navigate} />,
    '/about': () => <AboutPage navigate={navigate} />,
    '/tasks': () => <TasksListPage navigate={navigate} tasks={tasks} onTasksUpdate={onTasksUpdate} onCurrentTaskUpdate={onCurrentTaskUpdate} />,
    '/create-task': () => <CreateTaskPage navigate={navigate} tasks={tasks} onTasksUpdate={onTasksUpdate} />,
  };

  // Handle single task page route
  if (currentPath.startsWith('/task/')) {
    const taskId = currentPath.split('/task/')[1];
    return <SingleTaskPage taskId={taskId} navigate={navigate} tasks={tasks} onTasksUpdate={onTasksUpdate} task={currentTask} />;
  }

  const Component = routes[currentPath];
  return Component();
};

const myTheme = createTheme({
  palette: {
    background: {
      default: "#f2f6fc"
    },
    text: {
      default: "#000"
    }
  }
});

// Main App Component
export default function TodoApp() {
  const [currentPath, setCurrentPath] = useState('/');
  // const [user, setUser] = useState({ name: 'John Doe', email: 'john.doe@example.com' });
  const [user, setUser] = useState(() => {
    const item = getItem('currentUser');
    return item;
  })

  const [tasks, setTasks] = useState(() => {
      const item = getItem('tasks');
      return item? item : [
              {
                  id: 1,
                  title: 'Complete project proposal',
                  description: 'Write and submit the Q2 project proposal',
                  priority: 'High',
                  dueDate: '2024-06-15',
                  completed: false,
                  createdAt: '2024-06-01'
              },
              {
                  id: 2,
                  title: 'Buy groceries',
                  description: 'Get ingredients for weekend cooking',
                  priority: 'Medium',
                  dueDate: '2024-06-05',
                  completed: true,
                  createdAt: '2024-06-02'
              },
              {
                  id: 3,
                  title: 'Schedule dentist appointment',
                  description: 'Call dentist office for routine checkup',
                  priority: 'Low',
                  dueDate: '2024-06-20',
                  completed: false,
                  createdAt: '2024-06-03'
              }
          ];
  });
  
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {setItem('currentUser', user)}, [user]);

  useEffect(() => {setItem('tasks', tasks)}, [tasks]);

  const navigate = (path) => {
    setCurrentPath(path);
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  const handleLogin = (newUser) => {
    setUser(newUser);
    navigate('/tasks');
  };

  const handleUserUpdate = (oldEmail, newUser) => {
    updateUser(oldEmail, newUser);
    setUser(newUser);
    setItem('currentUser', user);
  };

  const handleTasksUpdate = (newTasks) => {
    setTasks(newTasks);
  };

  const handleCurrentTaskUpdate = (newTask) => {
    setCurrentTask(newTask);
  };

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline>
        <Container >
          <NavigationBar navigate={navigate} user={user} onLogout={handleLogout} />
          <Router currentPath={currentPath} navigate={navigate} user={user} onLogin={handleLogin} onUserUpdate={handleUserUpdate} tasks={tasks} onTasksUpdate={handleTasksUpdate} currentTask={currentTask} onCurrentTaskUpdate={handleCurrentTaskUpdate}/>
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}