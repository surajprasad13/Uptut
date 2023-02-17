import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Avatar, Button} from 'react-native-paper';

// helpers
import {colors, fonts} from '../../theme';
import {RootStackProp} from '../../routes/types';

const Login = () => {
  const navigation = useNavigation<RootStackProp>();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Avatar.Image source={require('../../assets/images/logo.jpg')} />

          <Text style={{fontFamily: fonts.bold, fontSize: 25}}>App Name</Text>
        </View>

        <View style={{marginTop: 20}}>
          <Text style={styles.title}>Sign In</Text>
        </View>

        <View style={{marginTop: 20}}>
          <Text style={{fontFamily: fonts.bold}}>Username</Text>
          <TextInput
            placeholder="Enter Username"
            value={username}
            onChangeText={text => setUsername(text)}
            style={styles.input}
          />
        </View>

        <View style={{marginTop: 20}}>
          <Text style={{fontFamily: fonts.bold}}>Password</Text>
          <TextInput
            placeholder="Enter Password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
          />
        </View>

        <View style={{marginTop: 30, flexDirection: 'row'}}>
          <Text style={{fontFamily: fonts.regular}}>Not a memeber? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{fontFamily: fonts.bold, color: '#34DEB4'}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        <Button
          mode="contained"
          onPress={() => {
            if (username.length > 5 && password.length > 5) {
              Alert.alert('Login successful');
              navigation.navigate('Home');
            }
          }}
          labelStyle={{
            fontFamily: fonts.light,
            color: colors.white,
            textTransform: 'uppercase',
          }}
          contentStyle={{backgroundColor: colors.button}}
          style={{marginTop: 20}}>
          Sign In
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  title: {
    fontFamily: fonts.bold,
    color: colors.secondary,
    fontSize: 22,
  },
  input: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    borderColor: colors.border,
  },
});

export default Login;
