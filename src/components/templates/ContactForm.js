import React, { useRef } from 'react';
import emailjs  from 'emailjs-com';
import {Form, TextInput, TextArea, Button} from "grommet"
export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_j75h3it', 'template_b6kzq19', form.current, 'user_GHecljnWhIUpnctzx5YWn')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <Form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <TextInput type="text" name="user_name" />
            <label>Email</label>
            <TextInput type="email" name="user_email" />
            <label>Message</label>
            <TextArea name="message" />
            <Button type="submit" value="Send" />
        </Form>
    );
};
