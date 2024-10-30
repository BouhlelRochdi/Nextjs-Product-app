import { Text } from '@chakra-ui/react';

interface ProductPriceProps {
    price: number;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ price }) => {
    return (
        <Text fontSize="2xl" color="blue.600">
            {price}€
        </Text>
    );
};

export default ProductPrice;