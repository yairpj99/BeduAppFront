import React, { useEffect, useState } from 'react'
import CalendarLayout from '../Layout/CalendarLayout'
import { Alert, AlertDescription, Box, Divider, Progress, Text } from '@chakra-ui/react'
import TableVeterinariosComponent from '../Components/TableVeterinariosComponent'
import { useDispatch, useSelector } from 'react-redux'
import { startSetVeterinarios } from '../../Store/Veterinarios/Thunks'
import AlertMessage from '../Components/AlertMessage'

const ConsultaVeterinariosPage = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading]=useState(false);
    const {veterinarios, errorMessage} = useSelector(state=>state.veterinarios);
    useEffect(()=>{
        const fetchData = async () => {
          setIsLoading(true);
            try {
              await dispatch(startSetVeterinarios());
            } catch (error) {
              console.error('Error al obtener datos:', error);
            }
            setIsLoading(false);
          };
          fetchData();
    },[])
  return (
    <CalendarLayout>
        <Box padding={"10px"}>
            <Text fontSize={"x-large"}>Veterinarios</Text>
            <Divider borderColor={"black"}/>
            {(isLoading)?
            <Progress size='xs' isIndeterminate />
            :null
            }
            <Box marginTop={"10px"}>
            {(veterinarios)?
                <TableVeterinariosComponent data={Object.values(veterinarios)}/>
            :(errorMessage!='')?
                <AlertMessage message={errorMessage} status={'error'}/>
            :null
            }
            </Box>
        </Box>
    </CalendarLayout>
  )
}

export default ConsultaVeterinariosPage
