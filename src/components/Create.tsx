import React from 'react'
import { Link,useParams } from 'react-router-dom';

function Create() {
    const  id  = useParams();
    console.log(id)
    return (
        <div style={{ background: 'red' }}>Create</div>
    )
}

export default Create
