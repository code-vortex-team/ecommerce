'use client'

import {Button, Center, Heading, Icon, Text, VStack} from '@chakra-ui/react';
import {MdError} from 'react-icons/md';

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string }
    reset: () => void
}) {


    return (
        <Center h="100vh" bgGradient="linear(to-r, blackAlpha.100, blackAlpha.200)" p={4}>
            <VStack
                spacing={4}
                borderWidth="1px"
                borderRadius="lg"
                bg="white"
                p={6}
                shadow="xl"
                textAlign="center"
                maxWidth="400px"
            >
                <Icon as={MdError} boxSize={16} color="blackAlpha.400"/>
                <Heading as="h2" size="xl" color="blackAlpha.800">
                    مشکلی به وجود اومده !!
                </Heading>
                <Text fontSize="lg" color="gray.700">
                    {error.message}
                </Text>
                <Button
                    colorScheme="blackAlpha"
                    size="lg"
                    onClick={reset}
                    _hover={{transform: 'scale(1.05)', transition: '0.2s'}}
                >
                    دوباره امتحان کن
                </Button>
            </VStack>
        </Center>
    );
}
