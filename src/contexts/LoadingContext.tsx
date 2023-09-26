'use client'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

const LoadingValueContext = createContext<boolean>(false)
const LoadingSetContext = createContext<Dispatch<SetStateAction<boolean>>>(
  () => {},
)

const LoadingValueContextProvider = (props: {
  children: ReactNode
  value: boolean
}) => {
  return (
    <LoadingValueContext.Provider value={props.value}>
      {props.children}
    </LoadingValueContext.Provider>
  )
}

const LoadingSetContextProvider = (props: {
  children: ReactNode
  value: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <LoadingSetContext.Provider value={props.value}>
      {props.children}
    </LoadingSetContext.Provider>
  )
}

export const LoadingContextProvider = (props: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false)
  return (
    <LoadingSetContextProvider value={setLoading}>
      <LoadingValueContextProvider value={loading}>
        {props.children}
      </LoadingValueContextProvider>
    </LoadingSetContextProvider>
  )
}

export const useLoading = () => useContext(LoadingValueContext)
export const useSetLoading = () => useContext(LoadingSetContext)
