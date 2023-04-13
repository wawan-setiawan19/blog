import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, Textarea, useColorModeValue } from "@chakra-ui/react";
import Form from "../../components/Form";
import { useRouter } from 'next/router'

const Edit = () => {
    const router = useRouter()
    const { pid } = router.query
    return (
        <Container maxW='8xl'>
            <Heading>{pid}</Heading>
            <Form/>
        </Container>
    )
}

export default Edit;