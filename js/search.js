function search(input){
    let elements = document.getElementsByClassName('textBox')
    for (let element of elements) {
        let content = element.innerHTML.toLowerCase()
        if (content.includes(input.toLowerCase())) {
            element.classList.remove('hidden')
        }
        else {
            element.classList.add('hidden')
        }
    }
}