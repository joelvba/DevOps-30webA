
import React from 'react'
import { data } from '../utils/data'
import { Image } from '@chakra-ui/react'
import { Grid, GridItem, Card, Box } from '@chakra-ui/react'
import Link from 'next/link'
// Se crea la lista de los productos
const Products = () => {
  return (
    <div>
        <Grid templateColumns={{base: '1fr', lg: 'repeat(4, 1fr)'}} gap={6}>
           
            {data.produc.map((produc)=>(
                <GridItem key={produc.id}>
                    <Card>
                      <Link href={`/product/${produc.id}`}>
                        <Box display="flex" justifyContent="center" py={1} px={3}>
                                                  
                        <Image 
                                src={`/image${produc.image}`}
                                height={230}
                                width={230}
                                style={{
                                    width: "230px",      // Ajusta el ancho a 230px
                                    height: "230px",     // Ajusta la altura a 230px
                                    objectFit: "fill",   // "fill" estira la imagen para llenar el contenedor, aunque puede deformarse
                                }}
                                alt={produc.title}
                            />

                        </Box>

                        <Box py={1} px={3}>
                            <h2>{produc.title}</h2>
                            <div>{produc.descripcion}</div>
                            <div>{produc.price}</div>
                        </Box>
                        </Link>
                    </Card>
                </GridItem>
            ))} 
        </Grid>

    </div>
  )
}

export default Products