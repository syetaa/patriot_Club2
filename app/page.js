import { Center, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function Home() {
    return (
        <>
            <VStack alignItems="center" // Vertical alignment
                justifyContent="space-around" height='100vh'>
                <Text>{'Центр военно-спортивной подготовки и патриотического воспитания молодежи'}</Text>
                <HStack>
                    <VStack alignItems="left" justifyContent="center">
                        <Text>Готовим патриотов нового поколения,</Text>
                        <Text>любящих свою Родину</Text>
                        <Text>и умеющих ее защищать</Text>
                    </VStack>
                </HStack>
            </VStack>
        </>
    );
}
