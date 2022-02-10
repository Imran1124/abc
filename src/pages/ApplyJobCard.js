import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import EducationalQualification from '../Components/EducationalQualification';
import HeadingCard from '../Components/HeadingCard';
import PersonalDetail from '../Components/PersonalDetail';
import TechnicalEducation from '../Components/TechnicalEducation';

const ApplyJobCard = () => {
    const [field, setField] = useState({});
    const [addField, setAddField] = useState([]);
    return (
        <div className="container" style={{ marginTop: 75 }}>
            <HeadingCard title="Apply for card">
                <PersonalDetail
                    field={field}
                    setField={setField}
                />
                <EducationalQualification />
                <TechnicalEducation
                    addField={addField}
                    setAddField={setAddField}
                    field={field}
                    setField={setField}
                />
                <div className="my-5" style={{ display: 'flex', justifyContent: 'center' }}>
                    <MDBBtn>Pay now</MDBBtn>
                </div>
            </HeadingCard>
        </div>
    )
}

export default ApplyJobCard