import React,{Component} from "react";
import { View,Text,Button,TextInput,StyleSheet } from "react-native";

export default class Fpass extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        password: '',
      };
    }
    
    onLogin=()=> {
      this.props.navigation.navigate('Welcome');
    }
    
    render() {
      return (
        <View style={styles.container}>
         
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Enter your email'}
            secureTextEntry={true}
            style={styles.input}
          />
          
          <Button
            title={'Generate OTP'}
            style={styles.click}
            width="500"
            height= "200"
            paddingRight="200"
            borderWidth = "10"
            onPress={this.onLogin.bind(this)}
          />
          <Text>
  
          </Text>
  
    
  
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