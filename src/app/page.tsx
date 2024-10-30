"use client";

import { ProductCard } from "@/components/ProductCard";
import { RatingFilter } from "@/components/Ratingfilter";
import { useProducts } from "@/context/ProductContext";
import { Center, Spinner, Container, Grid, Text } from "@chakra-ui/react";

export default function Home() {
  const { filteredProducts, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center h="100vh">
        <Text color="red.500">{error}</Text>
      </Center>
    );
  }

  return (
    <Container maxW="container.xl" py={8}>
      <RatingFilter />
      <Grid
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        gap={6}
        mt={8}
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  );
}
