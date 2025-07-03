import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import taskReducer from '../features/taskSlice';
import usersReducer from '../features/usersSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
    users: usersReducer, 
  },
});
