import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';


 class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      
      <div className="body">
      <h1>Thanks for stopping by! Log in here</h1>


      <div className="container">
      <h2>Please Sign In</h2>
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
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a> <br />
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <a href="" className="reg">register now!</a>
        </Form.Item>
      </Form>
      </div>
      </div>
    );
  }
}

export default Form.create()(NormalLoginForm);