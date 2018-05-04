import React from 'react';

export default props => {
    if(!props.data.length) {
        return <h1 className="center grey-text text-lighten-2">No To Do Items</h1>
    }

    const listElements = props.data.map((item, index) => {
        return (
            <li key={index} className='collection-item row'>
                <div className='col s10'>
                    {item.title}
                </div>
                <div className='col s2 right-align'>
                    <button onClick={() => {props.delete(index)}} className='btn red darken-2 right'>Delete</button>
                </div>
            </li>
        )
    });

    return (
        <ul className='collection'>
            {listElements}
        </ul>
    );
}

/*
export default (props) => {
    return //something
}

export default function(props) {
    return //something
}
*/