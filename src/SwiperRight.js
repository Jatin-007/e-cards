import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
// import fetch from 'fetch';

class SwiperRight extends Component {

    constructor(props){
        super(props);

        this.state = {
            moviesData: null,
        };
    }

    componentDidMount(){
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    moviesData: responseJson.movies
                })
                console.log(responseJson.movies)
            })
            .catch((error) =>{
                console.error(error);
            });
    }

    render(){
        const {moviesData} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.childContainer}>
                    {
                        moviesData &&
                            <ScrollView>
                                {moviesData.map(item => {
                                    console.log(item);
                                    return (
                                        <View>
                                            <Text>{item.id}</Text>
                                            <Text>{item.title}</Text>
                                            <Text>{item.releaseYear}</Text>
                                        </View>
                                    )
                                })}
                            </ScrollView>

                    }

                    {
                        !moviesData &&

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
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        borderRadius: 15,
    }
});
