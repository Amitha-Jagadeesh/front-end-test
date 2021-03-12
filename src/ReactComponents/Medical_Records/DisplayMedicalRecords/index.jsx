import React from 'react';
import MedicalrecordListing from '../MedicalrecordsListing';
import {connect} from 'react-redux';
import Styles from './index.module.css';
import {deleteMedicalRecord} from '../../../ReduxComponents/actions/medicalRecordsActions';
import {deleteMedicalRecordsByGroup} from '../../../ReduxComponents/actions/medicalRecordsActions';
const {displayRecords} = Styles;

const DisplayMedicalRecords = (props)=>{
    return(
        <div className={displayRecords}>
            <MedicalrecordListing medicalRecords={props.medicalRecords} 
                onDelete={(patientRecord)=>{
                    props.dispatch(deleteMedicalRecord(patientRecord));
                }}
                onDeleteRecordsbyGroup={(levelType)=>{
                    props.dispatch(deleteMedicalRecordsByGroup(levelType));
                }}
            />
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        medicalRecords: state.medicalRecords
    }
}
export default connect(mapStateToProps)(DisplayMedicalRecords);