import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import useWindowBottomInset from 'react-native-window-insets-animation'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'

const App = () => {
  const inset = useWindowBottomInset()

  useEffect(() => {
    offset.value = inset
  }, [inset])

  const offset = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      marginBottom: offset.value,
    }
  })

  return (
    <>
      <View style={[{ flex: 1 }]}>
        <View style={{ backgroundColor: 'white', flex: 1 }}>
          <View style={{ flex: 1 }}>
            <FlatList
              inverted
              data={[
                { key: 'Lorem' },
                { key: 'ipsum' },
                { key: 'dolor' },
                { key: 'sit' },
                { key: 'amet' },
                { key: 'consectetur' },
                { key: 'adipiscing' },
                { key: 'elit' },
                { key: 'sed' },
                { key: 'do' },
                { key: 'eiusmod' },
                { key: 'tempor' },
                { key: 'incididunt' },
                { key: 'ut' },
                { key: 'et' },
                { key: 'dolore' },
                { key: 'magna' },
                { key: 'aliqua' },
              ]}
              renderItem={({ item }) => (
                <Text style={styles.item}>{item.key}</Text>
              )}
            />
          </View>
          <Animated.View style={animatedStyles}>
            <TextInput style={styles.input} />
          </Animated.View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginHorizontal: 12,
    marginVertical: 20,
    borderWidth: 1,
  },
  item: {
    padding: 12,
    fontSize: 18,
  },
})

export default App
