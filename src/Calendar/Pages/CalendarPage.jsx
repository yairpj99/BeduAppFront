import React, { useEffect, useState } from 'react';
import CalendarLayout from '../Layout/CalendarLayout';
import { Box } from '@chakra-ui/react';
import CalendarView from '../Views/CalendarView';
import AddButton from '../Components/AddButton';
import { useDispatch, useSelector } from 'react-redux';
import ModalCita from '../Views/ModalCita';
import AddCitaView from '../Views/AddCitaView';
import { startSetCitas } from '../../Store/Calendar/Thunks';

const CalendarPage = () => {
  const { view } = useSelector((state) => state.calendar);
  const [isLoading, setIsLoading]=useState(true);
  const dispatch = useDispatch();
  useEffect(()=>{
    const fetchData = async () => {
      setIsLoading(true);
        try {
          await dispatch(startSetCitas());
        } catch (error) {
          console.error('Error al obtener datos:', error);
        }
        setIsLoading(false);
      };
      fetchData();
},[])

  return (
    <CalendarLayout>
      <Box position="relative" minHeight="100vh">
        <CalendarView />
        {(view === 'cita') ? <ModalCita /> : null}
        {(view === 'addCita') ? <AddCitaView /> : null}
        <AddButton />
      </Box>
    </CalendarLayout>
  );
};

export default CalendarPage;
