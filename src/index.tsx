import { useEffect, useState } from 'react'
import { NativeEventEmitter, NativeModules } from 'react-native'

export default function useWindowBottomInset() {
  const [inset, setInset] = useState(0)

  useEffect(() => {
    const module = NativeModules.RNWindowInsetsAnimationModule
    module.listenForWindowInsetEvents()
    const eventEmitter = new NativeEventEmitter(
      NativeModules.RNWindowInsetsAnimationModule
    )
    const subscription = eventEmitter.addListener(
      'RNWindowInsetEvent',
      (event) => {
        setInset(event.bottomInset)
      }
    )

    return () => {
      subscription.remove()
    }
  }, [])

  return inset
}
