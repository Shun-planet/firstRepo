import Favourite from "./favourites"
import Laura from "./Laura"
import Tools from "./tools"
import React from "react"
import Tool from "./Tool"
import Todo from "./todo"

export default function Home(){
  return(
    <div>
      <h1>Wow!! My first react project</h1>
      <h2> Why I love React</h2>
      <ul>
        <li>It is reusable</li>
        <li>It is easy to use</li>
        <li>It is easy to learn and the community is wide</li>

        <Favourite name="Seun"/>
        <Laura 
        favPlayer= "Raheem Sterling"
        name= "Oluwaseun"
        />
        {/* Class Work
        Create a component called Tools,
        The tools should return
        My name is Your name
        My skillsets involve
        -HTML
        -CSS
        -BOOTSTRAP
        -Anu other one */}
        <Tools 
        myName="Oluwaseun"
        skill1="HTML"
        skill2="CSS"
        skill3="JavaScript"
        skill4="Bootstrap"
        skill5="React"
/>
      </ul>
      <Tool
       myname="Laura Eredappa"
        skill1="HTML"
        skill2="CSS"
        skill3="JavaScript"
        skill4="Bootstrap"
        skill5="React"
      />
      <h1>My todo's for today</h1>
      <Todo todo="learn usestate"/>
      <Todo todo="Learn conditional rendering"/>
      <Todo todo="Learn list"/>
    </div>
  )
}