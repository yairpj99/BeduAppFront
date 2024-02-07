import { Box, Button, Divider, Flex, FormControl, FormErrorMessage, FormLabel, IconButton, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Spacer, Text, Textarea, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startAddNewCita, startChangeView } from '../../Store/Calendar/Thunks';
import { IoMdCloseCircle } from 'react-icons/io';
import { IoSaveSharp, IoSearchCircle } from "react-icons/io5";
import { UseFormHook } from '../../Hooks/UseFormHook';

const AddCitaView = () => {
    const dispatch = useDispatch();
    const [formSubmitted, setformSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();
    const formData={
        clsDate: '',
        clsTime: '',
        intMinutos: 0,
        strTratamiento: '',
        lngMascotaID: '',
        lngVetID: '',
    }


    const {
        clsDate,
        clsTime,
        intMinutos,
        strTratamiento,
        strTratamientoValid,
        clsDateValid,
        clsTimeValid,
        lngMascotaID,
        lngVetID,
        onInputChange,
        isFormValid,
        formState
      } = UseFormHook(
        { ...formData, intMinutos: 30 },
        {
          strTratamiento: [(value) => value !== '', 'Por favor ingrese un tratamiento.'],
          clsDate: [(value) => value !== '', 'Por favor ingrese la fecha de la cita.'],
          clsTime: [(value) => value !== '', 'Por favor ingrese la hora de la cita.'],
        }
      );

    const handleIntMinutosChange = (value) => {
        onInputChange({
            target: {
                name: 'intMinutos',
                value: value,
            },
        });
    };

    const handleSubmit = async(event) => {
        setIsLoading(true);
        event.preventDefault();
        setformSubmitted(true)
        if(isFormValid){
            const resp = await dispatch(startAddNewCita(formState));
            if(resp.ok){
                toast({title: 'Cita generada ha exitosamente', status: 'success', isClosable: true, description: 'La cita se genero correctamente con el id '+resp.id, position: 'top'})
            }else{
                toast({title: 'Error', status: 'error', isClosable: true, description: resp.message, position: 'top'})
            }
        }
        setIsLoading(false);
    }

    return (
        <Modal isOpen={true} size='xl'>
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader>
                        <Flex alignItems="center" justifyContent="space-between">
                            <Text fontSize="x-large" color="RGBA(0, 0, 0, 0.64)">Agendar nueva cita</Text>
                            <IconButton colorScheme='red' onClick={() => dispatch(startChangeView('calendar'))}>
                                <IoMdCloseCircle fontSize={"25px"} />
                            </IconButton>
                        </Flex>
                    </ModalHeader>
                    <ModalBody>
                        <Divider />
                        <Box>
                            <Box onSubmit={handleSubmit}>
                                <FormControl isInvalid={formSubmitted && (clsDateValid)} >
                                    <FormLabel>Fecha:</FormLabel>
                                    <Input variant={"filled"} type='date' name="clsDate" value={clsDate} onChange={onInputChange} />
                                    <FormErrorMessage>{clsDateValid}</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={formSubmitted && (clsTimeValid)}>
                                    <FormLabel>Hora:</FormLabel>
                                    <Input variant={"filled"} type='time' name="clsTime" value={clsTime} onChange={onInputChange} />
                                    <FormErrorMessage>{clsTimeValid}</FormErrorMessage>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Duracion (Minutos):</FormLabel>
                                    <NumberInput defaultValue={30} step={10} min={10} variant={"filled"} value={intMinutos}   onChange={(valueString, valueNumber) => handleIntMinutosChange(valueNumber)}>
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                        <NumberInputField />
                                    </NumberInput>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>ID de Mascota:</FormLabel>
                                    <InputGroup>
                                        <Input variant="filled" type="text" name="lngMascotaID" value={lngMascotaID} onChange={onInputChange} />
                                        <InputRightElement>
                                            <IconButton>
                                                <IoSearchCircle fontSize={"30px"}/>
                                            </IconButton>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <FormControl isInvalid={formSubmitted && (!!strTratamientoValid)}>
                                    <FormLabel>Tratamiento:</FormLabel>
                                    <Textarea variant={"filled"} name="strTratamiento" value={strTratamiento} onChange={onInputChange}/>
                                    <FormErrorMessage>{strTratamientoValid}</FormErrorMessage>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>ID de Amo:</FormLabel>
                                    <InputGroup>
                                        <Input variant="filled" type="text" name="lngVetID" value={lngVetID} onChange={onInputChange} />
                                        <InputRightElement>
                                            <IconButton>
                                                <IoSearchCircle fontSize={"30px"}/>
                                            </IconButton>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                            </Box>
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Flex>
                            <Spacer />
                            <Button isLoading={isLoading} type='submit' onClick={handleSubmit} rightIcon={<IoSaveSharp />} variant={"outline"} colorScheme='green' >Guardar</Button>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    )
}

export default AddCitaView;
