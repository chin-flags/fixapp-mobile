/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React, {
  useEffect,
  useState,
} from 'react';
import firebase from './useFirebase';

const useFirestoreCollection = (collection) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = firebase.firestore().collection(collection).onSnapshot(
      (snapshot) => {
        const dataArr = [];
        snapshot.forEach((doc) => {
          dataArr.push({ ...doc.data(), id: doc.id });
        });
        setLoading(false);
        setData(dataArr);
      },
      (err) => {
        setLoading(false);
        setError(err);
      },
    );
    return () => unsubscribe();
  }, []);
  return {
    data,
    error,
    loading,
  };
};


const useFirestoreDocument = (collection, id) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = firebase.firestore().collection(collection).doc(id).onSnapshot(
      (snapshot) => {
        console.log(snapshot)
        setData(snapshot.data());
      },
      (err) => {
        setLoading(false);
        setError(err);
      },
    );
    return () => unsubscribe();
  }, []);
  return {
    data,
    error,
    loading,
  };
};

export {
  useFirestoreCollection,
  useFirestoreDocument,
};
