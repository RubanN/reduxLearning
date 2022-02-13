export const counter = (state = 1, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return (state = 0);
        default:
            return state;
    }
}
export const auth = (state = false, action) => {
    switch (action.type) {
        case "LOG_IN":
            return true;
        case "LOG_OUT":
            return false;
        default:
            return false;
    }
}