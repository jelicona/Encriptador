/* Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

const keys = {
    a: "enter" ,
    b: "imes" ,
    c: "ai" ,
    o: "ober" ,
    u: "ufat"
}

const input = prompt ("Escriba la entrada: ")


const output = [];

function validateLowercase (input)  {
  if ([...input][0] === [...input][0].toLowerCase()) {
    console.log('minuscula')
  }
  else {
    console.log('mayuscula')
  }
}

function encript ()  {

  [...input].forEach(element => {
    if (element in keys) {
      output.push(keys[element])
    }
    else {
      output.push(element)
    }
    }
  )}

encript()

console.log(output.join(''))


function decript () {

  let i = 0
    output.forEach (e => {

    let finded = Object.entries(keys).find(([key, value]) => value == e)
        
    if (finded){
      //let [c, valor] = finded
      output[i] = finded[0]
    }
    i++
  })

}

decript()


console.log(output.join(''))
