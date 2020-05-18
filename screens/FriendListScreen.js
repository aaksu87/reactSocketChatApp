import React, {useState} from 'react';
import { View,Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector} from 'react-redux';

export default function FriendListScreen({navigation}){

    const usersOnline = useSelector(state => state.usersOnline);
        
    return (
        <View style={{flex:1}}>
            <FlatList 
                data={usersOnline}
                renderItem={
                    ({item}) => {
                        return (
                        <TouchableOpacity 
                            onPress = {() => navigation.navigate('Chat', {
                                        userData:{
                                            userName:item.username, 
                                            userId:item.userId, 
                                            avatar:item.avatar
                                        }
                                    })}
                        >
                            <View style={styles.itemContainerStyle}>
                                <Image style={styles.imageStyle} source={{uri:item.avatar}} /> 
                                <View style={styles.nameViewStyle}>
                                    <Text style={styles.nameStyle}>{item.username}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>)
                    }
                }
                keyExtractor={item => item.userId}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainerStyle: {flex:1, flexDirection:'row'},
    imageStyle : {borderRadius:50, width:100,height:100} ,
    nameViewStyle : {flex:1, alignItems:'center', justifyContent:'center'},
    nameStyle : {fontSize:20}
});