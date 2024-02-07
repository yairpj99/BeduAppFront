import { Box, Flex, Spacer, Text, IconButton, Button, Tooltip } from '@chakra-ui/react';
import { FiCalendar} from 'react-icons/fi'; // Importa los iconos que desees
import logoIcon from '../../assets/sigoIcon.png'
import { MdPets } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaUserDoctor } from "react-icons/fa6";

const CalendarNavbar = () => {
  const navigate = useNavigate();
  return (
    <Box boxShadow="md" bg="cyan.700" p="2" color="white">
      <Flex align="center">
        <img src={logoIcon} width={"30px"}/>
        <Text fontSize="xl" fontWeight="bold">
          SiGoApp
        </Text>
        <Spacer />
        <Flex align="center">
          <Tooltip label="Agenda" hasArrow>
            <IconButton onClick={()=>navigate("/Home")} icon={<FiCalendar fontSize={"25px"}/>} variant="ghost" />
          </Tooltip>
          <Tooltip label="Mascotas" hasArrow>
            <IconButton  onClick={()=>navigate("/Mascotas")} icon={<MdPets fontSize={"25px"}/>} variant="ghost" />
          </Tooltip>
          <Tooltip label="Tutores" hasArrow>
            <IconButton onClick={()=>navigate("/Tutores")} icon={<IoIosPerson fontSize={"25px"} />} variant="ghost" />
          </Tooltip>
          <Tooltip label="Veterinarios" hasArrow>
            <IconButton onClick={()=>navigate("/Veterinarios")}  icon={<FaUserDoctor fontSize={"20px"} />} variant="ghost" />
          </Tooltip>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CalendarNavbar;
