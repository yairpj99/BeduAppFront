import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const AlertMessage = ({message, status}) => {
  return (
    <Alert status={status} variant='solid'>
        <AlertIcon/>
        {message}
    </Alert>
  )
}

export default AlertMessage
