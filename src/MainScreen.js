import React, {Component} from 'react';
import randomcolor from 'randomcolor';
import {StyleSheet,Text,View} from 'react-native';
  
import Swiper from 'react-native-swiper';
import SwiperLeft from './SwiperLeft';
import SwiperRight from './SwiperRight';
import LinearGradient from 'react-native-linear-gradient';
  
  const styles = StyleSheet.create({
    // wrapper: {
    // },
    // slide1: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: '#9DD6EB',
    // },
    // slide2: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: '#97CAE5',
    // },
    // slide3: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: '#92BBD9',
    // },
    // text: {
    //   color: '#fff',
    //   fontSize: 30,
    //   fontWeight: 'bold',
    // },
    gradientContainer: {
        flex: 1,
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
                <SwiperLeft/>
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

            <View style={styles.gradientContainer}>
                <LinearGradient colors={['#769EF5', '#31ceb4', '#FEE2FF', '#f44271']} style={styles.gradientContainer}>
                    <SwiperRight/>
                </LinearGradient>
            </View>

        </Swiper>
        )
    }
}

export default MainScreen;