export const toggleButton = (value) => {
     return{
         type:"TOGGLE_BUTTON",
         payload:value
     }
}


export const createForm = (value) => {
    return{
        type:"CREATE_FORM",
        payload:value
    }
}


export const addAction = (value) => {
    // console.log("add")
    return {
        type:"ADD_ACTION",
        payload:value
    }
}

export const removeAction = (value) => {
    return{
        type:"REMOVE_ACTION",
        payload:value
    }
}


export const addCondition = (value) => {
    return {
        type:"ADD_CONDITION",
        payload:value
    }
}

export const addRule = (value) => {
    return {
        type : "ADD_RULE",
        payload : value
    }
}


export const deleteRule = (id) => {
    return {
        type : "REMOVE_RULE",
        payload: id
    }
}