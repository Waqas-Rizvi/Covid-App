import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from "../Store/Action";
import { getCities } from "../Store/Action";
import { useEffect } from 'react';

export const Covid = () => {
    const [selectedObj, setSelectedObj] = useState({});
    let state = useSelector(state => state)
    let dispatch = useDispatch()
    // const update = () => {
    //     dispatch({
    //         type: "DATA",
    //         username: "Hamza"
    //     })
    // }
    useEffect(() => {
        dispatch(getData())
        dispatch(getCities())
    }, [])


    // useEffect(()=>{
    //     dispatch(cities())
    // }, [])
    const onSelectChange = (e) => {
        console.log(e.target.value, state.result);

        if (state.result.length > 0) {
            const filtered = state.result.filter(item => item.state === e.target.value);
            console.log(filtered)
            if (filtered.length > 0) {
                setSelectedObj(filtered[0])
            } else {
                setSelectedObj({})
            }
        }
    }

    return (
        <div>
            <center>
                <h1 className="bg-danger p-2" style={{ color: "white" }}>Covid App</h1>
            </center>

            <div className="container">
                <center>

                    <select style={{ color: "white", width: "70%" }} className="bg-danger fs-4 mt-3 p-2" name="" id="" onChange={onSelectChange}>
                        <option value="">Select City</option>
                        {state.cities.map((v, i) => <option key={i} value={v.alpha2Code}>{v.name}</option>)}
                    </select>
                </center>
            </div>

            <div className="container mt-4 bg-danger p-5 border rounded">
                <div className="row">
                    <div className="col-md-3 border rounded">
                        <h3 className="name">Positive</h3>
                        <h5 className="name">{selectedObj.positive}</h5>
                    </div>
                    <div className="col-md-3 border rounded">
                        <h3 className="name">Total Test Results Source</h3>
                        <h5 className="name">{selectedObj.totalTestResultsSource}</h5>
                    </div>
                    <div className="col-md-3 border rounded">
                        <h3 className="name">Total Test Results</h3>
                        <h5 className="name">{selectedObj.totalTestResults}</h5>
                    </div>
                    <div className="col-md-3 border rounded">
                        <h3 className="name">Hospitalized Currently</h3>
                        <h5 className="name">{selectedObj.hospitalizedCurrently}</h5>
                    </div>
                    <div className="col-md-3 border rounded">
                        <h3 className="name">Hospitalized Cumulative</h3>
                        <h5 className="name">{selectedObj.hospitalizedCumulative}</h5>
                    </div>
                    <div className="col-md-3 border rounded">
                        <h3 className="name">On Ventilator Currently</h3>
                        <h5 className="name">{selectedObj.onVentilatorCurrently}</h5>
                    </div>
                    <div className="col-md-3 border rounded">
                        <h3 className="name">Death</h3>
                        <h5 className="name">{selectedObj.death}</h5>
                    </div>
                    <div className="col-md-3 border rounded">
                        <h3 className="name">Hospitalized</h3>
                        <h5 className="name">{selectedObj.hospitalized}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
