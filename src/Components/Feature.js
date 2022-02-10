import React from 'react';
import { MDBContainer, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import Cards from './Cards';
export default function Feature() {
    return (
        <>
            <MDBContainer fluid className='feature'>
                <h2>Featres</h2>
            </MDBContainer>
            <div className="container">
                <div className="row my-4">
                    <div className="col-md-4 col-sm-12 my-3">
                        <Cards title="First Card">
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn>Button</MDBBtn>
                        </Cards>
                    </div>
                    <div className="col-md-4 col-sm-12 my-3">
                        <Cards title="First Card">
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn>Button</MDBBtn>
                        </Cards>
                    </div>
                    <div className="col-md-4 col-sm-12 my-3">
                        <Cards title="First Card">
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn>Button</MDBBtn>
                        </Cards>
                    </div>
                </div>
            </div>

        </>
    );
}