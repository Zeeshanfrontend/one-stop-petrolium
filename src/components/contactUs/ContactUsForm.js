import React from 'react'
import { CombinedFields, ContactUsFormContainer, FormButton, FormField, Message } from './ContactUsStyles'

const ContactUsForm = () => {
  return (
    <ContactUsFormContainer>
      <CombinedFields>
        <FormField>
            <label>First Name</label>
            <input type='text' />
        </FormField>
        <FormField>
            <label>Last Name</label>
            <input type='text' />
        </FormField>
      </CombinedFields>
      <CombinedFields>
        <FormField>
            <label>Email</label>
            <input type='text' />
        </FormField>
        <FormField>
            <label>Phone</label>
            <input type='number' />
        </FormField>
      </CombinedFields>
        <FormField>
            <label>Message</label>
            <Message type='text' />
        </FormField>
        <FormButton>Send Message</FormButton>
    </ContactUsFormContainer>
  )
}

export default ContactUsForm
