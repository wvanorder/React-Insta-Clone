import React from 'react';
import './Login.scss';
import dummyUsers from '../../../src/dummy-users';
import { Form, Icon, Input, Button } from 'antd';
import styled from 'styled-components';
import { keyframes } from 'styled-components';


const dissolveIn = keyframes`
 {
  from {
      opacity: 0; 
  }
  to {
      opacity: 1;
  }
`;

const Title = styled.h1`
  font-size: 100px;
  text-align: center;
  color: #307380;
  width: 500px;
  margin: 100px auto 0px auto;
  text-align: center;
  animation: ${dissolveIn};
    animation-duration: 2s;
    animation-fill-mode: both;
    
`;

const SubTitle = styled(Title)`
font-size: 32px;
  margin: 0px auto;
  animation-delay: 2s;
    animation-duration: 0.5s;
`;

const LogInPage = styled.div`
width:100%;
    background: rgb(236,255,231);
background: linear-gradient(144deg, rgba(236,255,231,1) 6%, rgba(174,219,194,1) 76%);
`

class NormalLoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      users: dummyUsers,
    };
  }

  componentDidMount() {
    console.log('login working');
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.data !== this.state.data) {
      localStorage.setItem('users', JSON.stringify(this.state.users));
    }
  }


  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) { for(let i = 0;i < this.state.users.length; i ++) {
        if(values.username === this.state.users[i].username && values.password === this.state.users[i].password) {
          console.log('Received values of form: ', values);
          localStorage.setItem('username', values.username);
          localStorage.setItem('password', values.password);
          document.location.reload();
        }
      }
        
     
      } else if(values.username === undefined || values.password === undefined) {
        alert('Please fill out both inputs!');
        
      } 
        
      
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <LogInPage className='log-in-page'>
        <Title className='log-in-title'>Welcome to Instakilo</Title>
        <SubTitle>...For when a gram just isn't enough</SubTitle>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </LogInPage>
      
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;