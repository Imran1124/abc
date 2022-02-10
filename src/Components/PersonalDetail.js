import React, { useState } from 'react'
import { MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import HeadingCard from './HeadingCard';

const PersonalDetail = (props) => {
    const [checked, setChecked] = useState(false)

    const handleCheck = (e) => {
        if (checked === true) {
            setChecked(false)
            props.setField({ ...props.field, paddress: '' })
        } else {
            setChecked(true)
            props.setField({ ...props.field, paddress: props.field.caddress })
        }
    }

    const handleChange = (e) => {
        props.setField({ ...props.field, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className="container">
                <span>Personal Detail</span>
                <hr />
                <div className="row">
                    <div className="col-md-4 col-sm-12 my-2">
                        <MDBInput
                            className='custom-form'
                            label='Mobile no'
                            id='mobileno'
                            type='number'
                            name="mobileno"
                            value={props.field.mobileno || ''}
                            onChange={handleChange}
                            size='lg' />
                    </div>
                    <div className="col-md-4 col-sm-12 my-2">
                        <MDBInput
                            label='Name'
                            id='name'
                            type='text'
                            name="name"
                            value={props.field.name || ''}
                            onChange={handleChange}
                            size='lg'
                        />
                    </div>
                    <div className="col-md-4 col-sm-12 my-2">
                        <MDBInput
                            label='Date of birth'
                            id='dateofbirth'
                            type='date'
                            name="dateofbirth"
                            value={props.field.dateofbirth || ''}
                            onChange={handleChange}
                            size='lg' />
                    </div>
                </div>

                <div className="row my-2">
                    <div className="col-md-4 col-sm-12 my-2">
                        <MDBInput
                            label='Father Name'
                            id='fathername'
                            type='text'
                            name="fathername"
                            value={props.field.fathername || ''}
                            onChange={handleChange}
                            size='lg' />
                    </div>
                    <div className="col-md-4 col-sm-12 my-2">
                        <MDBInput
                            label='Correspondence Address'
                            id='textAreaExample'
                            textarea rows={1}
                            name="caddress"
                            value={props.field.caddress || ''}
                            onChange={handleChange}
                            size='lg' />
                    </div>
                    <div className="col-md-4 col-sm-12 my-2">
                        <MDBInput
                            label='Permanent Address'
                            id='textAreaExample'
                            textarea rows={1}
                            name="paddress"
                            value={props.field.paddress || ''}
                            onChange={handleChange}
                            size='lg'
                            disabled={checked} />
                        <MDBCheckbox
                            name='flexCheck'
                            value=''
                            id='flexCheckDefault'
                            label='same as correspondence address'
                            onChange={handleCheck}
                            checked={checked}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetail