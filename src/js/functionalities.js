import * as index from "./index.js"

const encryptBtn = document.querySelector("[data-button-encrypt]")
const decryptBtn = document.querySelector("[data-button-decrypt]")
const displayArea = document.querySelector("[data-display]") 
const warning = document.querySelector("[data-warning]")
const copyBtn = document.querySelector("[data-button-copy]")


const input = document.querySelector("[data-text-input]")
const output = index.output


const displayText = ( output) => {
    displayArea.innerHTML = output.join('')
}

const validations = () => {

    if(!(index.validateCharacter(input.value) && index.validateLowercase(input.value))){
        input.classList.add("inputTextError")
        warning.classList.add ("warningError") 
    } else {
        input.classList.remove("inputTextError")
        warning.classList.remove("warningError")
    }

}

encryptBtn.addEventListener("click" , (e) => {
    e.preventDefault;

    
    if (input.value.trim()){
        output.length = 0
        index.evaluate(input.value) 

        index.output.length !=0 
        ? (() => {
            validations(),
            input.value = ""
            
        }) ()
        : (validations());
    
        displayText(output)
    }

})


decryptBtn.addEventListener("click" , (e) => {
    
    e.preventDefault;
   
    const decryptedText = index.decrypt(output.join(''))

    displayText(decryptedText)
})



copyBtn.addEventListener("click" , () => {
    const originalText = copyBtn.textContent
    copyBtn.textContent = "Copied!"
    timeoutId = setTimeout(() => {
        copyBtn.textContent = originalText
    } , 500)

    
})