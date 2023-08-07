import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';

const Login = () => {
  const [show, setShow] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleClick = () => {
    setShow(!show);
}



const submitHandler = () => {
    console.log('submitHandler')

}


  return (
    <VStack spacing={'5px'} color={'black'}>
 
      <FormControl className='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          name='email'
          value={form.email}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder='Enter Your Name'

        />
      </FormControl>

      <FormControl className='password' isRequired>
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

 
      <Button
        colorScheme='blue'
        width={'100%'}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Log In
      </Button>
      <Button
      variant={'solid'}
        colorScheme='red'
        width={'100%'}
        onClick={(e)=>{
           e.preventDefault(); setForm({...form,email:"guest@example.com",password:"123456"})
        }}
      >
        Guest User Credentials
      </Button>
    </VStack>
  )
}

export default Login
