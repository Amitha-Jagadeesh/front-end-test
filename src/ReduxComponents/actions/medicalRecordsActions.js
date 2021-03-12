import axios from 'axios';
import medicalRecordsAPI from '../../ReactComponents/Utility/apiCall';

export const fetchMedicalRecords = (user)=> async dispatch =>{
    const response = await axios.get(medicalRecordsAPI, { user });
        dispatch({
        type:'GET_MEDICAL_RECORDS',
        medicalRecords:response.data.patients
    })
}

export const deleteMedicalRecord = (patientRecord) =>{
    return{
        type:"REMOVE_PATIENT_RECORD",
        patientRecord
    }
}

export const deleteMedicalRecordsByGroup = (levelType) => {
    return{
        type:"REMOVE_PATIENTS_RECORDS_BY_GROUP",
        levelType
    }
}

