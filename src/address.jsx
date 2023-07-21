import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const Address = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <div className="card address_icon"  /*ref={props.add}*/  style={{ zIndex: "100" }}>
                <div className="card-header py-4" >
                    <b style={{ fontSize: "large" }}>Choose your location</b>
                </div>

                <div className="card-body">

                    <p className="card-text text-secondary card_text1">Select a delivery location to see product availability and <br />delivery options</p>
                    <a href="/random" className="btn btn-warning mb-3">Sign in to see your address</a>

                    <div className="line_x">
                        <div className="" />
                        <p className="card-text text-secondary card_text2" >or enter an Indian pincode</p>
                        <div className="" />
                    </div>

                    <div className="form-group mb-3">
                        <input type="text" />
                        <button type="button" className="btn btn-outline-secondary ">Apply</button>
                    </div>

                    <div className="line_x2">
                        <div />
                        <p className="card-text text-secondary">or</p>
                        <div />
                    </div>

                    <FormControl fullWidth id="form_control">
                        <InputLabel id="demo-simple-select-label" style={{ position: "relative", top: "12px" }}>Deliver outside india</InputLabel>
                        <Select
                            style={{ width: "100%", height: "2.5rem" }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Deliver outside india"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </>
    )
}

export default Address;