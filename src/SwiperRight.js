import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    childContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: '85%',
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
                <View style={styles.childContainer}>
                    <Text>Will show the list of all scanned cards</Text>
                </View>
            </View>
        );
    }
}

export default SwiperRight;