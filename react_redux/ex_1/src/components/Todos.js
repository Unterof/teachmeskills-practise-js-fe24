import React from 'react';

function Todos({items, onItemClicked, onItemDeleted}) {
    return (
        <ul className="list-group">
            {
                items.map(({title, id, done}) => (
                    <li key={id} className="list-group-item d-flex justify-content-between align-items-center">
                        {done === true ? <s>{title}</s> : title}
                        <button className='btn btn-danger' onClick={onItemDeleted.bind(this, id)}>Remove</button>
                        <button className='btn btn-success' onClick={onItemClicked.bind(this, id)}>Done</button>
                    </li>
                ))
            }
        </ul>
    );
}

Todos.propTypes = {
    items: PropTypes
}

export default Todos;