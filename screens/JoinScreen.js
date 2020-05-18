import React, {useState} from 'react';
import { View,TextInput, Image, Button, Platform, KeyboardAvoidingView } from 'react-native';
import { useDispatch} from 'react-redux';


export default function JoinScreen({navigation}){

    const dispatch = useDispatch();
    const[username, setUsername] = useState('');

    const [emptyError, setEmptyError] = useState(false);
    
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Image resizeMode="contain" style={{flex:1}} source={require('../assets/chat-icon.png')} />
            <View style={{flex:1, justifyContent:"space-around"}}>
                <TextInput 
                    style={[
                        {fontSize:30, textAlign:"center"},
                        emptyError ? { borderColor: 'red',borderBottomWidth:2 } : { borderColor: 'white',borderBottomWidth:2}
                    ]}
                    placeholder="Enter username"
                    value={username}
                    onChangeText={text => setUsername(text)}
                />  
                <Button 
                    title="Join Chat" 
                    onPress={() => {
                        {
                            if(username==''){ setEmptyError(true); }
                            else{
                                dispatch({type:'server/join', data:username});
                                navigation.navigate('App');  
                            }                                                          
                        }
                        
                    }}
                />
            </View>
            {Platform.OS==='ios' && <KeyboardAvoidingView behavior="padding" />}
        </View>
    );
}