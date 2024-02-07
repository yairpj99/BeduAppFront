import React from 'react';
import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  VStack,
  useDisclosure,
  useToast
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdCloseCircle } from 'react-icons/io';
import { format } from 'date-fns';
import { startChangeView, startDeleteCita } from '../../Store/Calendar/Thunks';
import { IoTrashOutline } from 'react-icons/io5';

const ModalCita = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { citaSelect } = useSelector(state => state.calendar);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteCita=async()=>{
    const resp = await dispatch(startDeleteCita(citaSelect.notes.id, citaSelect.notes.index));
    toast({title:resp, status: 'info', position: 'top', isClosable: true})
  }

  return (
    <Modal isOpen={true} size='xl' onClose={() => dispatch(startChangeView('calendar'))}>
      <ModalOverlay />
      <ModalContent borderRadius="8px">
        <ModalHeader>
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="2xl" fontWeight="bold">{citaSelect.title}</Text>
            <IconButton colorScheme='red' onClick={() => dispatch(startChangeView('calendar'))}>
              <IoMdCloseCircle fontSize={"25px"} />
            </IconButton>
          </Flex>
        </ModalHeader>
        <Divider />
        <ModalBody>
          <VStack spacing={4} align='stretch'>
            <Box position='relative' padding='10'>
              <Divider />
              <AbsoluteCenter bg='white' px='4'>
                <Text fontSize="lg" fontWeight="bold">
                  Fecha de cita:
                </Text>
              </AbsoluteCenter>
            </Box>
            <Text>
              {format(citaSelect.start, 'dd/MM/yyyy')}
            </Text>
            <Box position='relative' padding='10'>
              <Divider />
              <AbsoluteCenter bg='white' px='4'>
                <Text fontSize="lg" fontWeight="bold">
                  Horario:
                </Text>
              </AbsoluteCenter>
            </Box>
            <Text>
              De: {format(citaSelect.start, 'hh:mm')} a {format(citaSelect.end, 'hh:mm')}
            </Text>
            <Box position='relative' padding='10'>
              <Divider />
              <AbsoluteCenter bg='white' px='4'>
                <Text fontSize="lg" fontWeight="bold">
                  Tratamiento Recetado:
                </Text>
              </AbsoluteCenter>
            </Box>
            <Text>
              {citaSelect.notes.tratamiento}
            </Text>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Flex>
            <Spacer />
            <Box margin={"10px"}>
              <Button onClick={deleteCita} variant={"outline"} colorScheme='red' leftIcon={<IoTrashOutline fontSize={"20px"}/>}>
                Eliminar cita
              </Button>
            </Box>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalCita;
