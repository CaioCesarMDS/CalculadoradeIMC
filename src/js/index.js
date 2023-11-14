function calculateImc(event) {
    event.preventDefault();
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight == 0 || height == 0) {
        alert("Valores inválidos!");
        return;
    }

    height = height / 100;
    let imc = (weight / (height * height))
    imc = imc.toFixed(2);
    document.getElementById("imc").innerHTML = imc;
    let minWeight = ((height * height) * 18.5).toFixed(1);
    let maxWeight = ((height * height) * 24.9).toFixed(1);
    document.getElementById("minWeight").innerHTML = minWeight;
    document.getElementById("maxWeight").innerHTML = maxWeight;

    if (imc < 18.5) {
        document.getElementById("explainImc").innerHTML = "está abaixo do recomendado";
        document.getElementById("imcGoal").inneHTML = "atingir";

    }
    else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById("explainImc").innerHTML = "é considerado normal";
        document.getElementById("imcGoal").innerHTML = "manter";
    }
    else {
        document.getElementById("explainImc").innerHTML = "está acima do recomendado";
        document.getElementById("imcGoal").innerHTML = "atingir";
    }


}

document.getElementById("imc-calculator").addEventListener("submit", calculateImc);