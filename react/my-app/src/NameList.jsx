import React from 'react';

function NameList() {
    const names = ['Alice', 'Bob', 'Charlie', 'David'];

    return (
        <div>
            <h2>List of Names: </h2>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

export default NameList;
