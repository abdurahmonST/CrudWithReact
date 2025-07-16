import { useState } from 'react';
import { Route, Routes } from 'react-router';
import Main from './layout/Main';
import UsersForm from './pages/UsersPage/UsersForm';
import UsersList from './pages/UsersPage/UsersList';
import ProductsForm from './pages/ProductsPage/ProductsForm';
import ProductsList from './pages/ProductsPage/ProductsList';
import TasksForm from './pages/TasksPage/TasksForm';
import TasksList from './pages/TasksPage/TasksList';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState();
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Apple',
      quantity: 400,
      measurement: 'kilogram',
      price: 1.5,
    },
  ]);
  const [selectedUser, setSelectedUser] = useState();
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      age: 17,
    },
  ]);
  const [selectedTask, setSelectedTask] = useState();
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Complete Project',
      description: 'Finish the React project',
      status: 'in-progress',
      deadline: '2025-07-15',
    },
  ]);

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route
          path="users"
          element={
            <>
              <UsersForm setUsers={setUsers} selectedUser={selectedUser} />
              <UsersList
                users={users}
                setSelectedUser={setSelectedUser}
                deleteUser={handleDeleteUser}
              />
            </>
          }
        />
        <Route
          path="products"
          element={
            <>
              <ProductsForm setProducts={setProducts} selectedProduct={selectedProduct} />
              <ProductsList
                products={products}
                setSelectedProduct={setSelectedProduct}
                deleteProduct={handleDeleteProduct}
              />
            </>
          }
        />
        <Route
          path="tasks"
          element={
            <>
              <TasksForm setTasks={setTasks} selectedTask={selectedTask} />
              <TasksList
                tasks={tasks}
                setSelectedTask={setSelectedTask}
                deleteTask={handleDeleteTask}
              />
            </>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;