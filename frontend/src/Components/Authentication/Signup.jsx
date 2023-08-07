import { FormControl, VStack, FormLabel, Input, InputRightElement, InputGroup, Button, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [pic, setPic] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",

    });

    const handleClick = () => {
        setShow(!show);
    }
    const handleClick1 = () => {
        setShow1(!show1);
    }

    const postDetails = (files) => {
            console.log('postDetails')
    }
    const submitHandler = () => {
        console.log('submitHandler')

    }


    return (
        <VStack spacing={'5px'} color={'black'}>
            <FormControl id='first-name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    name='name'
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder='Enter Your Name'

                />
            </FormControl>
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    name='email'
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder='Enter Your Name'

                />
            </FormControl>

            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        type={show ? "text" : "password"}
                        name='password'
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        placeholder='Enter Your Password'

                    />
                    <InputRightElement width={'4.5rem'}>
                        <Button h='1.75rem' size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>

            </FormControl>

            <FormControl id='confirmPassword' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        type={show1 ? "text" : "password"}
                        name='confirmPassword'
                        value={form.confirmPassword}
                        onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                        placeholder='Re-Enter Your Password'

                    />
                    <InputRightElement width={'4.5rem'}>
                        <Button h='1.75rem' size="sm" onClick={handleClick1}>
                            {show1 ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>

            </FormControl>
            <FormControl id='pic' >
                <FormLabel>Upload Your Picture</FormLabel>
                <Input
                    type="file"
                    p={1.5}
                    id="upload-picture"
                    accept="image/*"
                    onChange={(e)=>postDetails(e.target.files[0])}
                />
            </FormControl>
            <Button
                colorScheme='blue'
                width={'100%'}
                style={{ marginTop: 15 }}
                onClick={submitHandler}
            >
                Sign Up
            </Button>
        </VStack>
    )
}

export default Signup
