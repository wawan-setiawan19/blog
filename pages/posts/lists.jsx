import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import ErrorHandling from "../../components/ErrorHandling";
import Loading from "../../components/Loading";

const fetchPosts = async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(response.data);
    return response.data;
}

const ListPost = () => {
    const [posts, setPosts] = useState();
    const [status, setStatus] = useState('loading');
    const [errMessage, setErrMessage] = useState('');
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
                    <Card>
                        <CardHeader>
                            <Heading>{post.title}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>{post.body}</Text>
                        </CardBody>
                        <CardFooter>
                            <ButtonGroup gap='2'>
                                <Button bg='green.400' _hover={{bg:'green.500'}}>Detail</Button>
                                <Button bg='yellow.400' _hover={{bg:'yellow.500'}}>Edit</Button>
                                <Button bg='red.400' _hover={{bg:'red.500'}}>Hapus</Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                    )
                })}
            </Stack>
        </Container>
    );
}

export default ListPost;