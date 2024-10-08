"use client"
import {useState} from 'react';
import {Box, HStack} from '@chakra-ui/react';
import {color} from "@/components/colors";

const Rating = ({defaultRating = 0, maxRating = 5, onRatingChange}) => {
    const [currentRating, setRating] = useState(Math.round(defaultRating));

    const handleRating = (index) => {
        setRating(index);
        if (onRatingChange) {
            onRatingChange(index);
        }
    };

    return (
        <HStack spacing={3} dir="ltr">
            {Array.from({length: maxRating}, (_, index) => (

                    <svg cursor={"pointer"} key={index} width="16" height="15" viewBox="0 0 16 15" fill="none"
                        // onClick={() => handleRating(index + 1)}
                         xmlns="http://www.w3.org/2000/svg">
                        <Box as="path"
                             stroke={color.icon.primary}
                             d="M7.20268 1.08318L5.38879 4.76095L1.33046 5.35262C0.602682 5.45818 0.311016 6.3554 0.838794 6.86929L3.7749 9.7304L3.08046 13.7721C2.95546 14.5026 3.7249 15.0498 4.36935 14.7082L7.99991 12.7998L11.6305 14.7082C12.2749 15.0471 13.0443 14.5026 12.9193 13.7721L12.2249 9.7304L15.161 6.86929C15.6888 6.3554 15.3971 5.45818 14.6693 5.35262L10.611 4.76095L8.79713 1.08318C8.47213 0.42762 7.53046 0.419287 7.20268 1.08318Z"
                             fill={index < currentRating ? color.icon.primary : color.icon.reverse}/>
                    </svg>

                )
            )}
        </HStack>
    )
        ;
};

export default Rating;
