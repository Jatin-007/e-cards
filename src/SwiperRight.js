import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '85%',
        width: '80%',
        marginLeft: '5%',
        marginRight: '5%',
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        borderRadius: 15,
    }
});

class SwiperRight extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Will show the list of all scanned cards</Text>
            </View>
        );
    }
}

export default SwiperRight;