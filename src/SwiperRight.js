import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
// import fetch from 'fetch';

class SwiperRight extends Component {

    constructor(props){
        super(props);

        this.state = {
            userData: null,
        };
    }

    componentDidMount(){
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((userData) => {

                this.setState({
                    userData,
                })
            })
            .catch((error) =>{
                console.error(error);
            });
    }

    render(){
        const {userData} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.childContainer}>
                    {
                        userData &&
                            <ScrollView style={{width: '100%'}}>
                                {userData.map(item => {
                                    console.log(item);
                                    return (
                                        <View style={{borderWidth: 2,
                                            borderColor: 'black', margin: 2, borderRadius: 8, backgroundColor: 'white'}}>
                                            <Text>{item.id}</Text>
                                            <Text>{item.name}</Text>
                                            <Text>{item.email}</Text>
                                            <Text>{item.company.name}</Text>
                                        </View>
                                    )
                                })}
                            </ScrollView>

                    }

                    {
                        !userData &&

                        <Text>Will show the list of all scanned cards</Text>
                    }
                </View>
            </View>
        );
    }
}

export default SwiperRight;

// styles here
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
        maxHeight: '90%',
        width: '98%',
        marginLeft: '1%',
        marginRight: '1%',
        // borderWidth: 2,
        // borderColor: 'black',
        // backgroundColor: 'white',
        // borderRadius: 15,
    }
});
