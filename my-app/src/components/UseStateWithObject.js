import React, { useState } from 'react'

function UseStateWithObjects() {
    const [name, setName] = useState({ firstName: "", lastName: "" });

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({
                        ...name,
                        firstName: e.target.value
                    })}
                />
                <input
                    type="text"
                    value={name.lastName}
                    onChange={e => setName({
                        ...name,
                        lastName: e.target.value

                    })}
                />
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default UseStateWithObjects


// Fabi8's solution .... mmmhhh ask if it's ok

// return (
//     <div>
//         <form>
//             <input
//                 type="text"
//                 value={name.firstName}
//                 onChange={e => setName({
//                     firstName: e.target.value,
//                     lastName: name.lastName
//                 })}
//             />
//             <input
//                 type="text"
//                 value={name.lastName}
//                 onChange={e => setName({
//                     firstName: name.firstName,
//                     lastName: e.target.value

//                 })}
//             />
//             <h2>{JSON.stringify(name)}</h2>
//         </form>
//     </div>
// )
// }

// export default UseStateWithObjects