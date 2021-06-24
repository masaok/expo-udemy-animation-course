import React, { useState } from 'react'
import { Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import { View } from '../components/Themed'

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

export default function AnimatedFunctionsScreen() {
  const [scaling, setScaling] = useState(new Animated.Value(1))

  const startScaling = () => {
    Animated.spring(scaling, {
      toValue: 2,
      useNativeDriver: false,
    }).start(() => {
      Animated.spring(scaling, {
        toValue: 1,
        useNativeDriver: false,
      }).start()
    })
  }

  const boxAnimatedStyle = {
    transform: [{ scale: scaling }],
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startScaling}>
        <Animated.View style={[styles.box, boxAnimatedStyle]}>
          <Animated.Text>SPRING FUNCTION</Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  )
}
