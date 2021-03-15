export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const ADD_TO_MEMORY = "ADD_TO_MEMORY";
export const RESET_TO_MEMORY = "RESET_TO_MEMORY";
export const MEMORY_RESET = "MEMORY_RESET";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator})
}

export const clearDisplay = () => {
    return ({type:CLEAR_DISPLAY})
}

export const addToMemory = (currValue) => {
    return ({type:ADD_TO_MEMORY, payload:currValue})
}

export const resetToMemory = () => {
    return ({type:RESET_TO_MEMORY})
}

export const memoryReset = () => {
    return ({type:MEMORY_RESET})
}