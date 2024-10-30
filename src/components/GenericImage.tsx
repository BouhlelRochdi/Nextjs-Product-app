import { Image } from '@chakra-ui/react';

interface ProductImageProps {
    src: string;
    alt: string;
    height: string;
    width: string;
}

const GenericImage: React.FC<ProductImageProps> = ({ src, alt, ...props }) => {
    return (
        <Image
            src={src}
            alt={alt}
            height={props.height}
            width={props.width}
            objectFit="cover"
        />
    );
};

export default GenericImage;