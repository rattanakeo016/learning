import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontGSansBold } from '../../customs/customFont'
import modules from '../modules'

interface Props {

}

const MainHeader = (props: Props) => {
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <Text style={styles.textLogo}>Online</Text>
        </View>
    )
}

export default MainHeader

const styles = StyleSheet.create({
    container: {
        padding: modules.PADDING,
        backgroundColor: modules.RED
    },
    textLogo: {
        fontSize: modules.FONT_H3,
        color: modules.WHITE,
        ...FontGSansBold
    }
})
