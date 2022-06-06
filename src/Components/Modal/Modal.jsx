import React from 'react';
import Button from '../Button/Button';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';
import Wrap from '../Wrapper/Wrap';
import './Modal.css'

const Modal = ({active,setActive}) => {
    return (
        <div className={active?"modal active":"modal"} onClick={()=>setActive(false)}>
            
                <Wrap >
                    <Logo/>
                    <Form>
                        <h4>Восстановление пароля</h4>
                    <Input mask='1' id='1' placeholder='номер телефона'/>
                    <div className='forgot_wrap'>
                        <a className='forgot' href="#" onClick={()=>setActive(false)}>Назад</a>
                    </div>
                    <Button name="Позвонить"/>
                    </Form>
                </Wrap>
        </div>
    );
};

export default Modal;