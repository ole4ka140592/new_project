import React, {useEffect} from 'react';
import {RoutesAll} from "./Routes/RoutesAll";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {authTC} from "./app/authReducer";
import {Preloader} from "./preloader/Preloader";
import {NavigateList} from "./common/NavigateList";


function App() {
    const isLoading = useAppSelector(state=> state.login.isLoggedIn)
    const status = useAppSelector(state=> state.app.status)
    const dispatch = useAppDispatch()

    const isInitializedIn = useAppSelector(state=> state.app.isInitializedIn)

    useEffect(()=>{
        dispatch(authTC())
    }, [])


    if (!isInitializedIn) {
        debugger
        return (<div>
            <Preloader/>
        </div>
        )
    }



    return (
        <div className="App">
            {/*{status==="loading" && <Preloader/>}*/}
            <NavigateList/>
            <RoutesAll/>
        </div>
    );
}

export default App;
