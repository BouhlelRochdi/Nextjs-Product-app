"use client";

import { Product } from '@/types/product';
import { Box, VStack, Badge, useColorModeValue } from '@chakra-ui/react';
import GenericImage from './GenericImage';
import ProductTitle from './ProductTitle';
import ProductRating from './ProductRating';
import ProductDescription from './ProductDescription';
import ProductPrice from './ProductPrice';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const bgColor = useColorModeValue('white', 'gray.800');

    return (
        <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg={bgColor}
            shadow="md"
        >
            <GenericImage src={product.thumbnail} alt={product.title} height="200px" width="100%" />

            <VStack p="6" spacing={3} align="start">
                <ProductTitle title={product.title} />
                <ProductRating rating={product.rating} />
                <ProductDescription description={product.description} />
                <ProductPrice price={product.price} />
            </VStack>
        </Box>
    );
}