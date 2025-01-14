import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { emailErrorMsg, passwordErrorMsg} from '../../Utility/errorMsg';
import ValidateFields from '../../Utility/validateFields';
import Styles from './index.module.css';

const {errorMsg}= Styles;

export default class UserLoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: this.props.userInfo.username || '',
            password: this.props.userInfo.password || '',
            emailErrorMsg:'',
            passwordErrorMsg:'',
            checked: true,
            error: this.props.error || ''
        }
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleToggleCheckBox = () => {
        this.setState(prevState => {
            return{
                checked: prevState.checked ? false : true
            }
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const result = await ValidateFields(this.state.username, this.state.password);
        if(result.emailValidationResult && result.passwordValidationResult ){
            this.setState(prevstate=>{
                return{
                    emailErrorMsg:prevstate.emailErrorMsg !== '' && '',
                    passwordErrorMsg: prevstate.passwordErrorMsg !== '' && ''
                }
            })
            const user = {
                username: this.state.username,
                password: this.state.password
            }
            // checkbox info required to prefill user details based on checkbox checked
            const checkbox = {
                checked: this.state.checked
            }
            this.props.onSubmit(user,checkbox);
        }else {
            if(!result.emailValidationResult && !result.passwordValidationResult){
                this.setState({
                    emailErrorMsg,
                    passwordErrorMsg
                })
            }else if(!result.emailValidationResult){
                this.setState(prevstate=>{
                    return{
                        emailErrorMsg,
                        passwordErrorMsg: prevstate.passwordErrorMsg !== '' && ''
                    }
                })
            }
            else if(!result.passwordValidationResult){
                this.setState(prevstate=>{
                    return{
                        emailErrorMsg: prevstate.emailErrorMsg !== '' && '',
                        passwordErrorMsg
                    }
                })
            }
        }
    };

    render() {
        return (
            <>
            <main>
                <Form
                layout={'vertical'}
                name="basic"
                initialValues={{ remember: true }}
                onSubmit={(e)=> this.onSubmit(e)}
                >
                <Form.Item
                    label="Username"
                >
                    <Input
                    size="large"
                    name="username"
                    value={this.state.username}
                    onChange={(e) => this.handleChange(e)}
                    />
                <span className={errorMsg}>{this.state.emailErrorMsg}</span>
                </Form.Item>

                <Form.Item
                    label="Password"
                >
                    <Input.Password
                    size="large"
                    name='password'
                    value={this.state.password}
                    onChange={(e) => this.handleChange(e)}
                    />
                <span className={errorMsg}>{this.state.passwordErrorMsg}</span>
                </Form.Item>

                <Form.Item name="remember">
                    <Checkbox checked={this.state.checked} onChange={() => this.handleToggleCheckBox()}>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    onClick = {(e)=> this.onSubmit(e)}
                    >
                    Log in
                    </Button>
                </Form.Item>
                <span className={errorMsg}>{this.props.error}</span>
                </Form>
            </main>
            </>
        );
    }
}

