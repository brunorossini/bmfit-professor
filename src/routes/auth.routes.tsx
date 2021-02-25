import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createStackNavigator();

const options = {
  headerShown: false,
};

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator screenOptions={options}>
    <AuthStack.Screen name="signin" component={SignIn} />
    <AuthStack.Screen name="signup" component={SignUp} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
