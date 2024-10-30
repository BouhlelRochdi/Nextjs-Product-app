"use client";
import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text } from '@chakra-ui/react';
import { useProducts } from '../context/ProductContext';
import { useEffect, useState } from 'react';
import { RatingFilterClass } from './RatinGFilterClass';

export function RatingFilter() {
    const { filterByRating, minRating } = useProducts();
    const [ratingFilter, setRatingFilter] = useState(new RatingFilterClass());

    useEffect(() => {
        setRatingFilter(new RatingFilterClass(0, minRating));
    }, [minRating]);

    const handleChange = (value: number) => {
        ratingFilter.filterByRating(value);
        filterByRating(value);
    };

    return (
        <Box p={4} w="100%" maxW="400px">
            <Text mb={2}>Note minimale: {ratingFilter.getMinRating()}/5</Text>
            <Slider
                aria-label="rating-filter"
                defaultValue={ratingFilter.getRating()}
                min={0}
                max={5}
                step={0.5}
                onChange={handleChange}
            >
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
            </Slider>
        </Box>
    );
}