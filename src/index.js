import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose} from "redux";
import { Provider } from "react-redux";
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import {reduxFirestore, getFirestore} from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import firebaseConfig from './config/firebaseConfig';

const store=createStore(rootReducer,
                        compose(
                            applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})
                                ),
                            reduxFirestore(firebaseConfig),
                            reactReduxFirebase(firebaseConfig,{
                                useFirestoreForProfile:true,//syncing the profile object to the store
                                 userProfile:'users',/*by default it do not  know where to go and get the collection 
                                                    so--->we need to tell go and  get the collection and sync 
                                                    here 'users' is collection name*/
                                attachAuthIsReady:true,
                                firebaseStateName: 'fireBaseData' /* rootReducer firebase name used here  */})
                        )
                    );
store.firebaseAuthIsReady.then(() => {

    ReactDOM.render(
        <Provider store={store}> 
            <App /> 
        </Provider>,
    document.getElementById('root'));
    serviceWorker.unregister();
})

