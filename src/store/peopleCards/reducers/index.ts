import { handleActions } from "redux-actions";
import { ACTION_TYPE, PeopleCardsStoreLeftCardActionPayload, PeopleCardsStoreRightCardActionPayload } from "../actions/types";
import { PeopleCardsState } from "./types";

export const initialState: PeopleCardsState = {
  leftCard: undefined,
  rightCard: undefined,
  error: undefined
} 

export const peopleCardsReducer = handleActions<PeopleCardsState>({
  [ACTION_TYPE.STORE_LEFT_PEOPLE_CARDS]: (state, action) => ({
    ...state,
    leftCard: (action.payload as PeopleCardsStoreLeftCardActionPayload).leftCard,
    error: undefined
  }),
  [ACTION_TYPE.STORE_RIGHT_PEOPLE_CARDS]: (state, action) => ({
    ...state,
    rightCard: (action.payload as PeopleCardsStoreRightCardActionPayload).rightCard,
    error: undefined
  }),
  [ACTION_TYPE.STORE_ERROR_PEOPLE_CARDS]: (state, action) => ({
    ...state,
    error: "We had some trouble to connect with space galactic. Please try again"
  })
}, {...initialState})