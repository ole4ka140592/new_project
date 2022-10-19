import React, {useEffect} from 'react';
import {RoutesAll} from "./Routes/RoutesAll";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {authTC} from "./app/authReducer";


function App() {

    const dispatch = useAppDispatch()

    const isInitializedIn = useAppSelector(state=> state.app.isInitializedIn)
    useEffect(()=>{
        dispatch(authTC())
    }, [])

    if (!isInitializedIn) {
        return <div>
            
        </div>
    }



    return (
        <div className="App">
            <RoutesAll/>
        </div>
    );
}

export default App;
