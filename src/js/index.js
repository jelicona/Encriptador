/* Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

/* Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

export const keys = {
    e: "enter" ,
    i: "imes" ,
    a: "ai" ,
    o: "ober" ,
    u: "ufat"
}




export const output = [];

export function encript (input)  {

  [...input].forEach(element => {
    if (element in keys) {
      output.push(keys[element])
    }
    else {
      output.push(element)
    }
    }
  )

}

export function evaluate (input) {
  validateLowercase(input) && validateCharacter(input) && encript(input)
}

export function validateLowercase (input)  {
  return input === input.toLowerCase()
}

export const validateCharacter = (input) => {
  const regex = /^[a-zA-Z \n]+$/
  return regex.test(input)
}



export function decrypt (input) {

  console.log("llego aqui funcion")
  const entries = Object.entries(keys)

  entries.forEach(e => {
      const [key, value] = e
      console.log("entrada" , e)
      input = input.replaceAll(value , key)
      console.log("final: " , input)

  })

 
  return [...input]

}