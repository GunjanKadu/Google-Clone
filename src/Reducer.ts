export interface InitalStateProps {
  term: string | null;
}
export const initialState: InitalStateProps = {
  term: null,
};
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

const reducer = (state: InitalStateProps, action: any) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return { ...state, term: action.term };
    default:
      return state;
  }
};
export default reducer;
