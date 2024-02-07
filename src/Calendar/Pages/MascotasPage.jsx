import React, { useEffect, useState } from 'react'
import CalendarLayout from '../Layout/CalendarLayout'
import { Box, Divider, Progress, Text } from '@chakra-ui/react'
import TableMascotasComponent from '../Components/TableMascotasComponent'
import AlertMessage from '../Components/AlertMessage'
import { useDispatch, useSelector } from 'react-redux'
import { startSetMascotas } from '../../Store/Mascotas/Thunks'

const MascotasPage = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading]=useState(false);
    const {mascotas, errorMessage} = useSelector(state=>state.mascotas);
    useEffect(()=>{
        const fetchData = async () => {
          setIsLoading(true);
            try {
              await dispatch(startSetMascotas());
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
                <Divider borderColor={"black"} />
                {(isLoading) ?
                    <Progress size='xs' isIndeterminate />
                    : null
                }
                <Box marginTop={"10px"}>
                    {(mascotas) ?
                        <TableMascotasComponent data={Object.values(mascotas)} />
                        : (errorMessage != '') ?
                            <AlertMessage message={errorMessage} status={'error'} />
                            : null
                    }
                </Box>
            </Box>
        </CalendarLayout>
    )
}

export default MascotasPage
