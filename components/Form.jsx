import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, Textarea, useColorModeValue } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const Form = ({ title='', message='', id }) => {
    const [inputTitle,setInputTitle] = useState(title);
    const [inputBody,setInputBody] = useState(message);
    const [statusTitle, setStatusTitle] = useState('');
    const [statusBody, setStatusBody] = useState('');
    const router = useRouter()

    const handleSubmit = (e) =>{
        e.preventDefault();
        cekInput(inputTitle, inputBody)
    }

    const cekInput = (inputTitle, inputBody) =>{
        setStatusBody('')
        setStatusTitle('')
        if (inputTitle === '') {
            setStatusTitle('error')
        }
        if(inputBody === ''){
            setStatusBody('error')
        }

        if(statusBody !== 'error' && statusTitle !== 'error'){
            submitPost(id);
        }
    }

    const handleInputTitle = (e) => {
        setInputTitle(e.target.value)
    }

    const handleInputBody = (e) => {
        setInputBody(e.target.value)
    }

    const submitPost = (id) => {
        if(id){
            axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{
                title: inputTitle,
                body: inputBody,
            })
            .then(res=>{
                alert('data berhasil diedit')
                router.push('/posts/lists')
            })
            .catch(err=>console.error(err))
        }else{
            axios.post(`https://jsonplaceholder.typicode.com/posts/`,{
                title: inputTitle,
                body: inputBody,
            })
            .then(res=>{
                alert('data berhasil diinput')
                router.push('/posts/lists')
            })
            .catch(err=>console.error(err))
        }
    }

    return (
        <Flex
            minH={'80vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack minW={'4xl'} spacing={4} mx={'auto'} >
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Send your post</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        give me your magical word ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="title">
                            <FormLabel>Magical title</FormLabel>
                            {statusTitle === 'error' ? <Text color={'red.400'}>Please give me your best title</Text> : '' }
                            <Input type="text" value={inputTitle} placeholder='Input your title' onChange={handleInputTitle}/>
                        </FormControl>
                        <FormControl id="body">
                            <FormLabel>Your amazing Post</FormLabel>
                            {statusBody === 'error' ? <Text color={'red.400'}>Please give me your best Message</Text> : '' }
                            <Textarea
                                borderColor="gray.300"
                                _hover={{
                                    borderRadius: 'gray.300',
                                }}
                                placeholder="Write your post"
                                value={inputBody}
                                onChange={handleInputBody}
                            />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                onClick = {handleSubmit}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Send my word
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}

export default Form;