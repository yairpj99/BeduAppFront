
import { configureStore } from '@reduxjs/toolkit';
import { CalendarSlice } from './Calendar/Calendar';
import { VeterinariosSlice } from './Veterinarios/Veterinarios';
import { AmosSlice } from './Amos/Amos';
import { MascotasSlice } from './Mascotas/Mascotas';

const store = configureStore({
  reducer: {
    calendar: CalendarSlice.reducer,
    veterinarios: VeterinariosSlice.reducer,
    amos: AmosSlice.reducer,
    mascotas: MascotasSlice.reducer,
  },
});

export default store;