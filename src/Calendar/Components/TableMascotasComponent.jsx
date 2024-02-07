import { TableContainer, Thead, Tr, Th, Table, Tbody, Td, IconButton, useToast } from '@chakra-ui/react';
import React from 'react';
import { FaTrash } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startDeleteVeterinario } from '../../Store/Veterinarios/Thunks';

const TableMascotasComponent = ({ data }) => {
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
        const resp = await dispatch(startDeleteVeterinario(index, lngVetID));
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
              <Th>Especie</Th>
              <Th>Raza</Th>
              <Th>Tutor</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((mascota, index) => (
              <Tr key={index}>
                <Td>{mascota.lngMascotaID}</Td>
                <Td>{mascota.strNombre}</Td>
                <Td>{mascota.strEspecie}</Td>
                <Td>{mascota.strRaza}</Td>
                <Td>{mascota.clsTutor.clsTutor.strNombre+" "+mascota.clsTutor.clsTutor.strPaterno+" "+mascota.clsTutor.clsTutor.strMaterno}</Td>
                <Td>
                  <IconButton colorScheme='red' onClick={() => handleDelete(index, veterinario.lngVetID)}>
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

export default TableMascotasComponent;