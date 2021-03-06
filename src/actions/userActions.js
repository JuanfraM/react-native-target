import { SubmissionError } from 'redux-form/immutable';
import { sessionService } from 'redux-react-native-session';

import userApi from 'api/userApi';
import * as types from './actionTypes';

export const loginSuccess = () => ({
  type: types.LOGIN_SUCCESS
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS
});

export const login = user =>
  async (dispatch) => {
    try {
      const response = await userApi.login({ user });
      await sessionService.saveUser(response.data);
      dispatch(loginSuccess());
    } catch (err) {
      throw new SubmissionError({
        _error: err.error,
      });
    }
  };

export const signUp = user =>
  async (dispatch) => {
    try {
      const response = await userApi.signUp({ user });
      await sessionService.saveUser(response);
      dispatch(loginSuccess());
    } catch (err) {
      throw new SubmissionError({
        _error: err.error,
      });
    }
  };

export const logout = () =>
  async (dispatch) => {
    try {
      await userApi.logout();
      sessionService.deleteSession();
      sessionService.deleteUser();
      dispatch(logoutSuccess());
    } catch (err) {
      throw err;
    }
  };
