import React from 'react'
import {Helmet} from "react-helmet-async"

export default function Title({title = "Chat" , description= "Chat App" }) {
  return (
    <Helmet>
    <title>{title}</title>
    <meta name= "description" content={description} />
    </Helmet>
  )
}
