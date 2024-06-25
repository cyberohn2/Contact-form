const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const allFormInput = document.querySelectorAll("input:not([type='radio']):not([type='checkbox']), textarea")
    const queryTypes = document.querySelectorAll()
    allFormInput.forEach(formInput => {
        if (!formInput.validity.valid || formInput.value === "") {
            setError(formInput)
        } else {
            setSuccess(formInput)
        }
    })
})

const setError = (inputField) => {
    const parentElement = inputField.parentElement
    if (parentElement) {
        parentElement.classList.add("error")
    }
}

const setSuccess = (inputField) => {
    const parentElement = inputField.parentElement
    if (parentElement) {
        parentElement.classList.remove("error")
    }
}
