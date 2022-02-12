import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import EducationalQualification from '../Components/EducationalQualification';
import HeadingCard from '../Components/HeadingCard';
import PersonalDetail from '../Components/PersonalDetail';
import TechnicalEducation from '../Components/TechnicalEducation';
import AddressDetail from '../Components/AddressDetail';
import Education1 from '../Components/Education1';
import Experience from '../Components/Experience';
import Education from '../Components/Education';
import Skills from '../Components/Skills';

const ApplyJobCard = () => {
    const [field, setField] = useState({ language: [] });
    const [addField, setAddField] = useState([]);
    return (
        <div className="container" style={{ marginTop: 80 }}>
            <HeadingCard title="Apply for card">
                <PersonalDetail
                    field={field}
                    setField={setField}
                />
                <AddressDetail
                    field={field}
                    setField={setField}
                />
                <Education
                    addField={addField}
                    setAddField={setAddField}
                    field={field}
                    setField={setField} />
                {/* <TechnicalEducation
                    addField={addField}
                    setAddField={setAddField}
                    field={field}
                    setField={setField}
                /> */}
                <Skills
                    field={field}
                    setField={setField}
                />
                <Experience
                    field={field}
                    setField={setField}
                />
                <div className="my-5" style={{ display: 'flex', justifyContent: 'center' }}>
                    <MDBBtn>Pay now</MDBBtn>
                </div>
            </HeadingCard>
            <div style={{ marginTop: 50 }} />
        </div>
    )
}

export default ApplyJobCard