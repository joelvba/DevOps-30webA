// Nombrar un archivo Javascript con el siguiente formato [id].js 
// es una convención de nomenclatura que generalmente se utiliza para identificar 
// de manera única un archivo en un proyecto 
// Aquí hay una razon por la que se podría adoptar esta convención:
// 1.- Identificación única:
// El uso de un identificador único como lo es el id en el nombre del archivo ayuda a garantizar
// que no haya conflictos con otros archivos en el mismo directorio o proyecto.

//sera un router (next)adonde se dirigirse alas rutas
import React from 'react'
import {useRouter} from 'next/router'
import {data} from '../../utils/data'
import { 
    Container, SimpleGrid, Flex, Image, Heading, Stack, Box, Text, 
    useColorModeValue, Button } from '@chakra-ui/react'
import db from '../../utils/db'
import Products from '../../components/Product'
import { AmpContext } from 'next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints'

 const ProductPage = ({props}) =>{

    const router = useRouter()
    const {id} = router.query

    const product = data.produc.find((product) => product.id === parseInt(id))
    if(!product) {
        return <div> 404 ! Product not found</div>
    }

    return(
        <Container maxW={'container.xl'} mt={2}>
            <SimpleGrid columns={[1,2]} spacing={2}>
                <Flex>
                    <Image src={`/image/${product.image}`}
                    rounded={'30px'}
                    fit={'cover'}
                    alt={product.description}
                    align={'center'}
                    h={'100%'}
                    w={{base:'100%', sm: '400px', lg: '500px'}}
                    
                    />
                </Flex>
                <Stack spacing={{base:6, md:10}}>
                    <Box>
                        <Heading
                        lineHeight={1.3}
                        fontWeight={600}
                        fontSize={{base: '2xl', sm:'4xl', lg:'4xl'}}
                        >{product.title}
                        </Heading>
                        <Text
                        color={useColorModeValue('gray.900', 'gray.400')}
                        fontWeight={350}
                        fontSize={'2xl'}
                        >
                            {`$${product.price} USD`}
                        </Text>
                    </Box>
                        <Text
                        color={useColorModeValue('gray.500', 'gray.400')}
                        fontSize={'lg'}
                        mb={'10'} 
                        >
                            {product.descripcion}
                        </Text>
                        <Flex flexGrow={1} alignItems={'end'}>
                            <Button
                                rounded={'md'} w={'full'} size={'lg'} py={'3'}
                                bg={useColorModeValue('gray.900', 'gray.50')}
                                color={useColorModeValue('white', 'gray.900')}
                                textTransform={'uppercase'}
                                _hover={{ bg: 'green.400' }}
                            _focus={{ boxShadow: 'outline' }}
                            
                            >
                                add to cart
                            </Button>
                        </Flex>

                </Stack>
            </SimpleGrid>
        </Container>
        
    )

    }  

    export async function getServerSideProps(){
        const {params} = context
        const {id} = params
        await db.connect()
        const product = await Products.findOne({id}).lean()
        await db.disconnect()
        return{
           props: {
            product:db.convertDocToObj(product)
           }
        }

    }
 
 export default ProductPage