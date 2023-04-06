import React, { useState } from 'react'

export default function Demo() {
    const [name, setName] = useState("krzys")
    // przekazywanie do setter stanu wartoscu
    setName("zbys")
    // przekazywanie do settera stanu funckji
    // ten callback którego przekazujemy dostaje jako
    // argument poprzedni stan i mamy zwrócić nowy stan
    // nie możemy edytować wartości argumentu
    setName(oldName => oldName + "s")
}