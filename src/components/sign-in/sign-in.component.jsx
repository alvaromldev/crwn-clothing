import React from 'react';
import { connect } from 'react-redux';
import {
  emailSignInStart,
  googleSignInStart,
} from '../../redux/user/user.actions';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { SignInButtons, SignInContainer, SignInTitle } from './sign-in.styles';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { handleEmailSignInStart } = this.props;
    const { email, password } = this.state;

    handleEmailSignInStart(email, password);
  };

  render() {
    const { handleGoogleSignInStart } = this.props;
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            onChange={this.handleChange}
            value={this.state.email}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            label='Password'
            required
          />

          <SignInButtons>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton
              type='button'
              onClick={handleGoogleSignInStart}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </SignInButtons>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleGoogleSignInStart: () => dispatch(googleSignInStart()),
  handleEmailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
