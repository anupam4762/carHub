import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import CarItem from '../CarItem';
import styles from './styles';
import cars from './cars';

const CarsList = () => {
    console.log(cars)
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({item}) => <CarItem car={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default CarsList;
