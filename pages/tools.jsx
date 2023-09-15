export default function Tools(props){
    return(
        <>
        <h1>My name is {props.myName} , and below are my skills;</h1>
        <ul>
            <li>I'm proficient in {props.skill1}</li>
            <li>I'm proficient in {props.skill2}</li>
            <li>I'm proficient in {props.skill3}</li>
            <li>I'm proficient in {props.skill4}</li>
            <li>I'm proficient in {props.skill5}</li>
        </ul>
        </>
    )
}