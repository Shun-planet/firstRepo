export default function Favourite(props){

    // props(Properties)
    // We use props in React to pass data from one component to another
    // (from a parent component to a child component(s)).
    // Props is just a shorter way of saying properties.
    // They are useful when you want the flow of data in your app to be dynamic.
     
    let myName="Seun"
    return(
        <>
        My name is {myName}
        <h1>My name is {props.name}, my favourite player is Kevin De Bruyne </h1>
        </>
    )
}