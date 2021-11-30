import React from 'react'
import ContactForm from "./ContactForm";
import s from "./FormSubmit.module.css"

function FormSubmit() {
    return (
        <div className={s.FormSubmit}>
            <ContactForm />
        </div>
    )
}

export default FormSubmit
