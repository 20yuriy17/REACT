import React, {Component} from 'react';

const TrenerList = (props) => {

    return(
        <div className={props.cln}
             onClick={props.applyTrainer} >
            {props.name}
            </div>
    )
};

export default TrenerList;