import React from 'react';
import { Text, Button, View } from 'react-native';
import { useFormik } from 'formik';

import { useAuth } from '../../contexts/auth';

import {
  Title,
  Container,
  Input,
  TextError,
  Link,
  SubmitButton,
  LabelButton,
} from '../SignIn/styles';
import SchemaValidation from './validation';

const SignUp: React.FC = ({ navigation }) => {
  const { signIn } = useAuth();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
      phone: '',
    },
    validationSchema: SchemaValidation,
    onSubmit: values => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <Container>
      <Title>Novo Cadastro</Title>
      <Input
        value={formik.values.name}
        onChangeText={formik.handleChange('name')}
        placeholder="Nome"
        isError={formik.errors.name && formik.touched.name}
      />
      {formik.errors.name && formik.touched.name ? (
        <TextError>{formik.errors.name}</TextError>
      ) : (
        ''
      )}
      <Input
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        placeholder="E-mail"
        isError={formik.errors.email && formik.touched.email}
      />
      {formik.errors.email && formik.touched.email ? (
        <TextError>{formik.errors.email}</TextError>
      ) : (
        ''
      )}
      <Input
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        placeholder="Senha"
        isError={formik.errors.password && formik.touched.password}
      />
      {formik.errors.password && formik.touched.password ? (
        <TextError>{formik.errors.password}</TextError>
      ) : (
        ''
      )}
      <Input
        value={formik.values.confirm_password}
        onChangeText={formik.handleChange('confirm_password')}
        placeholder="Repita a Senha"
        isError={
          formik.errors.confirm_password && formik.touched.confirm_password
        }
      />
      {formik.errors.confirm_password && formik.touched.confirm_password ? (
        <TextError>{formik.errors.confirm_password}</TextError>
      ) : (
        ''
      )}
      <Input
        value={formik.values.phone}
        onChangeText={formik.handleChange('phone')}
        placeholder="Celular"
        isError={formik.errors.phone && formik.touched.phone}
      />
      {formik.errors.phone && formik.touched.phone ? (
        <TextError>{formik.errors.phone}</TextError>
      ) : (
        ''
      )}
      <SubmitButton onPress={() => formik.handleSubmit()}>
        <View>
          <LabelButton>CADASTRAR</LabelButton>
        </View>
      </SubmitButton>
      <Link onPress={() => navigation.navigate('signin')}>
        <View>
          <Text>Já tenho login</Text>
        </View>
      </Link>
    </Container>
  );
};

export default SignUp;
