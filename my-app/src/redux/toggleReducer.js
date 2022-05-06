const initialState = false;

export const toggleReducer = (state = initialState, action) => {
    if(action.type === "TOGGLE_BUTTON"){
        return action.payload;
    }

    return state;
}