/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React, {
  useContext,
  createContext,
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import firebase from './useFirebase';

const firebaseContext = createContext();

const firebaseAuthFunctions = () => {
  const [state, setState] = useState(() => {
    const user = firebase.auth().currentUser;
    return {
      user,
      initializing: !user,
      error: {},
    };
  });
  const signin = (email, password) => (
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
  );
  const signup = (email, password) => (
    firebase.auth().createUserWithEmailAndPassword(email, password)
  );

  const signout = () => (
    firebase.auth().signOut()
  );

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setState({ user, initializing: false });
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  return {
    signin,
    signup,
    signout,
    error: state.error,
    authUser: state.user,
    initializing: state.initializing,
  };
};

export function FirebaseAuthProvider({ children }) {
  return (
    <firebaseContext.Provider value={firebaseAuthFunctions()}>{children}</firebaseContext.Provider>
  );
}

export const useAuth = () => (
  useContext(firebaseContext)
);

FirebaseAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
