import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer=combineReducers({
    auth:authReducer,
    project:projectReducer,
    fireStoreData:firestoreReducer,
    fireBaseData:firebaseReducer /* if you vant change the name of 'fireBaseData' 
                                to an other change in index.js in reactReduxFirebase -> firebaseStateName: 'fireBaseData' */
});
export default rootReducer;