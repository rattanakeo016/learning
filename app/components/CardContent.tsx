import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontGSansBold } from '../../customs/customFont'
import modules from '../modules'
import images from '../modules/images'
// import styles from '../screens/getStart/GetStartStyle'
import _styles from '../_styles'

interface Props {
    viewCard: () => void,
    name: string,
    sex: string,
    where: string,
    image: string,
    price: any,
}

const CardContent = ({ viewCard, name, sex, where, image, price }: Props) => {
    return (
        <View style={styles.card}>
            {/* <TouchableOpacity
                onPress={viewCard}
                style={styles.btnView}>
                <Text style={styles.textView}>VIEW</Text>
            </TouchableOpacity> */}
            <Text style={styles.name}>
                Name: {name}
            </Text>
            <Text style={styles.sex}>
                Sex: {sex}
            </Text>
            <Text style={styles.where}>
                From: {where}
            </Text>
            <FastImage style={styles.container} source={{ uri: image }}>
                <Text style={styles.price}>
                    {price}
                </Text>
            </FastImage>

        </View>
    )
}

export default CardContent

const styles = StyleSheet.create({
    container: {

        margin: modules.PADDING * 2,
        overflow: 'hidden',
        borderRadius: 12,
        height: modules.VIEW_PORT_WIDTH - modules.PADDING * 4,

    },
    card: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.2)',
        paddingHorizontal: modules.PADDING * 1.5,
        paddingVertical: modules.PADDING,
    },
    name: {
        color: modules.WHITE_AL,
        fontSize: 30,
        ..._styles.shadow
    },
    btnView: {
        paddingHorizontal: modules.PADDING,
        paddingVertical: modules.PADDING / 2,
        borderWidth: 2,
        borderColor: modules.WHITE,
    },
    textView: {
        color: modules.WHITE,
        ...FontGSansBold
    },
    sex: {
        fontSize: 20,
        ...FontGSansBold
        
    },
    where: {

    },
    price: {
        fontSize: 50,
        color: '#fff',
    }
})