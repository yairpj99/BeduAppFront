import { Box, Spinner, Text } from '@chakra-ui/react'
import React from 'react'

const LoadingCitasView = () => {
    return (
        <Box
            width="100%"
            height="70vh"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                width="400px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
                <Text fontSize={"large"} mt="4">Cargando citas...</Text>
            </Box>
        </Box>
    )
}

export default LoadingCitasView
