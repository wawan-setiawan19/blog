import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, Textarea, useColorModeValue } from "@chakra-ui/react";
import Form from "../../../components/Form";
import { useRouter } from 'next/router'
import axios from "axios";
import { useEffect, useState } from "react";

const fetchDataID = async (id) => {
    const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return data
}

const Edit = () => {
    const router = useRouter()
    const { pid } = router.query
    const [data, setData] = useState();
    useEffect(()=>{
        fetchDataID(pid)
        .then((res)=> {
            setData(res.data)
            console.log(data.title)
        })
        .catch((err)=> {
            console.log(err.message);
        })
    },[])
    return (
        <Container maxW='8xl'>
            <Form title={data.title}/>
        </Container>
    )
}

export default Edit;