
import { configureStore } from '@reduxjs/toolkit';
import { CalendarSlice } from './Calendar/Calendar';
import { VeterinariosSlice } from './Veterinarios/Veterinarios';

const store = configureStore({
  reducer: {
    calendar: CalendarSlice.reducer,
    veterinarios: VeterinariosSlice.reducer,
  },
});

export default store;