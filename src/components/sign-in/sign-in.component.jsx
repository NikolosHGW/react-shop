import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { CustomButton } from '../custom-button/custom-button.component';
import { FormInput } from '../form-input/form-input.component';
import './sign-in.styles.scss';

export class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({ email: '', password: '' });
  }

  handleChange(evt) {
    const { value, name } = evt.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span className='title'>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit' children='Sign in' />
            <CustomButton
              onClick={signInWithGoogle}
              isGoogleSignIn
              children='Sign in with Google'
            />
          </div>
        </form>
      </div>
    );
  }
}
