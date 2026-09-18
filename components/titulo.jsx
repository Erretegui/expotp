import {Text, StyleSheet} from "react-native"

import React from 'react'

export default function Titulo ({titulo}) {
  return (

    <Text style={style.titulo}>{titulo}</Text>
  )
}

const style= StyleSheet.create({
  titulo: {
    color:"#eee3e3",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 20,
  },
})