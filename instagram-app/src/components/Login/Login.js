import React from 'react';
import './Login.scss';
import dummyUsers from '../../../src/dummy-users';
import { Form, Icon, Input, Button } from 'antd';

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
      <div className='log-in-page'>
        <h1 className='log-in-title'>Welcome to Instakilo</h1>
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
      </div>
      
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;