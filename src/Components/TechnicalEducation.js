import React from 'react'
import { MDBInput, MDBBtn, MDBRadio, MDBIcon } from 'mdb-react-ui-kit';
import HeadingCard from './HeadingCard';

const TechnicalEducation = (props) => {

    const handleChange = (index, e) => {
        const values = [...props.addField];
        values[index][e.target.name] = e.target.value;
        props.setAddField(values);
    }

    const adddata = (e) => {
        props.setAddField([...props.addField, { technical: '' }])
    }

    const handleRemove = (index) => {
        const values = [...props.addField];
        values.splice(index, 1);
        props.setAddField(values);
    }

    const handleRadioChange = (e) => {
        props.setField({ ...props.field, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className="container my-5">
                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                    <span>Technical Education</span>
                    <MDBBtn onClick={adddata}>Add</MDBBtn>
                </div>
                <hr />

                {props.addField.map((event, index) => (
                    <div className="row">
                        <div className="col-md-2 col-sm-12 my-2">
                            <MDBInput
                                size='lg'
                                label='Tecnical Education'
                                id='teducation'
                                type='text'
                                name="teducation"
                                value={event.teducation}
                                onChange={e => handleChange(index, e)} />
                        </div>
                        <div className="col-md-2 col-sm-12 my-2">
                            <MDBInput
                                size='lg'
                                label='Board'
                                id='tboard'
                                type='text'
                                name="tboard"
                                value={event.tboard}
                                onChange={e => handleChange(index, e)} />
                        </div>
                        <div className="col-md-2 col-sm-12 my-2">
                            <MDBInput
                                size='lg'
                                label='Institute'
                                id='tinstiture'
                                type='text'
                                name="tinstiture"
                                value={event.tinstiture}
                                onChange={e => handleChange(index, e)} />
                        </div>
                        <div className="col-md-2 col-sm-12 my-2">
                            <MDBInput
                                size='lg'
                                label='Percentage'
                                id='tpercentage'
                                type='text'
                                name="tpercentage"
                                value={event.tpercentage}
                                onChange={e => handleChange(index, e)} />
                        </div>
                        <div className="col-md-2 col-sm-12 my-2">
                            <MDBInput
                                size='lg'
                                label='Year'
                                id='tyear'
                                type='text'
                                name="tyear"
                                value={event.tyear}
                                onChange={e => handleChange(index, e)} />
                        </div>

                        <div className='col-md-2 col-sm-1 my-2'>
                            <MDBBtn color='danger' outline onClick={handleRemove}>
                                <MDBIcon icon='trash' fas />
                            </MDBBtn>
                        </div>
                    </div>
                ))}
                {/*  */}
                <div className="my-5">
                    <span>Experience</span>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div>
                            <MDBRadio
                                name='technical'
                                id='fresher'
                                label='Fresher'
                                value="fresher"
                                checked={props.field.technical === "fresher"}
                                onChange={handleRadioChange}
                            />
                            <MDBRadio
                                name='technical'
                                id='workexperience'
                                label='Work Experience'
                                value="workexperience"
                                checked={props.field.technical === "workexperience"}
                                onChange={handleRadioChange}
                            />
                        </div>
                    </div>
                </div>

                {/*  */}
                {props.field.technical === 'workexperience' ?
                    <div className="row my-3">
                        <div className="col-md-3 col-sm-12 my-2">
                            <MDBInput
                                size='lg'
                                name="fromdate"
                                label='From Date'
                                id='mobileno'
                                type='date' />
                        </div>
                        <div className="col-md-3 col-sm-12 my-2">
                            <MDBInput
                                size='lg'
                                name="todate"
                                label='To Date'
                                id='todate'
                                type='date' />
                        </div>
                        <div className="col-md-3 col-sm-12 my-2">
                            <MDBInput
                                size='lg'
                                name="position"
                                label='Position/Designation'
                                id='position'
                                type='txet' />
                        </div>
                        <div className="col-md-3 col-sm-12 my-2">
                            <MDBInput
                                size='lg'
                                name="company"
                                label='Company/Organisation'
                                id='comapny'
                                type='text' />
                        </div>
                    </div> : null}


            </div>
        </div>
    )
}

export default TechnicalEducation