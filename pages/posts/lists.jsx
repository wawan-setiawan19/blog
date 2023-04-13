import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Container, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import ErrorHandling from "../../components/ErrorHandling";
import Loading from "../../components/Loading";


const fetchPosts = async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data;
}

const ListPost = () => {
    const [posts, setPosts] = useState();
    const [status, setStatus] = useState('loading');
    const [errMessage, setErrMessage] = useState('');
    const [dataHapus, setDataHapus] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure()

    const hapusData = (data) => {
        setDataHapus(data);
        onOpen();
    } 

    const handleHapus = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            alert('data Terhapus')
            onClose()
        })
        .catch(err=> console.error(err))
    }

    useEffect(()=>{
        fetchPosts()
        .then((res)=> setPosts(res))
        .then(setStatus('done'))
        .catch((err)=> {
            setStatus('err')
            console.log(err.message);
            setErrMessage(err.message)
        })
    },[])

    return (
        <Container maxW='8xl' paddingY='30'>
            <Stack spacing={8}>
                {!posts && status == 'loading' ? <Loading/>:''}
                {!posts && status == 'err'? <ErrorHandling message={errMessage}/>:''}
                {posts && posts.map((post)=>{
                    return(
                    <Card key={post.id}>
                        <CardHeader>
                            <Heading>{post.title}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>{post.body}</Text>
                        </CardBody>
                        <CardFooter>
                            <ButtonGroup gap='2'>
                                <Link href={`/posts/edit/${post.id}`}>
                                    <Button bg='yellow.400' _hover={{bg:'yellow.500'}}>Edit</Button>
                                </Link>
                                <Button bg='red.400' _hover={{bg:'red.500'}} onClick={()=>hapusData(post)}>Hapus</Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                    )
                })}
            </Stack>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Hapus data</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text fontWeight='bold' mb='1rem'>
                    Anda yakin mau menghapus {dataHapus.title}?
                    </Text>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='red' mr={3} onClick={()=>handleHapus(dataHapus.id)}>
                    Ya
                    </Button>
                    <Button variant='ghost' mr={3} onClick={onClose}>Tidak</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Container>
    );
}

export default ListPost;