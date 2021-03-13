import React from 'react';
import UserLoginForm from '../UserLoginForm';
import {connect} from 'react-redux';
import {fetchMedicalRecords} from '../../../ReduxComponents/actions/medicalRecordsActions';
import addUser from '../../../ReduxComponents/actions/userAction';

const UserLogin = (props)=>{
    return(
        <>
            <UserLoginForm userInfo={props.user} error={props.error} onSubmit = {async (user,checkbox)=>{
                localStorage.clear();
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('checkbox', JSON.stringify(checkbox));
                await props.dispatch(addUser(user));
                props.dispatch(fetchMedicalRecords(user));
            }}/>
        </>
    )
}

const mapStateToProps = (state,props)=>{
    if(props.history.location.error) {
        return {
            error: props.history.location.error
        }
    } else {
        return{
            medicalRecords: state.medicalRecords,
            user: state.user
        }
    }
}

export default connect(mapStateToProps)(UserLogin);