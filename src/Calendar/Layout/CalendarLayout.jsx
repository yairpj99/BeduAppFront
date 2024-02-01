import { Box } from '@chakra-ui/react'
import React from 'react'
import CalendarNavbar from '../Components/CalendarNavbar'

const CalendarLayout = ({children}) => {
  return (
    <Box>
        <Box>
            <CalendarNavbar/>
        </Box>
        <Box padding={"5px"}>
            {children}
        </Box>
    </Box>
  )
}

export default CalendarLayout
