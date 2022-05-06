const initialState = false;

export const createFormReducer = (state = initialState , action) => {
    if(action.type === "CREATE_FORM")
    {
        return action.payload;
    }

    return state;
}