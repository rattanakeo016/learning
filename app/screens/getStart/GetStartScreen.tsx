import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderDetail from '../../components/HeaderDetail'
import styles from './GetStartStyle'
interface Props {
  route: any
}

const GetStartScreen = ({ route }: Props) => {
  const [profile, setProfile] = React.useState<any>()
  React.useEffect(() => {
    const { item } = route.params
    setProfile(item)
    return () => { }
  }, [])
  return (
    
    <View style={styles.container}>
      <HeaderDetail />
      <ScrollView>
      <FastImage
        source={{ uri: profile?.image }}
        style={styles.imageProfile}
      />
      <View style={styles.containText}>
        <Text style={styles.textName}>{profile?.name}</Text>
        <Text style={styles.textDate}>{profile?.date}</Text>
        <View style={styles.backgroundDes}>
        <Text style={styles.textDescription}>{profile?.description}</Text>
        </View>
      </View>
      </ScrollView>
    </View>
    
  )
}

export default GetStartScreen

