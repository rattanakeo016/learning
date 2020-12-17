import React from 'react'
import { Alert, Button, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainHeader from '../../components/MainHeader'
import ProfileCard from '../../components/ProfileCard'
import { ProfileDoc } from '../../dummy'
import styles from './HomeStyle'
interface Props {
    navigation: any
}

const HomeScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <MainHeader />
            <ScrollView>


                {
                    ProfileDoc.map((item) => {
                        return (
                            <ProfileCard
                                onView={() => navigation.navigate("GETSTART", { item })}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        )
                    })
                }
            </ScrollView>

        </View>
    )
}

export default HomeScreen

