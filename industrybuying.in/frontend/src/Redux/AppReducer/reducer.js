import * as types from './actionTypes'

const initState = {
    data: [],
  isLoading: false,
  isError: false
}

export const reducer = (oldState = initState, action) => {
  const {
    type,
    payload
  } = action
  switch (type) {
    case types.GET_DATA_REQUEST:
      return {
        ...oldState,
        isLoading: true

      }
      case types.GET_DATA_FAILURE:
        return {
          ...oldState,
            isError: true,

        }
        case types.GET_DATA_SUCCESS:
          return {
            ...oldState,
            isLoading: false,
              isError: false,
              data: payload

          }
        

          default:
            return oldState

  }
}