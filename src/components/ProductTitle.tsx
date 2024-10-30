import { Text } from '@chakra-ui/react';

interface ProductTitleProps {
    title: string;
}

const ProductTitle: React.FC<ProductTitleProps> = ({ title }) => {
    return (
        <Text fontSize="xl" fontWeight="semibold">
            {title}
        </Text>
    );
};

export default ProductTitle;