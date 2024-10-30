import { Text } from '@chakra-ui/react';

interface ProductDescriptionProps {
    description: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => {
    return (
        <Text color="gray.600" noOfLines={2}>
            {description}
        </Text>
    );
};

export default ProductDescription;