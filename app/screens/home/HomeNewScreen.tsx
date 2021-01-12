import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../../components/bank/Header'
import YourCard from '../../components/bank/YourCard'
import styles from './HomeStyle'

interface Props {

}

const HomeNewScreen = (props: Props) => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.containerScroll}>
                <ScrollView>
                    <YourCard />
                </ScrollView>
            </View>

        </View>
    )
}

export default HomeNewScreen

