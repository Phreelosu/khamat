const doc = {
    betetInput: document.querySelector('#betet'),
    nevlegesInput: document.querySelector('#nevleges'),
    evenkentInput: document.querySelector('#evenkent'),
    calcButton: document.querySelector('#calcButton'),
    tenylegesInput: document.querySelector('#tenyleges')
};


doc.calcButton.addEventListener('click', () => {
    startCalculation();
});

function startCalculation() {
    let betet = Number(doc.betetInput.value);
    let nevleges = Number(doc.nevlegesInput.value);
    let evenkent = Number(doc.evenkentInput.value);
    let tenyleges = calcEffective(betet, nevleges, evenkent);
    console.log(evenkent)
    doc.tenylegesInput.value = tenyleges;
}

function calcEffective(betet, nevleges, evenkenti ) {
    let tenyleges = (
        Math.pow((
            1+(nevleges/(100*evenkenti))
        ), evenkenti)-1
    )*betet;
    return tenyleges;
}
