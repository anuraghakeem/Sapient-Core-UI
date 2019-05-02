import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import { RouterApp } from "./components/router.component";

import * as allactions from './actions/actionCreators'

function mapStateToProps(store){
    return{
        allTodos:store.todos,
        allUsers:store.users
    }
}

function dispatcherToProps(dispatcher){
    return bindActionCreators(allactions,dispatcher);
}
export var Main = connect(mapStateToProps,dispatcherToProps)(RouterApp);

