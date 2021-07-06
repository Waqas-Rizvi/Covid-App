const getData = () => {
    return (dispatch) => {
        fetch('https://api.covidtracking.com/v1/states/current.json')
            .then(response => response.json())
            .then(json => dispatch({
                type: "RESULT",
                result: json
            }))
    }
}

const getCities = () => {
    return (dispatch) => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(json => dispatch({
                type: "CITIES",
                cities: json
            }))
    }
}

export {
    getData,
    getCities
}

// https://restcountries.eu/rest/v2/all

// fetch('https://api.covidtracking.com/v1/states/current.json')
//             .then(response => response.json())
//             .then(json => dispatch({
//                 type: "RESULT",
//                 result: json
//             }))