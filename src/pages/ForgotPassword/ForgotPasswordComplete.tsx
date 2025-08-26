import React from 'react';
import MessagePage from '../MessagePage';

const ForgotPasswordComplete: React.FC = () => {
  return (
    <MessagePage
      status="success"
      titleKey="forgotPassword.complete.title"
      description1Key="forgotPassword.complete.description"
      buttonTextKey="common.backToLogin"
      navigateTo="/login"
    />
  );
};

export default ForgotPasswordComplete;
