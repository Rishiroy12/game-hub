import {FaWindows,FaPlaystation,FaXbox,FaLinux,FaApple,FaAndroid}
 from 'react-icons/fa' ;
 //FauntAwsome Lib
 import {MdPhoneIphone} from 'react-icons/md';
 //material design
 import {SiNintendo} from 'react-icons/si';
 import {BsGlobe} from 'react-icons/bs';
import { HStack, Icon } from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';
import { IconType } from 'react-icons/lib';

interface Props{
  platforms: Platform[]
}

const PlatformIconList = ({platforms}: Props) => {
  const iconMap:{ [key:string] : IconType} = {
    pc: FaWindows,
    playstation:FaPlaystation,
    xbox:FaXbox,
    nintendo:SiNintendo,
    mac:FaApple,
    linux:MdPhoneIphone,
    android:FaAndroid,
    web:BsGlobe
  }
  return (
    <HStack marginY={1}> //theme.space
    {platforms.map ((platform) => (<Icon as={iconMap[platform.slug]} color='black.500' />
    ))}
    </HStack>
  )
}

export default PlatformIconList