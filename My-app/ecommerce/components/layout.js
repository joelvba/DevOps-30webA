import Head from 'next/head'
import React from 'react'
import { Box,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    useColorMode,
    Link
 } from '@chakra-ui/react'
import {MoonIcon, SunIcon} from '@chakra-ui/icons'

const layout = ({children}) => {

 const {colorMode, toggleColorMode} = useColorMode()
 
  return (
    <>
    <Head> <title>E-commerce App</title> </Head>
    {/*Box es un div chakra UI padre-- raiz padre */}
        <Box>
           {/*creacion de marco de menu */}
            <Flex
              bg={useColorModeValue('white','gray.600')}
              minH={'60px'}
              py={{base:2}}
              px={{base:4}}
              borderTop={1}
              borderBottom={2}
              borderStyle={'solid'}
              borderColor={useColorModeValue('gray.200','gray.900')}
              align={'center'}
            >
                 {/* acomoda componentes del munu */}
                <Flex 
                    flex={{base:1}} justify={{base:'center', md:'start'}}
                 >
                    <Text
                         fontFamily={'heading'}
                         color={useColorModeValue('gray.800', 'white')}
                     >Logo</Text>
                </Flex>    
                    <Stack
                     flex={{base:1, md:0}}
                     justify={'flex-end'}
                     direction={'row'}
                     spacing={6}
                     >

                      <Button onClick={toggleColorMode}> {colorMode === 'light' ? <MoonIcon/>: <SunIcon/>}
                      </Button>
                        <Button
                          fontSize={'sm'}
                          fontWeight={400}
                          variant={'link'}
                          href={'#'}
                         >Sign In</Button>
                        <Button
                            display={{base:'none', md:'inline-flex'}}
                            fontSize={'sm'}
                            fontWeight={400}
                            color={'white'}
                            variant={'link'}
                            href={'#'}
                            bg={'pink.500'}
                            _hover={{bg: 'pink.200'}}
                         >Sing Up</Button>
                    </Stack>
                
            </Flex>
        </Box>
        {children}
</>
  )
}

export default layout