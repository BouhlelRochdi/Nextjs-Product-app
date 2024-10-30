import { Badge } from '@chakra-ui/react';

interface ProductRatingProps {
    rating: number;
}

const ProductRating: React.FC<ProductRatingProps> = ({ rating }) => {
    return (
        <Badge colorScheme="teal" fontSize="sm">
            Note: {rating}/5
        </Badge>
    );
};

export default ProductRating;