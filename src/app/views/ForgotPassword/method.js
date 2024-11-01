import { useNavigation } from '@react-navigation/native';
import { isValidEmail } from '@utils/helpers';
import { useEffect, useState } from 'react';

const useMethod = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState({ email: '', password: '' });
  const [resetPassword, setResetPassword] = useState({ new: '', confirm: '' });
  console.log('🚀 ~ useMethod ~ resetPassword:', resetPassword);
  const [pwdCondition, setPwdCondition] = useState({
    length: false,
    number: false,
    lowerCase: false,
    upperCase: false,
    special: false,
    noSpaces: true,
    match: false,
  });
  console.log('🚀 ~ useMethod ~ pwdCondition:', pwdCondition);

  useEffect(() => {
    checkPwdConditions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetPassword.new, resetPassword.confirm]);

  const handleChange = (value, fieldName) => {
    setLogin(prev => {
      return { ...prev, [fieldName]: value };
    });
  };
  const handleChangePassword = (value, fieldName) => {
    setResetPassword(prev => {
      return { ...prev, [fieldName]: value };
    });
    // checkPwdConditions();
  };

  const handleSendLink = () => {
    navigation.navigate('LinkSent');
  };

  const handleUpdatePassword = () => {
    navigation.navigate('Updated');
  };

  const isButtonDisabled = (button) => {
    if (button === 'login') {
      if (isValidEmail(login.email) && login.password.length > 0) {
        return true;
      } else {
        return false;
      }
    }
    if (button === 'sendResetLink') {
      if (isValidEmail(login.email)) {
        return false;
      } else {
        return true;
      }
    }
    if (button === 'updatePassword') {
      const { length, lowerCase, upperCase, noSpaces, number, match, special } = pwdCondition;
      if (length && lowerCase && upperCase && noSpaces && number && match && special) {
        return false;
      } else {
        return true;
      }
    }
  };

  const checkPwdConditions = () => {
    if (resetPassword.new.length >= 8 && resetPassword.new.length <= 16) {
      setPwdCondition(prev => {
        return { ...prev, length: true };
      }
      );
    } else {
      setPwdCondition(prev => {
        return { ...prev, length: false };
      }
      );
    }
    const numberRegex = /\d/;
    if (numberRegex.test(resetPassword.new)) {
      setPwdCondition(prev => {
        return { ...prev, number: true };
      }
      );
    } else {
      setPwdCondition(prev => {
        return { ...prev, number: false };
      }
      );
    }
    const lowerCaseRegex = /[a-z]/;
    if (lowerCaseRegex.test(resetPassword.new)) {
      setPwdCondition(prev => {
        return { ...prev, lowerCase: true };
      }
      );
    } else {
      setPwdCondition(prev => {
        return { ...prev, lowerCase: false };
      }
      );
    }
    const upperCaseRegex = /[A-Z]/;
    if (upperCaseRegex.test(resetPassword.new)) {
      setPwdCondition(prev => {
        return { ...prev, upperCase: true };
      }
      );
    } else {
      setPwdCondition(prev => {
        return { ...prev, upperCase: false };
      }
      );
    }
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (specialCharRegex.test(resetPassword.new)) {
      setPwdCondition(prev => {
        return { ...prev, special: true };
      }
      );
    } else {
      setPwdCondition(prev => {
        return { ...prev, special: false };
      }
      );
    }
    const spaceRegex = /\s/;
    if (spaceRegex.test(resetPassword.new)) {
      setPwdCondition(prev => {
        return { ...prev, noSpaces: false };
      }
      );
    } else {
      setPwdCondition(prev => {
        return { ...prev, noSpaces: true };
      }
      );
    }
    if (resetPassword.new === resetPassword.confirm && resetPassword.new.length > 0 && resetPassword.confirm.length > 0) {
      setPwdCondition(prev => {
        return { ...prev, match: true };
      }
      );
    } else {
      setPwdCondition(prev => {
        return { ...prev, match: false };
      }
      );
    }


  };

  return {
    login,
    resetPassword,
    pwdCondition,
    handleSendLink,
    handleChange,
    handleChangePassword,
    handleUpdatePassword,
    isButtonDisabled,
    navigation,
  };
};

export default useMethod;
