import React from 'react';
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
import { createUserProfileDocument, getCreatedUser } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';
import { INITIAL_STATE, Props, State } from './utils';

class SignUp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('Passwords dont match');
      return;
    }

    try {
      const { user } = await getCreatedUser(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({ ...INITIAL_STATE });
    } catch (err) {
      alert(err);
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLFormElement>): void => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            handleChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            handleChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            handleChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit' isGoogleSignIn={false}>SIGN UP</CustomButton>
        </form>
      </div>
    );
  };
};

export default SignUp;
