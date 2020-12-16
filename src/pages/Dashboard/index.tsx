import React from 'react';
import { View, Text, Button } from 'react-native';

import { useAuth } from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <View>
      <Text>{user?.name}</Text>
      <Text>{user?.email}</Text>
      <Button title="Sair" onPress={() => signOut()} />
    </View>
  );
};

export default Dashboard;
