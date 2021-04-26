import { View, Text, TouchableOpacity, Image, TextInput, Button, StyleSheet} from 'react-native';
import React, { Component } from 'react';
import { styles } from './styles';
class login extends Component{
    render(){
        return(
            <View style={styles.parent}>
                <Image source={require('../src/assets/loginavtar1.jpg')} 
                style={{height:'27%',width:'80%'}}
                />

                <Text style={{ color: '#0000FF', fontSize: 20, marginTop:10 }}>
                    Log In
                </Text>
                
                <Text style={{ color: 'black', fontSize: 20, marginTop:10,marginLeft:-200}}>
                    Username
                </Text>

                <TextInput style={{width:'80%',borderBottomWidth:0.5,borderBottomColor:'black'}}
                placeholder={'Enter Username'}>
                </TextInput>
                <Text style={{ color: 'black', fontSize: 20,marginTop:10,marginLeft:-200}}>
                    Password
                </Text>

                <TextInput style={{width:'80%',borderBottomWidth:0.5,borderBottomColor:'black'}}
                placeholder={'Enter Password'}
                >
                </TextInput>
                
                <TouchableOpacity 
                >
                <Button 
                title='Sign In'
                ></Button>
                </TouchableOpacity>
               

                <TouchableOpacity onPress={()=>{
                    console.log('Redirecting to reset password');
                }}
                >
                    <Text style={{ color: 'red', fontSize: 15,marginLeft:-145, marginTop:10 }}>
                        Forget Password?
                    </Text>
                </TouchableOpacity>
                </View>
            
        );
        
    }
    
}
export default login;
