function calculateImc(event) {


    document.getElementById("result-div").style.display = "block";
    document.getElementById("triangle").style.display = "block";

    // Evita que site se atualize a cada submit;
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

    // Só atribui o valor de min/maxWeight para 1 ID.
    // document.getElementById("minWeight").innerHTML = minWeight;
    // document.getElementById("maxWeight").innerHTML = maxWeight;

    let overWeight = ((height * height) * 30).toFixed(1);
    document.getElementsByClassName("overWeight")[0].innerHTML = overWeight;
    document.getElementsByClassName("overWeight")[1].innerHTML = overWeight;

    // Obtendo todos os elementos com a classe "minWeight"
    let minWeightElements = document.getElementsByClassName("minWeight");

    // Iterando sobre a todos os elementos da classe "minWeight" e definindo o conteúdo interno para cada elemento;
    for (let i = 0; i < minWeightElements.length; i++) {
        minWeightElements[i].innerHTML = minWeight;
    }

    // Fazendo o mesmo para a classe "maxWeight"
    let maxWeightElements = document.getElementsByClassName("maxWeight");

    for (let i = 0; i < maxWeightElements.length; i++) {
        maxWeightElements[i].innerHTML = maxWeight;
    }


    if (imc < 18.5) {
        document.getElementById("explainImc").innerHTML = "está abaixo do recomendado";
        document.getElementById("imcGoal").inneHTML = "atingir";
        let elementsTable = document.querySelectorAll(".lineTableLowImc");

        elementsTable.forEach(function (lineTableLow) {
            lineTableLow.classList.add("greenMark");
        })
    } else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById("explainImc").innerHTML = "é considerado normal";
        document.getElementById("imcGoal").innerHTML = "manter";
        let elementsTable = document.querySelectorAll(".lineTableNormalImc");

        elementsTable.forEach(function (lineTableNormal) {
            lineTableNormal.classList.add("greenMark");
        })
    } else if (imc > 24.9 && imc <= 30) {
        document.getElementById("explainImc").innerHTML = "está acima do recomendado";
        document.getElementById("imcGoal").innerHTML = "atingir";
        let elementsTable = document.querySelectorAll(".lineTableOverImc");

        elementsTable.forEach(function (lineTableOver) {
            lineTableOver.classList.add("greenMark");
        })
    } else {
        document.getElementById("explainImc").innerHTML = "está acima do recomendado";
        document.getElementById("imcGoal").innerHTML = "atingir";
        let elementsTable = document.querySelectorAll(".lineTableHighImc");

        elementsTable.forEach(function (lineTableHigh) {
            lineTableHigh.classList.add("greenMark");
        })
    }
}

document.getElementById("result-div").style.display = "none";
document.getElementById("triangle").style.display = "none";

document.getElementById("imc-calculator").addEventListener("submit", calculateImc);