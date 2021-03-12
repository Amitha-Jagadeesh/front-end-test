import React from 'react';
import Styles from './index.module.css';
import { Form, Button } from 'antd';

const {
    medicalRecordsContainer,
    headerContainer,
    patientsRecordListContainer,
    deleteRecordsByGroup,
    levelContainer,
    patientsList,
    patientRecord,
    deleteRecord
} = Styles;

const MedicalrecordListing = (props) => {

    //The below function is used to Group patients by the "type" property
    const result = props.medicalRecords.reduce((r, medicalRecord) => {
        r[medicalRecord.type] = r[medicalRecord.type] || [];
        r[medicalRecord.type].push(medicalRecord);
        return r;
    }, Object.create(null));

    //Sort Grouped records based on last_visit_date or by patient's name
    const sortedRecords = Object.keys(result).map(key => {
        return{
                [key]: result[key].sort((patient1,patient2)=>{
                    return (
                        patient1.last_visit_date > patient2.last_visit_date 
                        || patient1.name > patient2.name
                    ) ;
                })
        }
    })

    const handleDelete = (patientRecord) => {
        props.onDelete(patientRecord)
    }

    const handleDeleteRecordsByGroup = (leveltype) => {
        props.onDeleteRecordsbyGroup(leveltype)
    }
    
    return (
        <div className={medicalRecordsContainer}>
            <h2 className={headerContainer}>Patients:</h2>
            {sortedRecords.map(key => {
                let levelType = (Object.keys(key))[0];
                return (
                    <div className={patientsRecordListContainer} key={levelType}>
                        <section className={deleteRecordsByGroup}>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    onClick={()=>{handleDeleteRecordsByGroup(levelType)}}
                                >
                                    Delete {levelType.toUpperCase()}
                                </Button>
                            </Form.Item>
                        </section>
                        <div className={levelContainer}>
                            <h3>{levelType.toUpperCase()}</h3>
                        </div>
                        {Object.values(key)[0].map(medicalRecord => {
                            return (
                                //display users only whose "is_completed" value is false.
                                !medicalRecord.is_completed
                                && (
                                    <div className={patientsList} key={medicalRecord.name}>
                                        <section className={patientRecord}>
                                            <p>Name:{medicalRecord.name}</p>
                                            <p>Joined:
                                                {new Date(medicalRecord.joined).toDateString().substr(4)}
                                            </p>
                                            <p>Last Visit:
                                                {new Date(medicalRecord.last_visit_date).toDateString().substr(3)}
                                            </p>
                                            <p>Completed: {String(medicalRecord.is_completed)}</p>
                                        </section>
                                        <section className={deleteRecord}>
                                            <Form.Item>
                                                <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    size="large"
                                                    onClick={() => handleDelete(medicalRecord)}
                                                >
                                                    Delete
                                                </Button>
                                            </Form.Item>
                                        </section>
                                    </div>
                                )
                            )
                        })}
                    </div>

                )

            })}

        </div>
    )
}

export default MedicalrecordListing;