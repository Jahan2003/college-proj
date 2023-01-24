import React, { Component } from 'react';
import { Button, TextInput, Text , View, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin=()=> {
    this.props.navigation.navigate('DashBoard');
  }
  oncl=()=> {
    this.props.navigation.navigate('ForgetPassword');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.click}
          width="500"
          height= "200"
          paddingRight="200"
          borderWidth = "10"
          onPress={this.onLogin.bind(this)}
        />
        <Text>

        </Text>

        <Button title={"Forgot PassWord?"}
          
          onPress={this.oncl.bind(this)}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 9,
    borderRadius:7,
    borderWidth: 1.1,
    fontFamily:'sans-serif-medium',
    borderColor: 'black',
    marginBottom: 30,
  },

  click:
  { 
    width: 500,
    height: 200,
    paddingRight: 200,
  },
  fp:
  {
      backgroundColor:'white',
  }
  
}
);