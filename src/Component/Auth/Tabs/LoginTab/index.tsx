import React, { Fragment, useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { EmailAddress, ForgotPassword, Javascript, Password, RememberPassword } from '@/Constant';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import SocialAuth from './SocialAuth';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';

const LoginTab = () => {   
  const [togglePassword, setTogglePassword] = useState(false);
  const [email, setEmail] = useState("Test123@gmail.com");
  const [password, setPassword] = useState("Test@123");
  const router = useRouter();
 
  const formSubmitHandle = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();                                                                                  
    const result = await signIn("credentials", {
      email,   
      password,  
      redirect: false,
      callbackUrl: "/dashboard/ecommerce",
    });
  
    if (result?.ok) {
      toast.success("successfully Logged in Rediract......")
      router.push("/dashboard/ecommerce");
    } else {     
      toast.error("Invalid Credentaial...");
    }
  };

   
  return (
    <Fragment>
      <Form className='theme-form' onSubmit={(event) => formSubmitHandle(event)}>
        <h4>Sign</h4>
        <p>{'Enter your email & password to login'}</p>
        <FormGroup>
          <Label className='col-form-label'>{EmailAddress}</Label>
          <Input type='email' required={true} onChange={(e) => setEmail(e.target.value)} defaultValue={email} />
        </FormGroup>
        <FormGroup className='position-relative'>
          <Label className='col-form-label'>{Password}</Label>
          <Input type={togglePassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} defaultValue={password} required={true} />
          <div className='show-hide' onClick={() => setTogglePassword(!togglePassword)}>
            <span className={togglePassword ? '' : 'show'}></span>
          </div>
        </FormGroup>
        <div className='form-group mb-0'>
          <div className='checkbox ms-3'>
            <Input id='checkbox1' type='checkbox' />
            <Label className='text-muted' for='checkbox1'>
              {RememberPassword}
            </Label>
          </div>
          <a className='link' href={Javascript}>
            {ForgotPassword}
          </a>
          <Button color='primary' className='btn-block'>
            Login
          </Button>
        </div>
        <SocialAuth />
      </Form>
    </Fragment>
  );
};

export default LoginTab;
