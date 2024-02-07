import React, { useEffect, useState } from 'react'
import CalendarLayout from '../Layout/CalendarLayout'
import { Alert, AlertDescription, Box, Divider, Progress, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import AlertMessage from '../Components/AlertMessage'
import { startSetAmos } from '../../Store/Amos/Thunks'
import TableTutoresComponent from '../Components/TableTutoresComponent'

const AmosPage = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading]=useState(false);
    const {amos, errorMessage} = useSelector(state=>state.amos);
    useEffect(()=>{
        const fetchData = async () => {
          setIsLoading(true);
            try {
              await dispatch(startSetAmos());
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
            <Text fontSize={"x-large"}>Tutores</Text>
            <Divider borderColor={"black"}/>
            {(isLoading)?
            <Progress size='xs' isIndeterminate />
            :null
            }
            <Box marginTop={"10px"}>
            {(amos)?
                <TableTutoresComponent data={Object.values(amos)}/>
            :(errorMessage!='')?
                <AlertMessage message={errorMessage} status={'error'}/>
            :null
            }
            </Box>
        </Box>
    </CalendarLayout>
  )
}

export default AmosPage
