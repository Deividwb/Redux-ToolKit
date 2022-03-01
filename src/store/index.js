import  {configureStore} from '@reduxjs/toolkit';
//reducer
import users from './slices/users';

//reducer estado global

export default configureStore({
    reducer: {
        users
    }
})