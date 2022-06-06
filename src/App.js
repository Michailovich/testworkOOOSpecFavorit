import { useState } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Form from './Components/Form/Form';
import Input from './Components/Input/Input';
import Logo from './Components/Logo/Logo';
import Modal from './Components/Modal/Modal';
import Wrap from './Components/Wrapper/Wrap';

function App() {
  const [modalActive,setModalActive]=useState(false);
  const [phone,setPhone]=useState('');
  const [password,setPassword]=useState('');

  const phoneBase='+7(111)111-11-11';
  const passwordBase='123456';
  
  const checkPass = ()=>{
    if(password===passwordBase && phone===phoneBase){
      return true;
    }
    return false;
  }
  return (
    <div className='App'> 
      <Wrap>
        <Logo/>
        <Form>
          <Input mask='1' id='1' placeholder='логин' setPhone={setPhone}/>
          <Input id='2' placeholder='пароль' setPassword={setPassword}/>
          {checkPass()?<div>Данные верны</div>:null}
          <div className='forgot_wrap'>
            <a className='forgot' href="#" onClick={()=>setModalActive(true)}>Забыли пароль?</a>
          </div>
          <Button name="Войти"/>
        </Form>
      </Wrap>
      <Modal active={modalActive} setActive={setModalActive}/>
    </div>
  );
}

export default App;
