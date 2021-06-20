import React, { useState } from 'react'
import { Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import { Text, View } from '../components/Themed'

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

  box: {
    height: 150,
    width: 150,
    backgroundColor: 'tomato',
  },
})

export default function TabOneScreen() {
  const [animation, setAnimation] = useState(new Animated.Value(1))
  const [translation, setTranslation] = useState(new Animated.Value(0))

  const animatedStyles = {
    opacity: animation,
  }

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
    }).start(() => {
      console.log('CALLBACK AFTER ANIMATION')
      Animated.timing(animation, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }).start()
    })
  }

  const translatedStyles = {
    transform: [
      {
        translateY: translation,
      },
    ],
  }

  const startTranslation = () => {
    Animated.timing(translation, {
      toValue: 300,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      translation.setValue(0)
    })
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text>OPACITY</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={startTranslation}>
        <Animated.View style={[styles.box, translatedStyles]}>
          <Text>TRANSLATION</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  )
}
