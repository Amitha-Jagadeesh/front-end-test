import {
    GET_MEDICAL_RECORDS,
    REMOVE_PATIENT_RECORD,
    REMOVE_PATIENTS_RECORDS_BY_GROUP
} from '../actions/types';

const medicalRecordsInitialState = []

const medicalRecordsReducer = (state= medicalRecordsInitialState,action)=>{
    switch (action.type) {    
        case GET_MEDICAL_RECORDS:
            return [...state,...action.medicalRecords];
        case REMOVE_PATIENT_RECORD:
            return state.filter(medicalRecord => medicalRecord.name !== action.patientRecord.name);
        case REMOVE_PATIENTS_RECORDS_BY_GROUP:
            return state.filter(medicalRecord => medicalRecord.type !== action.levelType);
        default:
            return state;
    }
}

export default medicalRecordsReducer;