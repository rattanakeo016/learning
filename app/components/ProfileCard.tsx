import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontGSansBold } from '../../customs/customFont'
import modules from '../modules'
import _styles from '../_styles'

interface Props {
    onView: () => void,
    image: string,
    name: string,
    description: string
}

const ProfileCard = ({ onView, image, description, name }: Props) => {
    return (
        <ImageBackground
            style={styles.container}
            source={{ uri: image }}>

            <View style={styles.containText}>
                <View style={styles.containTop}>
                    <TouchableOpacity
                        onPress={onView}
                        style={styles.btnView}>
                        <Text style={styles.textView}>VIEW</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.textName}>{name}</Text>
                <Text numberOfLines={4} style={styles.textSubTitle}>{description}</Text>
            </View>
        </ImageBackground>
    )
}

export default ProfileCard

const styles = StyleSheet.create({
    container: {

        margin: modules.PADDING * 2,
        overflow: 'hidden',
        borderRadius: 12,
        height: modules.VIEW_PORT_WIDTH - modules.PADDING * 4
    },
    containText: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.2)',
        paddingHorizontal: modules.PADDING * 1.5,
        paddingVertical: modules.PADDING,
    },
    textName: {
        color: modules.WHITE_AL,
        fontSize: modules.FONT_H2,
        ..._styles.shadow
    },
    textSubTitle: {
        color: modules.WHITE,
        fontSize: modules.FONT_H5,
        ..._styles.shadow

    },
    containTop: {
        flex: 1,
        alignItems: 'flex-end',
        paddingVertical: modules.PADDING
    },
    btnView: {
        paddingHorizontal: modules.PADDING,
        paddingVertical: modules.PADDING / 2,
        borderWidth: 2,
        borderColor: modules.WHITE,
        borderRadius: 4
    },
    textView: {
        color: modules.WHITE,
        ...FontGSansBold
    }
})
