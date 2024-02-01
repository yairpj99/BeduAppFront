import React from 'react';
import { IconButton, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, Box, Stack, Button } from '@chakra-ui/react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { FaAddressBook } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { MdPersonAdd } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { startChangeView } from '../../Store/Calendar/Thunks';

const AddButton = () => {
  const dispatch = useDispatch();

  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          isRound
          position="fixed"
          top="85vh"
          right={5}
          sx={{
            width: '60px',
            height: '60px',
            boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;',
          }}
          colorScheme="green"
          icon={<IoIosAddCircleOutline fontSize="40px" />}
        />
      </PopoverTrigger>
      <PopoverContent zIndex={2}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Opciones</PopoverHeader>
        <PopoverBody>
          <Box>
            <Stack>
              <Button
                variant="outline"
                sx={{
                  backgroundColor: 'transparent',
                  borderColor: 'transparent',
                  borderStyle: 'none',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  textColor: '#805AD5'
                }}
                leftIcon={<FaAddressBook fontSize={"30px"}/>}
                onClick={() => dispatch(startChangeView('addCita'))}
              >
                Agendar cita
              </Button>
              <Button
                variant="outline"
                sx={{
                  backgroundColor: 'transparent',
                  borderColor: 'transparent',
                  borderStyle: 'none',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  textColor: '#DD6B20'
                }}
                leftIcon={<MdPersonAdd fontSize={"30px"}/>}
                onClick={() => dispatch(startChangeView('addCita'))}
              >
                Nuevo Amo
              </Button>
              <Button
                variant="outline"
                sx={{
                  backgroundColor: 'transparent',
                  borderColor: 'transparent',
                  borderStyle: 'none',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  textColor: '#3182CE'
                }}
                leftIcon={<MdPets fontSize={"30px"}/>}
                onClick={() => dispatch(startChangeView('addCita'))}
              >
                Nueva Mascota
              </Button>
            </Stack>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default AddButton;
