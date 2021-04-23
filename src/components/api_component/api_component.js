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

            {person && <div>{person.name.last}</div>}
        </div>
    )
}
// function countingValleys(steps, path) {
//     let currentNum = 0;
//     let newValue = 0;
//     let valleys = 0;
//     if(!path){
//         return valleys;
//     }
//     const hikeMap = {
//         'U': 1,
//         'D': -1,
//     };
//     let pathArr = path.split('');
//     pathArr.forEach(function(hikeDirection) {
//     let hikeValue = hikeMap[hikeDirection] || 0;
//     // let increment = hikeDirection == 'D' ? -1 : 1;
//     // newValue =+ increment;
//     newValue += hikeMap[hikeDirection];


//     let isValley = (currentNum === 0 && newValue === -1);

//     if(isValley){
//         valleys += 1; 
//     }  
//     currentNum = newValue;  
//     });
//     return valleys;
//     }


export default Api;