/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import React, {
  useContext,
  createContext,
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import firebase from 'firebase';
import '@firebase/firestore';
import firebaseConfig from '../config/fbConfig';

firebase.initializeApp(firebaseConfig);

const firebaseContext = createContext();

const firebaseFunctions = () => {
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
    firebase,
    signin,
    signup,
    signout,
    error: state.error,
    authUser: state.user,
    initializing: state.initializing,
  };
};

export function FirebaseProvider({ children }) {
  return (
    <firebaseContext.Provider value={firebaseFunctions()}>{children}</firebaseContext.Provider>
  );
}

export const useFirebase = () => (
  useContext(firebaseContext)
);

FirebaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
