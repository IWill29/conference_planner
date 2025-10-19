import { configureStore } from '@reduxjs/toolkit';
import planner from './slices';


// Izveidojam Redux veikalu. Te reģistrē visus reducerus (šeit tikai 'planner').
export const store = configureStore({ reducer: { planner } });