import { Box, Text } from '@chakra-ui/react';
import React from 'react'

const CalendarEventBox = ({event}) => {
    const {title} = event;
  return (
    <Box>
      <Text><strong>{title}</strong></Text>
    </Box>
  )
}

export default CalendarEventBox
