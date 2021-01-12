import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { FontGSansBold, FontGSansSemiBold } from '../../../customs/customFont'
import modules from '../../modules'
import _styles from '../../_styles'

interface Props {

}

const YourCard = (props: Props) => {
    return (
        <>
            <View style={styles.row}>

                <Text style={styles.textCard}>Your Cards</Text>
                <Text style={styles.textAdd}>Add</Text>


            </View>
            <View style={styles.containerCard}>
                <TouchableOpacity style={styles.btnCard}>
                    <FastImage
                        source={{ uri: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/363_Visa_Credit_Card_logo-512.png' }}
                        style={styles.image}
                    />
                    <View style={styles.containerMidale}>
                        <Text style={styles.textCard}>Visa Master</Text>
                        <Text style={styles.textPin}>**7645</Text>
                    </View>
                    <View style={styles.containerRigth}>
                        <Text style={styles.textCard}>$2000.00</Text>
                        <Text style={styles.textPin}>01/23</Text>
                    </View>

                </TouchableOpacity>
                <View style={styles.border} />
                <TouchableOpacity style={styles.btnCard}>
                    <FastImage
                        source={{ uri: 'https://cdn.freebiesupply.com/logos/large/2x/mastercard-4-logo-png-transparent.png' }}
                        style={styles.image}
                    />
                    <View style={styles.containerMidale}>
                        <Text style={styles.textCard}>MasterCard</Text>
                        <Text style={styles.textPin}>**7645</Text>
                    </View>
                    <View style={styles.containerRigth}>
                        <Text style={styles.textCard}>$589.00</Text>
                        <Text style={styles.textPin}>01/23</Text>
                    </View>

                </TouchableOpacity>
            </View>

        </>
    )
}

export default YourCard

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: modules.PADDING * 2,
        paddingHorizontal: modules.PADDING

    },
    textCard: {
        ...FontGSansBold,
        fontSize: modules.FONT_H4 - 2,
        color: modules.TEXT
    },
    textAdd: {
        ...FontGSansBold,
        fontSize: modules.FONT_H5,
        color: modules.ACTIVE
    },
    containerCard: {
        backgroundColor: modules.WHITE,
        padding: modules.PADDING,
        borderRadius: modules.RADIUS * 2,
        ..._styles.shadow,
        margin: modules.PADDING,
        justifyContent: 'space-between'
    },
    btnCard: {
        flexDirection: 'row',
        alignItems: 'center',
        height: modules.VIEW_PORT_HEIGHT / 12

    },
    image: {
        width: modules.VIEW_PORT_WIDTH / 8,
        height: modules.VIEW_PORT_WIDTH / 8,
        borderRadius: modules.RADIUS * 2,
        borderColor: modules.BORDER_COLOR,
        borderWidth: 1,
        backgroundColor: modules.BORDER_COLOR,
    },
    textPin: {
        color: modules.SUB_TEXT,
        ...FontGSansSemiBold,
        fontSize: modules.FONT_P,
        marginTop: modules.PADDING / 3
    },
    containerMidale: {
        flex: 1,
        paddingHorizontal: modules.PADDING / 2
    },
    containerRigth: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    border: {
        height: 1,
        backgroundColor: modules.BORDER_COLOR,
    }

})
