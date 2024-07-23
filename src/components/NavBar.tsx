import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import Searchinput from './SearchInput';
interface Props{
  onSearch: (searchText:string) => void;
}
const NavBar = ({onSearch}:Props) => {
  return (
    <HStack padding= '20px'>
        <Image src={logo} boxSize='60px'/>
        <Searchinput onSearch = {onSearch}/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar