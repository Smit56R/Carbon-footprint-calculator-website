const elect_bill_el = document.getElementById("electric-bill")
const gas_bill_el = document.getElementById("gas-bill")
const oil_bill_el = document.getElementById("oil-bill")
const car_mileage_el = document.getElementById("car-mileage")
const flight_n1_el = document.getElementById("four-hr-or-less-flights")
const flight_n2_el = document.getElementById("more-than-four-hr-flights")
const recycle_newspaper_el = document.getElementById("recycle-newspaper")
const recycle_alumin_el = document.getElementById("recycle-aluminum-tin")
const resultEl = document.getElementById("result-el")


const calc_btn = document.getElementById("calc-btn");

calc_btn.addEventListener('click', onClick)

function onClick(){
    let elect_bill = elect_bill_el.value
    let gas_bill = gas_bill_el.value
    let oil_bill = oil_bill_el.value
    let car_mileage = car_mileage_el.value
    let flight_n1 = flight_n1_el.value
    let flight_n2 = flight_n2_el.value
    let recycle_newspaper = recycle_newspaper_el.value
    let recycle_alumin = recycle_alumin_el.value

    let total = 0
    total += elect_bill * 105
    total += gas_bill * 105
    total += oil_bill * 113
    total += car_mileage * 0.79
    total += flight_n1  * 1100
    total += flight_n2 * 4400
    total += recycle_newspaper ? 0 : 184
    total += recycle_alumin ? 0 : 166

    resultEl.innerHTML = `<p>Your Carbon Footprint is ${total} tonnes</p>`
    resultEl.style.display = 'block'
    resultEl.scrollIntoView()
}