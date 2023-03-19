export function greetUser(email) {
    const paragraph = document.createElement('p')
    paragraph.textContent = `Hola, ${email} !!!`
    return paragraph
}
