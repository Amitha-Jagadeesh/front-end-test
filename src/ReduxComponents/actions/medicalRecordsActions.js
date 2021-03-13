import Axios from '../../ReactComponents/Utility/apiCall';
import history from '../../ReactComponents/history'
import {GET_MEDICAL_RECORDS,
    DISPLAY_ERROR,
    REMOVE_PATIENT_RECORD,
    REMOVE_PATIENTS_RECORDS_BY_GROUP
} from './types'

export const fetchMedicalRecords = (user)=> async dispatch =>{
    await Axios.get('/3669c83a-9ba1-4424-b08f-a8ef6d699966',{ user }).then(response=>{
        dispatch({
            type: GET_MEDICAL_RECORDS,
            medicalRecords:response.data.patients
        })
        if(response.data){
            history.push('/medicalRecords')
        }
    }).catch(err=>{
            history.push({
                pathname: '/',
                error: err.response.statusText
            })
    })
}

export const deleteMedicalRecord = (patientRecord) =>{
    return{
        type: REMOVE_PATIENT_RECORD,
        patientRecord
    }
}

export const deleteMedicalRecordsByGroup = (levelType) => {
    return{
        type: REMOVE_PATIENTS_RECORDS_BY_GROUP,
        levelType
    }
}

