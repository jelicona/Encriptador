import * as index from "./index.js"

const encryptBtn = document.querySelector("[data-button-encrypt]")
const decryptBtn = document.querySelector("[data-button-decrypt]")
const displayArea = document.querySelector("[data-display]") 
const warning = document.querySelector("[data-warning]")
const displaySection = document.querySelector("[data-display-section]")
const emptyArea = document.querySelector("[data-empty-area]")


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
            validations()
            removeEmptyArea(emptyArea)
            displayText(output)
            displayCopyBtn(output.join(''), displaySection)
            input.value = ""
            
        }) ()
        : (validations());
    

    }

})


decryptBtn.addEventListener("click" , (e) => {
    
    e.preventDefault;
   
    if (input.value.trim()){
        
        const decryptedText = index.decrypt(input.value)

        index.validateCharacter(input.value) && index.validateLowercase(input.value)
        ? (() => {
            validations(),
            removeEmptyArea(emptyArea),
            displayText(decryptedText),
            displayCopyBtn(decryptedText.join(''), displaySection),
            input.value = ""
            
        }) ()
        : (validations());
    
    }
    
})


function displayCopyBtn (text, displaySection) {

    const copyBtn = document.createElement("button")
    copyBtn.classList.add("copyBtn")
    copyBtn.textContent = "copiar"
    

    displaySection.appendChild(copyBtn)

    copyText (copyBtn, text)
}

function copyText (button, text) {
    button.addEventListener("click" , (e) => {
        e.preventDefault;
        const originalText = button.textContent
        button.textContent = "Copiado!"
        setTimeout(() => {
            if(button.textContent === "Copiado!")
                {button.textContent = originalText}
        } , 800)

        navigator.clipboard.writeText(text)
        .then(() => console.log("copied"))
        .catch(err => console.log("error al copiar"))
    })
    
}


function removeEmptyArea (Area) {
    Area.style.display = "none"
}
