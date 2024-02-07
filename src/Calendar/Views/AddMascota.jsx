import { Box, Button, Divider, Flex, FormControl, FormErrorMessage, FormLabel, IconButton, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Spacer, Text, Textarea, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startAddNewCita, startChangeView } from '../../Store/Calendar/Thunks';
import { IoMdCloseCircle } from 'react-icons/io';
import { IoSaveSharp, IoSearchCircle } from "react-icons/io5";
import { UseFormHook } from '../../Hooks/UseFormHook';
import { startNewMascota } from '../../Store/Mascotas/Thunks';

const AddMascota = () => {
    const [formSubmitted, setformSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const formData={
        strNombre: '',
        strEspecie: '',
        strRaza: '',
        lngTutorID: 0,
    }

    const {
        strNombre,
        strEspecie,
        strRaza,
        lngTutorID,
        strNombreValid,
        strEspecieValid,
        strRazaValid,
        onInputChange,
        isFormValid,
        formState
      } = UseFormHook(
        { ...formData},
        {
            strNombre: [(value) => value != '', 'El campo es obligatorio!!!'],
            strEspecie: [(value) => value != '', 'El campo es obligatorio!!!'],
            strRaza: [(value) => value != '', 'El campo es obligatorio!!!'],
        }
      );

    const handleSubmit = async(event) => {
        setIsLoading(true);
        event.preventDefault();
        setformSubmitted(true)
        if(isFormValid){
            const resp = await dispatch(startNewMascota(formState));
            if(resp.ok){
                toast({title: 'Tutor agregado', status: 'success', isClosable: true, description: 'El tutor ha sido agregado exitosamente con el id:  '+resp.id, position: 'top'})
            }else{
                toast({title: 'Error', status: 'error', isClosable: true, description: resp.message, position: 'top'})
            }
        }
        setIsLoading(false);
    }


    const dispatch = useDispatch();
    return (
        <Modal isOpen={true} size='xl'>
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader>
                        <Flex alignItems="center" justifyContent="space-between">
                            <Text fontSize="x-large" color="RGBA(0, 0, 0, 0.64)">Agregar nueva mascota</Text>
                            <IconButton colorScheme='red' onClick={() => dispatch(startChangeView('calendar'))}>
                                <IoMdCloseCircle fontSize={"25px"} />
                            </IconButton>
                        </Flex>
                    </ModalHeader>
                    <ModalBody>
                        <Divider/>
                        <Box onSubmit={handleSubmit}>
                            <FormControl isInvalid={formSubmitted && (!!strNombreValid)}>
                                <FormLabel>Nombre:</FormLabel>
                                <Input variant={"filled"} name="strNombre" value={strNombre} onChange={onInputChange}/>
                                <FormErrorMessage>{strNombreValid}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formSubmitted && (!!strEspecieValid)}>
                                <FormLabel>Especie:</FormLabel>
                                <Input variant={"filled"} name="strEspecie" value={strEspecie} onChange={onInputChange}/>
                                <FormErrorMessage>{strEspecieValid}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formSubmitted && (!!strRazaValid)}>
                                <FormLabel>Raza:</FormLabel>
                                <Input variant={"filled"} name="strRaza" value={strRaza} onChange={onInputChange}/>
                                <FormErrorMessage>{strRazaValid}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formSubmitted && (!!strRazaValid)}>
                                <FormLabel>ID De Tutor:</FormLabel>
                                <Input variant={"filled"} name="lngTutorID" value={lngTutorID} onChange={onInputChange}/>
                                <FormErrorMessage>{strRazaValid}</FormErrorMessage>
                            </FormControl>
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Flex>
                            <Spacer/>
                            <Button isLoading={isLoading} type='submit' onClick={handleSubmit} rightIcon={<IoSaveSharp />} variant={"outline"} colorScheme='green' >Guardar</Button>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    )
}

export default AddMascota
