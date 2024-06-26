import { useState} from 'react';
import { Box,TextField ,Button, styled,Typography} from '@mui/material';

     
     const Component = styled(Box)`
       width: 400px; /* Assuming you meant to specify a width in pixels */
       margin: auto; /* If you intended to center the box horizontally, you should use 'auto' */
       box-shadow: 5px 2px 5px 2px rgba(0, 0, 0, 0.6); /* Corrected syntax for rgba color */
     `;

     const Image=styled('img')({
        width:100,
        margin:'auto',
        display:'flex',
        padding:'50px 0 0'
     });

     const Wrapper=styled(Box)`
        padding: 25px 35px;
        display:flex;
        flex:1;
        flex-direction:column;
        & > div,& > button,& > p{
            margin-top:20px;
        } 
     
     
     `;
     
     

    const LoginButton=styled(Button)`
        text-transform:none;
        background:#FB6A1B;
        color:#fff;
        height:48px;
        burder-radius:2px;
    `;

    const SignupButton=styled(Button)`
        text-transform:none;
        background:#fff;
        color:#2874f0;
        height:48px;
        burder-radius:2px;
        box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
    `;
    const Text=styled(Typography)`
        color:#878787;
        font-size:16px;
    `;


    const signupInitialValues={
        name:'',
        username:'',
        password:''

    }

const Login = () => {
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
     
    const [account, toggleAccount]= useState('login');
    const [signup, setSignup]= useState(signupInitialValues);
    
    const toggleSignup= () => {
        account==='signup' ? toggleAccount('login'):toggleAccount('signup');
    }
    const onInputChange=(e) => {
        setSignup({...signup,[e.target.name]: e.target.value});
    }
    return (
    
       <Component>
            <Box>
                <Image src={imageURL} alt="login" />
                {
                  account === 'login'?
                  <Wrapper>
                        <TextField variant="standard" label="Enter Username"/>
                        <TextField variant="standard" label="Enter Password"/>
                        <br/>
                        <LoginButton variant='contained'>Login</LoginButton>
                        <Text style={{textAlign:'center'}}>OR</Text>
                        <SignupButton onClick={() => toggleSignup()}>Create An Account</SignupButton>
                   </Wrapper>
                   :
                    <Wrapper>
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name'      label="Enter Name"/>
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username'  label="Enter Usename"/>
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name= 'password' label="Enter Password"/>
                        <br/>
                        <SignupButton >Signup</SignupButton>
                        <Text style={{textAlign:'center'}}>OR</Text>
                        <LoginButton variant='contained' onClick={() => toggleSignup()}>Already Have An Account</LoginButton>
                </Wrapper>

                }    
            </Box>    
       </Component>
    );

}
export default Login;