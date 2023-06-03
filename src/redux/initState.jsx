import { REDUX_LS_KEY } from './constants'

export const initState = {
  idMessage: {},
  settings: {},
}

export function gitInitState() {
  const dataFromLS = localStorage.getItem(REDUX_LS_KEY)
  return dataFromLS ? JSON.parse(dataFromLS) : initState
}
