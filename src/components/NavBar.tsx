import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import Searchinput from './SearchInput';
const NavBar = () => {
  return (
    <HStack padding= '20px'>
        <Image src={logo} boxSize='60px'/>
        <Searchinput />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar