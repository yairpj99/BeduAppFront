import { Box, Button, Flex, IconButton, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startChangeView } from '../../Store/Calendar/Thunks';
import { IoMdCloseCircle } from 'react-icons/io';

const ModalCita = () => {
  const dispatch = useDispatch();
  const { citaSelect } = useSelector(state => state.calendar);
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Modal isOpen={true} size='xl'>
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>{citaSelect.title}</ModalHeader>
          <ModalBody>
            
          </ModalBody>
          <ModalFooter>
            <Flex>
              <Spacer />
              <Box margin={"10px"}><Button onClick={() => dispatch(startChangeView('calendar'))} colorScheme='red'>Cerrar</Button></Box>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}

export default ModalCita
