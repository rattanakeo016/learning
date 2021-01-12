import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import { FontGSansBold, FontGSansSemiBold } from '../../../customs/customFont'
import Icon from 'react-native-vector-icons/FontAwesome'
import modules from '../../modules'
import FastImage from 'react-native-fast-image'

interface Props {

}

const Header = (props: Props) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <SafeAreaView />
            <View style={styles.row}>
                <Text style={styles.textBalance}>$2,500.00</Text>
                <View style={styles.containerRight}>
                    <Icon style={styles.iconBell} name="bell" />
                    <FastImage
                        source={{ uri: 'https://i.pinimg.com/564x/00/7e/11/007e115031427b98639c2db7cef88a21.jpg' }}
                        style={styles.imageProfile}
                    />
                </View>
            </View>
            <Text style={styles.textAvailable}>Available Balance</Text>
            <View style={styles.row}>
                <TouchableOpacity style={styles.center}>
                    <View style={styles.btnIcon}>
                        <Icon style={styles.iconMain} name="paper-plane" />
                    </View>
                    <Text style={styles.textMain}>Send</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.center}>
                    <View style={styles.btnIcon}>
                        <Icon style={styles.iconMain} name="flag" />
                    </View>
                    <Text style={styles.textMain}>Request</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.center}>
                    <View style={styles.btnIcon}>
                        <Icon style={styles.iconMain} name="calendar" />
                    </View>
                    <Text style={styles.textMain}>History</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.center}>
                    <View style={styles.btnIcon}>
                        <Icon style={styles.iconMain} name="pie-chart" />
                    </View>
                    <Text style={styles.textMain}>Change</Text>

                </TouchableOpacity>


            </View>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: modules.PRIMARY
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: modules.PADDING,
        paddingVertical: modules.PADDING / 2,
        justifyContent: 'space-between'

    },
    textBalance: {
        color: modules.WHITE,
        ...FontGSansBold,
        fontSize: modules.FONT_H2
    },
    iconBell: {
        color: modules.WHITE,
        fontSize: modules.FONT_H4,
        marginRight: modules.PADDING
    },
    imageProfile: {
        width: 38,
        height: 38,
        borderRadius: 6,
        borderColor: modules.WHITE,
        borderWidth: 1,
    },
    containerRight: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textAvailable: {
        color: modules.CARD_BORDER,
        paddingHorizontal: modules.PADDING,
        ...FontGSansSemiBold,
        fontSize: modules.FONT_H6
    },
    btnIcon: {
        width: modules.VIEW_PORT_WIDTH / 8,
        height: modules.VIEW_PORT_WIDTH / 8,
        backgroundColor: modules.WHITE,
        borderRadius: modules.RADIUS * 2,
        marginVertical: modules.PADDING / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconMain: {
        color: modules.PRIMARY,
        fontSize: modules.FONT_H3
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:modules.PADDING/2
    },
    textMain: {
        color: modules.WHITE,
        ...FontGSansSemiBold
    }

})
