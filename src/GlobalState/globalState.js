import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState, useGlobalState} = createGlobalState({
  items: [],
  favoriteBooks: [],
  numberBooks: 0,


})

export {useGlobalState, setGlobalState}