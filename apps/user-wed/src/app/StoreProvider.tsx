'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore, makeStore } from '../redux/store'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    
    storeRef.current = makeStore()
    // storeRef.current.dispatch(initial(initialState))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}