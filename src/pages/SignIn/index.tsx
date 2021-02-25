import React from 'react';
import { View, Text } from 'react-native';
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
} from './styles';
import SchemaValidation from './validation';

const SignIn: React.FC = ({ navigation }) => {
  const { signIn } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SchemaValidation,
    onSubmit: values => {
      signIn(values);
    },
  });

  return (
    <Container>
      <Title>Login</Title>
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
      <SubmitButton onPress={() => formik.handleSubmit()}>
        <LabelButton>ENTRAR</LabelButton>
      </SubmitButton>
      <Link onPress={() => navigation.navigate('signup')}>
        <View>
          <Text>Não tenho cadastro</Text>
        </View>
      </Link>
    </Container>
  );
};

export default SignIn;
