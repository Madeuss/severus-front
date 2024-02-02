import { StyleSheet } from 'react-native'

import colors from '~/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginContainer: {
    height: '100%',
    paddingHorizontal: 42,
    justifyContent: 'center',
    backgroundColor: colors.neutral[500],
  },
  form: {
    marginTop: 44,
  },
  inputsArea: {
    marginTop: 34,
    display: 'flex',
    gap: 24,
  },
  baseText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 28,
    color: colors.neutral[100],
  },
  subtitle: {
    color: colors.neutral[400],
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },
  forgetPwd: {
    alignItems: 'flex-end',
    marginTop: 12,
  },
  signInButton: {
    backgroundColor: colors.primary.main,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    height: 50,
    borderRadius: 12,
    flexDirection: 'row',
  },
  submitText: {
    color: colors.neutral[100],
    fontSize: 20,
  },
  arrowIcon: { position: 'absolute', right: 12 },
  registerBox: {
    marginTop: 22,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  noAccountText: {
    fontWeight: 'bold',
    color: colors.neutral[100],
  },
  registerText: { color: colors.secondary.main, textDecorationLine: 'none' },
})

export const registerStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 5,
    height: '100%',
    alignItems: 'center',
    backgroundColor: colors.neutral[500],
  },
  imgRegister: {
    marginTop: 44,
    width: '100%',
    height: '35%',
  },
  formContainer: {
    height: '40%',
    width: '100%',
    paddingHorizontal: 20,
    gap: 24,
    marginTop: 34,
  },
  buttonRegister: {
    backgroundColor: colors.primary.main,
    width: 339,
    height: 50,
    marginTop: 22,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
  },
  submitText: {
    color: colors.neutral[100],
    fontSize: 20,
  },
  arrowIcon: {
    position: 'absolute',
    right: 12,
    color: colors.neutral[100],
  },
  registerBox: {
    marginTop: 22,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  haveAccountText: {
    fontWeight: 'bold',
    color: colors.neutral[100],
  },
  loginText: { color: colors.secondary.main, textDecorationLine: 'none' },
})
