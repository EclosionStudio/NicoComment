/**
 * Created by tokei on 2017/3/16.
 */

function LoadNicoReducer(serverData={}, action){

    switch(action.type){
        case 'SHOW_RETURN_STRINGS':
            // console.log('success return');
            return action.serverData;
        default:
            return serverData;
    }


}

export default LoadNicoReducer;