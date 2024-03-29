import { TableContainer, Thead, Tr, Th, Table, Tbody, Td, IconButton, useToast } from '@chakra-ui/react';
import React from 'react';
import { FaTrash } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startDeleteVeterinario } from '../../Store/Veterinarios/Thunks';

const TableVeterinariosComponent = ({ data }) => {
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
              <Th>Correo electrónico</Th>
              <Th>Teléfono</Th>
              <Th>Cédula</Th>
              <Th>Especialidad</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((veterinario, index) => (
              <Tr key={index}>
                <Td>{veterinario.lngVetID}</Td>
                <Td>{veterinario.clsPersona.strNombre + " " + veterinario.clsPersona.strPaterno + " " + veterinario.clsPersona.strMaterno}</Td>
                <Td>{veterinario.clsPersona.strEmail}</Td>
                <Td>{veterinario.clsPersona.strTelefono}</Td>
                <Td>{veterinario.strCedula}</Td>
                <Td>{veterinario.strEspecialidad}</Td>
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

export default TableVeterinariosComponent;
