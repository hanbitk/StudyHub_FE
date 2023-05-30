import instance from '../axios/instance';

const register = async (member) => {
  try {
    const response = await instance.post('/api/members/register', member);
    console.log('Register.js: line6 RESPONSE=====> ', response);
    return response;
  } catch (error) {
    console.log('Register.js: line9 ERROR=====> ', error);
    throw error;
  }
};

const validateEmail = async ({ email }) => {
  try {
    const params = new URLSearchParams();
    params.append('email', email);
    const response = await instance.post(`/api/members/register/emailConfirm?${params}`);
    console.log('Register.js: line17 RESPONSE=====> ', response);
    return response;
  } catch (error) {
    console.log('Register.js: line20 ERROR=====> ', error);
    throw error;
  }
};

export { register, validateEmail };
