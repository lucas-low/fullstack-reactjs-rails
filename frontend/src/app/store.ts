import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import bankAccountsListSlice from '../features/Table/tableSlice';

const rootReducer = combineReducers({
  bankAccountsList: bankAccountsListSlice.reducer
  // other reducers like user, auth, or POST req to backend server to store data
})

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the "RootState" and "AppDispatch" types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
