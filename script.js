const monthly = document.querySelector('.monthly')
const annually = document.querySelector('.annually')
const input = document.querySelector('.input')

console.log(input);


input.addEventListener("click", () => {
    if(input.checked == true) {
        monthly.style.display = "flex"
        annually.style.display = "none"
    } else {
        monthly.style.display = "none"
        annually.style.display = "flex"
    }
})
