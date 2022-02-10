import React from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import HeadingCard from './HeadingCard';

const EducationalQualification = (props) => {
    return (
        <div className='my-5'>
            <div className="container">
                <span>Educational Qualification</span>
                <hr />
                <div className="row">
                    <span>1: Matriculation</span>
                    <div className="col-md-3 col-sm-12 my-2">
                        <MDBInput size='lg' label='Education' id='education' type='text' />
                    </div>
                    <div className="col-md-3 col-sm-12 my-2">
                        <MDBInput size='lg' label='Board' id='board' type='text' />
                    </div>
                    <div className="col-md-3 col-sm-12 my-2">
                        <MDBInput size='lg' label='Institute' id='institute' type='text' />
                    </div>
                    <div className="col-md-2 col-sm-12 my-2">
                        <MDBInput size='lg' label='Percentage' id='percentage' type="text" />
                    </div>
                    <div className="col-md-1 col-sm-12 my-2">
                        <MDBInput size='lg' label='Year' id='year' type='text' />
                    </div>
                </div>

                <div className="row my-3">
                    <span>2: Intermediate</span>
                    <div className="col-md-3 col-sm-12 my-2">
                        <MDBInput size='lg' label='Education' id='education' type='text' />
                    </div>
                    <div className="col-md-3 col-sm-12 my-2">
                        <MDBInput size='lg' label='Board' id='board' type='text' />
                    </div>
                    <div className="col-md-3 col-sm-12 my-2">
                        <MDBInput size='lg' label='Institute' id='institute' type='text' />
                    </div>
                    <div className="col-md-2 col-sm-12 my-2">
                        <MDBInput size='lg' label='Percentage' id='percentage' type="text" />
                    </div>
                    <div className="col-md-1 col-sm-12 my-2">
                        <MDBInput size='lg' label='Year' id='year' type='text' />
                    </div>
                </div>
                <div className="row my-3">
                    <span>3: Graduation</span>
                    <div className="col-md-3 col-sm-12 my-2">
                        <MDBInput size='lg' label='Education' id='education' type='text' />
                    </div>
                    <div className="col-md-3 col-sm-12 my-2">
                        <MDBInput size='lg' label='Board' id='board' type='text' />
                    </div>
                    <div className="col-md-3 col-sm-12 my-2">
                        <MDBInput size='lg' label='Institute' id='institute' type='text' />
                    </div>
                    <div className="col-md-2 col-sm-12 my-2">
                        <MDBInput size='lg' label='Percentage' id='percentage' type="text" />
                    </div>
                    <div className="col-md-1 col-sm-12 my-2">
                        <MDBInput size='lg' label='Year' id='year' type='text' />
                    </div>
                </div>

                <div className="row my-3">
                    <span>4: Post Graduation</span>
                    <div className="col-md-3 col-sm-12 my-2">
                        <MDBInput size='lg' label='Education' id='education' type='text' />
                    </div>
                    <div className="col-md-3 col-sm-12 my-2">
                        <MDBInput size='lg' label='Board' id='board' type='text' />
                    </div>
                    <div className="col-md-3 col-sm-12 my-2">
                        <MDBInput size='lg' label='Institute' id='institute' type='text' />
                    </div>
                    <div className="col-md-2 col-sm-12 my-2">
                        <MDBInput size='lg' label='Percentage' id='percentage' type="text" />
                    </div>
                    <div className="col-md-1 col-sm-12 my-2">
                        <MDBInput size='lg' label='Year' id='year' type='text' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default EducationalQualification