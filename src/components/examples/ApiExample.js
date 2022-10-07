import React, { useState, useEffect } from 'react'

function ApiExample() {

    const [items] = useState("")

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .catch();
    },[])
  return (
    <div className='container'></div>
  )
}

export default ApiExample