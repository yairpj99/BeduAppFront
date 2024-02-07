import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Auth/Pages/Login';
import CalendarPage from '../Calendar/Pages/CalendarPage';
import ConsultaVeterinariosPage from '../Calendar/Pages/ConsultaVeterinariosPage';
import AmosPage from '../Calendar/Pages/AmosPage';
import MascotasPage from '../Calendar/Pages/MascotasPage';

const AppRouter = () => {

    const isAuth = useState(false);

  return (
    <Routes>
        {(!isAuth)?
        <Route path='/*' element={<Login/>}/>
        :
        <>
        <Route path='/*' element={<CalendarPage/>} />
        <Route path='/Home' element={<CalendarPage/>} />
        <Route path='/Citas' element={<CalendarPage/>} />
        <Route path='/Veterinarios' element={<ConsultaVeterinariosPage/>} />
        <Route path='/Mascotas' element={<MascotasPage/>} />
        <Route path='/Tutores' element={<AmosPage/>}/>
        </>
        }
    </Routes>
  )
}

export default AppRouter
