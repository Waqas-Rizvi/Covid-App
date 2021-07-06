const INITIAL_STATE = {
    username: "Waqas",
    age: "25",
    result: [],
    cities: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "RESULT":
            return {
                ...state,
                result: action.result
            }
        case "CITIES":
            return {
                ...state,
                cities: action.cities
            }
        default:
            return state
    }
}

