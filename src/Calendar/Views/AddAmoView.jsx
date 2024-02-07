import { Box, Button, Divider, Flex, FormControl, FormErrorMessage, FormLabel, IconButton, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { startChangeView } from '../../Store/Calendar/Thunks'
import { IoSaveSharp } from 'react-icons/io5'
import { UseFormHook } from '../../Hooks/UseFormHook'
import { startNewAmo } from '../../Store/Amos/Thunks'

const AddAmoView = () => {
    const [formSubmitted, setformSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const formData={
        strNombre: '',
        strPaterno: '',
        strMaterno: '',
        strEmail: '',
        strTelefono: '',
    }

    const {
        strNombre,
        strPaterno,
        strMaterno,
        strEmail,
        strTelefono,
        strNombreValid,
        strPaternoValid,
        strMaternoValid,
        strEmailValid,
        strTelefonoValid,
        onInputChange,
        isFormValid,
        formState
      } = UseFormHook(
        { ...formData},
        {
            strNombre: [(value) => value != '', 'El campo es obligatorio!!!'],
            strPaterno: [(value) => value != '', 'El campo es obligatorio!!!'],
            strMaterno: [(value) => value != '', 'El campo es obligatorio!!!'],
            strEmail: [(value) => value != '', 'El correo electronico es obligatorio'],
            strTelefono: [(value) => value != '', 'Ingrese un numero de telefono'],
        }
      );

    const handleSubmit = async(event) => {
        setIsLoading(true);
        event.preventDefault();
        setformSubmitted(true)
        if(isFormValid){
            const resp = await dispatch(startNewAmo(formState));
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
                            <Text fontSize="x-large" color="RGBA(0, 0, 0, 0.64)">Agregar nuevo amo</Text>
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
                            <FormControl isInvalid={formSubmitted && (!!strPaternoValid)}>
                                <FormLabel>Apellido Paterno:</FormLabel>
                                <Input variant={"filled"} name="strPaterno" value={strPaterno} onChange={onInputChange}/>
                                <FormErrorMessage>{strPaternoValid}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formSubmitted && (!!strMaternoValid)}>
                                <FormLabel>Apellido Materno:</FormLabel>
                                <Input variant={"filled"} name="strMaterno" value={strMaterno} onChange={onInputChange}/>
                                <FormErrorMessage>{strMaternoValid}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formSubmitted && (!!strEmailValid)}>
                                <FormLabel>Email:</FormLabel>
                                <Input variant={"filled"} type='email' name="strEmail" value={strEmail} onChange={onInputChange}/>
                                <FormErrorMessage>{strEmailValid}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formSubmitted && (!!strTelefonoValid)}>
                                <FormLabel>Telefono:</FormLabel>
                                <Input variant={"filled"} type='phone' name="strTelefono" value={strTelefono} onChange={onInputChange}/>
                                <FormErrorMessage>{strTelefonoValid}</FormErrorMessage>
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

export default AddAmoView
