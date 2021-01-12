import React, { useRef, useEffect } from 'react'
import { Alert, Animated, Button, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { SafeAreaView } from 'react-native-safe-area-context'
import CardContent from '../../components/CardContent'
import MainHeader from '../../components/MainHeader'
import ProfileCard from '../../components/ProfileCard'
import { ProfileDoc } from '../../dummy'
import { CardDoc } from '../../dummy/card'
import styles from './HomeStyle'
interface Props {
    navigation: any
}



const HomeScreen = ({ navigation }: Props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    return (
        // <View style={styles.container}>
        //     <StatusBar barStyle="light-content" />
        //     <MainHeader />
        //     {/* <FastImage
        //                         style={styles.image}
        //                         source={{
        //                             uri: 'https://i.pinimg.com/564x/00/7e/11/007e115031427b98639c2db7cef88a21.jpg',
        //                             headers: { Authorization: '9876543210' },
        //                         }}
        //                     /> */}
        //     <ScrollView>
        //         {
                         
        //             ProfileDoc.map((item) => {
        //                 return (
        //                     <ProfileCard
        //                         onView={() => navigation.navigate("GETSTART", { item })}
        //                         name={item.name}
        //                         date={item.date}
        //                         description={item.description}
        //                         image={item.image}
        //                     />

        //                 )
        //             })
        //         }
        //     </ScrollView>
        // </View>
        <View>
            <MainHeader/>
            {/* <ScrollView>
                {
                    ProfileDoc.map((item) => {
                        return (
                            <ProfileCard
                            onView={() => navigation.navigate("GETSTART", { item })}
                            name={item.name}
                            date={item.date}
                            description={item.description}
                            image={item.image}
                            />
                        )
                    })
                }
            </ScrollView> */}

            <ScrollView>
                {
                    CardDoc.map((item) => {
                        return (
                            <CardContent
                            viewCard={() => navigation.navigate("CARDCONTENT", {item})}
                            name={item.name}
                            sex={item.sex}
                            where={item.where}
                            image={item.image}
                            price={item.price}
                            />

                        )
                    })
                }
            </ScrollView>
            
        </View>
    )
}

export default HomeScreen

