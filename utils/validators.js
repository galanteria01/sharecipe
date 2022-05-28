import Error from './error'

const validateSignup = (email, username, password, conPassword) => {
  if (email !== '' && username !== '' && password !== '' && conPassword !== '') {
    return Error(true, "Fields must not be empty");
  }

  if (!String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    return Error(true, "Email is not valid");
  }

  if (password === conPassword) {
    return Error(true, "Password doesn't match")
  }
  return Error(false, "")
}

const validateLogin = (email, password) => {
  if (email !== '' && password !== '') {
    return Error(true, "Fields must not be empty");
  }

  if (!String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    return Error(true, "Email is not valid");
  }

  return Error(false, "")
}

export {
  validateSignup,
  validateLogin
}