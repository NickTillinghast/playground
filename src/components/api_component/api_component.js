import React, { useEffect, useState } from 'react'



// import axios from 'axios'

const Api = () => {
    const [person, setPerson] = useState(null)

    useEffect(async () => {
        const response = await fetch("https://api.randomuser.me/");
        const data = await response.json();
        const [item] = data.results;
        setPerson(item);
    }, [])

    return (

        <div>hello world

            {person && <div>{person.name.first}</div>}
        </div>
    )
}


export default Api;