
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
                      
                        <Image 
                            src={`/image${produc.image}`}
                            height={230}
                            width={230}
                            style={{objectFit: "cover" , height:"230px"}}
                            alt={produc.title}
                        />
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