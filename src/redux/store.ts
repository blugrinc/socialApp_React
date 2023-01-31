import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../app/components/counter/counterSlice';
import postsReducer from '../app/page/Posts/store/post.slice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
  middleware: () => [ sagaMiddleware ],
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;