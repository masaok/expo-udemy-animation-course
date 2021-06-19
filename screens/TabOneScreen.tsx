import * as React from 'react'
import { Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => console.log('PRESSED')}>
        <Animated.View>
          <Text>HELLO</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
