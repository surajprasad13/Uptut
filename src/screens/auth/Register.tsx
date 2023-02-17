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
import Feather from 'react-native-vector-icons/Feather';

// helpers
import {colors, fonts} from '../../theme';
import {RootStackProp} from '../../routes/types';

const Register = () => {
  const navigation = useNavigation<RootStackProp>();

  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={styles.iconContainer}>
          <Feather name="chevron-left" color={colors.secondary} size={20} />
        </TouchableOpacity>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Avatar.Image source={require('../../assets/images/logo.jpg')} />

          <Text style={{fontFamily: fonts.bold, fontSize: 25}}>App Name</Text>
        </View>

        <View style={{marginTop: 20}}>
          <Text style={styles.title}>Sign Up</Text>
        </View>

        <View style={{marginTop: 20}}>
          <Text style={{fontFamily: fonts.bold}}>Email</Text>
          <TextInput
            placeholder="Enter Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
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

        <View style={{marginTop: 20}}>
          <Text style={{fontFamily: fonts.bold}}>Confirm Password</Text>
          <TextInput
            placeholder="Enter Confirm Password"
            secureTextEntry
            value={password}
            onChangeText={text => setConfirmPassword(text)}
            style={styles.input}
          />
        </View>

        <View style={{marginTop: 30, flexDirection: 'row'}}>
          <Text style={{fontFamily: fonts.regular}}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{fontFamily: fonts.bold, color: '#34DEB4'}}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>

        <Button
          mode="contained"
          onPress={() => {
            const valid =
              username.length > 5 &&
              email.length > 6 &&
              confirmPassword.length > 5;

            if (valid) {
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
  iconContainer: {
    width: 30,
    height: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.border,
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

export default Register;
