import React, { useState } from 'react'
import { Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
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

  // Rotation
  rotationBox: {
    height: 150,
    width: 150,
    backgroundColor: 'green',
  },

  // Percent
  percentBox: {
    // height: '20%',
    width: '50%',
    backgroundColor: 'purple',
  },
})

export default function TabTwoScreen() {
  const [animation, setAnimation] = useState(new Animated.Value(0))
  const [rotation, setRotation] = useState(new Animated.Value(0))
  const [percent, setPercent] = useState(new Animated.Value(0))

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }).start()
    })
  }

  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)'],
    // outputRange: ['#FF0000', '#00FF00'],
  })

  const colorInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(99,71,255)', 'rgb(255,99,71)'],
    // outputRange: ['#0000FF', '#FFFF00'],
  })

  const boxAnimatedStyle = {
    backgroundColor: boxInterpolation,
  }

  const textAnimatedStyle = {
    color: colorInterpolation,
  }

  // Rotation
  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  })

  const rotationStyles = {
    transform: [
      {
        rotate: rotateInterpolate,
        // rotateY: rotateInterpolate,
        // rotateX: rotateInterpolate,
      },
    ],
  }

  const startRotation = () => {
    Animated.timing(rotation, {
      toValue: 360,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(rotation, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }).start()
    })
  }

  // Percent Height / Width
  const heightInterpolation = percent.interpolate({
    inputRange: [0, 1],
    outputRange: ['20%', '30%'],
  })

  const widthInterpolation = percent.interpolate({
    inputRange: [0, 1],
    outputRange: ['20%', '50%'],
  })

  const percentStyles = {
    height: heightInterpolation,
    width: widthInterpolation,
  }

  const startPercent = () => {
    console.log('START PERCENT ANIMATION CALLED')
    Animated.timing(percent, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(percent, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }).start()
    })
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, boxAnimatedStyle]}>
          <Animated.Text style={textAnimatedStyle}>COLOR INTERPOLATION</Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={startRotation}>
        <Animated.View style={[styles.rotationBox, rotationStyles]}>
          <Animated.Text style={textAnimatedStyle}>ROTATION INTERPOLATION</Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={startPercent}>
        <Animated.View style={[styles.percentBox, percentStyles]}>
          <Animated.Text style={textAnimatedStyle}>PERCENT INTERPOLATION</Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  )
}
