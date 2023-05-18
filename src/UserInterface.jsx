import React from "react"
import CollectorButton from './CollectorButton'
import SubmitForm from './SubmitForm'
import StylesContext from "./StylesContext"
import { useContext } from "react"

export default function UserInterface () {
  const {headerStyle}= useContext(StylesContext)
  return (
    <div>
      <h2>We carry the latest and greatest editions of your favorite comic books!</h2>
      <h2>Are you a collector?</h2>
      <CollectorButton />

      <h2>Have a special request? Click here to fill out our form</h2>
      <SubmitForm />
    </div>
  )
}