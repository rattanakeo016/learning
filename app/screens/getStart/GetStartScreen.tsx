import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
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
      <ImageBackground
        source={{ uri: profile?.image }}
        style={styles.imageProfile}
      />
      <View style={styles.containText}>
        <Text style={styles.textName}>{profile?.name}</Text>
        <Text style={styles.textDescription}>{profile?.description}</Text>
      </View>
    </View>
  )
}

export default GetStartScreen

