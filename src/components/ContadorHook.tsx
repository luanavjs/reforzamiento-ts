import { useState } from "react"
import { useCounter } from "../hooks/useCounter"


export const ContadorHook = () => {

    const {valor,acumular} = useCounter(100)

  return (
    <>
        <h3>Contador: <small>{valor}</small></h3>
        <hr/>
        <button className="btn btn-primary" onClick={() => acumular(1)}>+1</button>
        &nbsp;&nbsp;
        <button className="btn btn-primary" onClick={() => acumular(-1)}>-1</button>

    </>
  )
}
