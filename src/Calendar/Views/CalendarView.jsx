import { Box, useColorModeValue } from '@chakra-ui/react'
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours } from 'date-fns'
import { localizer, getMessagesES } from '../../helpers'
import CalendarEventBox from '../Components/CalendarEventBox'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startChangeView, startSetCitaSelect } from '../../Store/Calendar/Thunks'

const CalendarView = () => {

    const [lastView, setLastView]=useState(localStorage.getItem('lastView' || 'day'));

    const dispatch = useDispatch();

    const events = [
        {
            title: 'Prueba de Evento',
            notes: 'Prueba de que si funciona',
            start: new Date(),
            end: addHours(new Date(), 1),
        },
    ];
    const eventStyleGetter = (event, start, end) => {
        const style = {
            backgroundColor: '#319795',
            borderRadius: '8px',
            opacity: 0.9,
            color: '#EDFDFD',
            border: '1px solid transparent',
            fontSize: '14px',
            cursor: 'pointer',
            opacy: 0.8,
            boxShadow: '0 1px 1px rgba(0,0,0,0.15)',
            transition: 'background-color 0.3s',
        };

        return { style };
    };

    const onSelect=(event)=>{
        dispatch(startSetCitaSelect(event));
    }

    const onViewChangue=(event)=>{
        localStorage.setItem('lastView',event);
        setLastView(event);
    }

    return (
        <Box>
            <Calendar
                culture='es'
                localizer={localizer}
                events={events}
                defaultView={lastView}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px)' }}
                messages={getMessagesES()}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEventBox
                }}
                onSelectEvent={onSelect}
                onView={onViewChangue}
            />
        </Box>
    )
}

export default CalendarView
