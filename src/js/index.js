/* Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

const keys = {
    e: "enter" ,
    i: "imes" ,
    a: "ai" ,
    o: "ober" ,
    u: "ufat"
}

specialCharacter = new RegExp(["/", "*", "-" , "_"]) ;





const input = prompt ("Escriba la entrada: ") // "fenterlimescimesdaidenters"

const output = [];

function encript ()  {

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

function evaluate (input) {
  if((validateLowercase(input) && validateCharacter(input)) && encript())
}

function validateLowercase (input)  {
  return input === input.toLowerCase()
}

const validateCharacter = (input) => {
  const regex = /^[a-zA-Z]+$/
  return regex.test(input)
}


//encript()

//console.log(output.join(''))

function decript (input) {

  const entries = Object.entries(keys)


  entries.forEach(e => {

    [key , value] = e
    console.log("entrada" , e)
      input = input.replaceAll(value , key)
      console.log("final: " , input)

  })

  
}

//decript(input)

console.log(output.join(''))
