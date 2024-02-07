import { TableContainer, Thead, Tr, Th, Table, Tbody, Td, IconButton, useToast } from '@chakra-ui/react';
import React from 'react';
import { FaTrash } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startDeleteVeterinario } from '../../Store/Veterinarios/Thunks';
import { startDeleteAmo } from '../../Store/Amos/Thunks';

const TableTutoresComponent = ({ data }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleDelete = async (index, lngVetID) => {
    Swal.fire({
      title: "¿Seguro que desea continuar?",
      text: "Seguro que desea eliminar el registro del veterinario seleccionado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "#d33",
      cancelButtonText: 'Cancelar',
      confirmButtonText: "Eliminar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const resp = await dispatch(startDeleteAmo(index, lngVetID));
        toast({ title: resp.message, isClosable: true, status: 'info', position: 'top' });
      }
    });
  }

  return (
    <>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Nombre</Th>
              <Th>Correo electrónico</Th>
              <Th>Teléfono</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((amo, index) => (
              <Tr key={index}>
                <Td>{amo.lngTutorID}</Td>
                <Td>{amo.clsTutor.strNombre + " " + amo.clsTutor.strPaterno + " " + amo.clsTutor.strMaterno}</Td>
                <Td>{amo.clsTutor.strEmail}</Td>
                <Td>{amo.clsTutor.strTelefono}</Td>
                <Td>
                  <IconButton colorScheme='red' onClick={() => handleDelete(index, amo.lngTutorID)}>
                    <FaTrash />
                  </IconButton>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableTutoresComponent;