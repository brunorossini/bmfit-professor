import React from 'react';
import { View, Text, Button } from 'react-native';

import { useAuth } from '../../contexts/auth';

const SignIn: React.FC = () => {
  const { user, signIn } = useAuth();

  return (
    <View>
      <Text>SignIn</Text>
      <Text>{user}</Text>
      <Button
        onPress={() =>
          signIn({ email: 'brunorossini@live.com', password: '123456' })
        }
        title="Login"
      />
    </View>
  );
};

export default SignIn;
