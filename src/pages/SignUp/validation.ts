import * as yup from 'yup';

export default yup.object().shape({
  name: yup.string().required,
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatório'),
  phone: yup.string().required(),
});
