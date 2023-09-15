// Destructuring
export default function Tool({myname,skill1,skill2,skill3,skill4}){
    return(
        <>
        <h2>My name is {myname}</h2>
        <h3>My skills are:</h3>
        <ul>
            <li>{skill1}</li>
            <li>{skill2}</li>
            <li>{skill3}</li>
            <li>{skill4}</li>
        </ul>
        </>
    )
}