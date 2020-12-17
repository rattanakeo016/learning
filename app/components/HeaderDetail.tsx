import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontGSansBold } from '../../customs/customFont'
import modules from '../modules'

interface Props {

}

const HeaderDetail = (props: Props) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <TouchableOpacity
                onPress={() => { navigation.goBack() }}
            >
                <Text style={styles.textLogo}>Back</Text>
            </TouchableOpacity>

        </View>
    )
}

export default HeaderDetail

const styles = StyleSheet.create({
    container: {
        padding: modules.PADDING,
        backgroundColor: modules.RED
    },
    textLogo: {
        fontSize: modules.FONT_H3,
        color: modules.WHITE,
    }
})
