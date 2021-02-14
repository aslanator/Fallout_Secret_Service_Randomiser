import React from 'react';

function Controls({onStageChange, stage, done}) {

    return (
        <div className="controls">
            {stage < 2 ? <button onClick={onStageChange} disabled={!done}>Далее</button> : ''}
        </div>
    )
}

export default Controls;