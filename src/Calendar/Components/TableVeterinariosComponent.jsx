import { TableContainer, Thead, Tr, Th, Table, Tbody, Td, IconButton } from '@chakra-ui/react';
import React from 'react';
import { FaTrash } from 'react-icons/fa6';

const TableVeterinariosComponent = ({ data }) => {
  return (
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
              <Td>{veterinario.clsPersona.strNombre+" "+veterinario.clsPersona.strPaterno+" "+veterinario.clsPersona.strMaterno}</Td>
              <Td>{veterinario.clsPersona.strEmail}</Td>
              <Td>{veterinario.clsPersona.strTelefono}</Td>
              <Td>{veterinario.strCedula}</Td>
              <Td>{veterinario.strEspecialidad}</Td>
              <Td><IconButton colorScheme='red'><FaTrash/></IconButton></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableVeterinariosComponent;
