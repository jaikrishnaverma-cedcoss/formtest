import React, { useState } from 'react'

const Forms = (props) => {
    const Country = ["India", "Australia", "Usa", "Brazil", "Canada", "Japan", "Russia"]
    const [state, setState] = useState({ email: "", password: "", country: "", tc: false, data: [], passed: 0, msg1: "", msg2: "", msg3: "", msg4: "" })
    const AddUser = () => {
        if (state.msg1&&state.msg2&&state.msg3&&state.tc) {
            state.data.push({ email: state.email, password: state.password, country: state.country, tc: state.tc })
            state.email = ""
            state.password = ""
            state.country = ""
            state.tc = ""
            state.msg1=""
            state.msg2=""
            state.msg3=""
            state.msg4=""
            // alert()
            
        }
        state.state = false
        setState({ ...state })
        console.log(state)
       
    }
    const emailHandler = (e) => {
        let val = e.target.value
        if (/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(val)) {
            state.msg1 = true
            state.email=val
        }
        else {
            state.passed += 1
            state.msg1 = false
        }
        setState({ ...state})

    }

    const passwordHandler = (e) => {
        let val = e.target.value
        if (/^(?=.*[a-z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{4,20}$/.test(val)) {
            state.msg2 = true
            state.password=val
        }
        else {
            state.msg2 = false
        }
        setState({ ...state})
    }

    const selectHandler = (e) => {
        let val = e.target.value
        if (val === "-1") {
            state.msg3 = false
        } else {
            state.country=val
            state.msg3 = true
        }
        setState({ ...state})

    }
    const tcHandler = (e) => {
        if(state.tc)
        {setState({ ...state, tc: false })
 e.target.checked=true
    }
    else
    {setState({ ...state, tc: true })
    e.target.checked=false
}   
        
    }
    return (
        <>
            <div className="col p1   bgWhite bRd5" style={{ width: "300px" }}>
                <p className='m3'>Create Account</p>
                <div className="col">
                    <label htmlFor="" style={{ textAlign: "left" }}>Email:</label>
                    <input minLength={6} maxLength={25} type="text" name="email" onChange={emailHandler} />
                    <span className={`msg${state.msg1}`}>Enter Valid Email</span>
                </div>
                <div className="col">
                    <label htmlFor="" style={{ textAlign: "left" }}>Password:</label>
                    <input type="text" name="password" onChange={passwordHandler} />
                    <span className={`msg${state.msg2}`}>Create a valid password</span>
                </div>
                <div className="col" >
                    <label htmlFor="" style={{ textAlign: "left" }}>Country:</label>
                    <select name="country" id="" onChange={selectHandler}>
                        <option value="-1">--Select--</option>
                        {
                            Country.map(x => <option value={x}>{x}</option>)
                        }
                    </select>
                    <span className={`msg${state.msg3}`}>Country not selected</span>
                    <div className="row flexAIC dd">
                        <input type="checkbox" class="checkbox" name="" id="" onClick={tcHandler} />
                        <p className='tc'>I accept the term & service</p>
                    </div>
                    <span className={`msg${state.msg4}`}>T&C Not Accepted</span>
                    <button className="btn btn-info" type='button' onClick={AddUser}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Forms