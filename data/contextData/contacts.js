export const ContactsData = {
  title: {
    thin: 'Contact ',
    bold: 'US',
  },
  number: {
    first: '+38 (098) 12 34 567',
    second: '+38 (073) 12 34 567',
    description: 'Phone number',
  },
  email: {
    name: 'support@carptravel.com',
    description: 'E-mail',
  },
  input: {
    name: 'Full name',
    mail: 'E-mail',
    message: 'Message',
  },
};

export const Inputs = [
  {
    label: 'Full name',
    id: 'username',
    type: 'text',
    placeholder: 'John Smith',
    required: true,
    error: 'Incorrect name',
    pattern: /^[A-Z][a-z]+\s[a-zA-Z\s\.]+/,
    formData: 'username',
  },
  {
    label: 'E-mail',
    id: 'email',
    type: 'email',
    placeholder: 'johnsmith@email.com',
    required: true,
    error: 'Invalid email',
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    formData: 'email',
  },
];

export const Textarea = {
  label: 'Message',
  id: 'text',
  formData: 'user-message',
};
