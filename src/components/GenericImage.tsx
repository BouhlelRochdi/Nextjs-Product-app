'use client'
import { Image, Skeleton, Box, Icon } from '@chakra-ui/react';
import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { StaticImageData } from 'next/image';
import img_Placeholder from '../assets/img_placeholder.png';

interface ProductImageProps {
    src: string;
    alt: string;
    height: string;
    width: string;
    fallbackImage?: string;
}

const GenericImage: React.FC<ProductImageProps> = ({
    src,
    alt,
    height,
    width,
    fallbackImage = img_Placeholder,
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    const getFallbackSrc = (image: string | StaticImageData | undefined): string | undefined => {
        if (!image) return undefined;
        if (typeof image === 'string') return image;
        return image.src;
    };

    return (
        <Box
            position="relative"
            height={height}
            width={width}
            bg="gray.100"
            borderRadius="md"
            overflow="hidden"
        >
            {isLoading && (
                <Skeleton
                    position="absolute"
                    top="0"
                    left="0"
                    height="100%"
                    width="100%"
                />
            )}

            {hasError ? (
                <Box
                    height="100%"
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    color="gray.500"
                >
                    <Icon as={ImageOff} boxSize="24px" mb={2} />
                    <Box fontSize="sm">Image non disponible</Box>
                </Box>
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    height="100%"
                    width="100%"
                    objectFit="cover"
                    onLoad={handleLoad}
                    onError={handleError}
                    opacity={isLoading ? 0 : 1}
                    transition="opacity 0.2s"
                    fallbackSrc={getFallbackSrc(fallbackImage)}
                />
            )}
        </Box>
    );
};

export default GenericImage;