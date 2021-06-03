function calcul(action) {
    let first = document.getElementById("calcFirst")
    let second = document.getElementById("calcSecond")
    let result = document.getElementById("calcResult")

    if (first.value && second.value) {
        if (action === '+') {
            result.innerText = Number(first.value) + Number(second.value)
        } else
        if (action === '-') {
            result.innerText = Number(first.value) - Number(second.value)
        } else
        if (action === '*') {
            result.innerText = Number(first.value) * Number(second.value)
        } else
        if (action === '/') {
            result.innerText = Number(first.value) / Number(second.value)
        } else {
            result.innerText = "Wrong action"
        }
    }
}