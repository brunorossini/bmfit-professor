import * as yup from 'yup';

export default yup.object().shape({
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatório'),
});
