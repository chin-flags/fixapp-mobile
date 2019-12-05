/* eslint-disable react/jsx-filename-extension */
import React, {useState, useEffect, useContext, createContext} from 'react';
import auth from '@react-native-firebase/auth';

const authContext = createContext();

export function ProvideAuth({children}) {
  const authHook = useProvideAuth();
  return (
    <authContext.Provider value={authHook}>{children}</authContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const signin = (email, password, onSuccess) => {
    return auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        const {user} = response;
        setUser(user);
        setError('');
        onSuccess();
      })
      .catch(err => {
        let error;
        switch (err.code) {
          case 'auth/user-not-found':
            error = 'User not found';
            break;
          case 'auth/wrong-password':
            error = 'Wrong credentials, try again';
            break;
          default:
            error = 'somthing went wrong !';
            break;
        }
        setError(error);
        return error;
      });
  };


  // const signup = (email, password) => {
  //   return firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(response => {
  //       setUser(response.user);
  //       return response.user;
  //     });
  // };

  const signout = onSuccess => {
    return auth()
      .signOut()
      .then(() => {
        setUser(false);
        onSuccess();
      });
  };

  // const sendPasswordResetEmail = email => {
  //   return firebase
  //     .auth()
  //     .sendPasswordResetEmail(email)
  //     .then(() => {
  //       return true;
  //     });
  // };

  // const confirmPasswordReset = (code, password) => {
  //   return firebase
  //     .auth()
  //     .confirmPasswordReset(code, password)
  //     .then(() => {
  //       return true;
  //     });
  // };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return {
    user,
    error,
    setError,
    signin,
    signout,
  };
}
