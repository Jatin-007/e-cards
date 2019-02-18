import React, {Component} from 'react';
import randomcolor from 'randomcolor';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
  
  import Swiper from 'react-native-swiper';
  
  const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
  })
  
class MainScreen extends Component {

    viewStyle() {
        return {
          flex: 1,
          backgroundColor: randomcolor(),
          justifyContent: 'center',
          alignItems: 'center',
        }
    }

    render(){
        return (
            <Swiper
            loop={false}
            showsPagination={false}
            index={1}>
            <View style={this.viewStyle()}>
                <Text>LEFT</Text>
            </View>
            <Swiper
                horizontal={false}
                loop={false}
                showsPagination={false}
                index={1}>
                <View style={this.viewStyle()}>
                <Text>HOME</Text>
                </View>
            </Swiper>        
            <View style={this.viewStyle()}>
                <Text>RIGHT</Text>
            </View>
        </Swiper>
        )
    }
}

export default MainScreen;