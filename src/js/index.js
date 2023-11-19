document.getElementById("result-div").style.display = "none";
document.getElementById("triangle").style.display = "none";

document.getElementById("imc-calculator").addEventListener("submit", calculateImc);

function calculateImc(event) {
    // Evita que site se atualize a cada submit;
    event.preventDefault();

    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight == 0 || height == 0) {
        alert("Valores inválidos!");
        return;
    }

    height = height / 100;
    let imc = weight / (height * height);
    imc = imc.toFixed(2);
    document.getElementById("imc").innerHTML = imc;

    const minWeight = (height * height * 18.5).toFixed(1);
    const maxWeight = (height * height * 24.9).toFixed(1);
    const overWeight = (height * height * 30).toFixed(1);

    displayImcResults(imc, minWeight, maxWeight, overWeight);
}

function displayImcResults(imc, minWeight, maxWeight, overWeight) {
    // Obtendo todos os elementos com a classe "minWeight"
    let minWeightElements = document.getElementsByClassName("minWeight");

    // Iterando sobre a todos os elementos da classe "minWeight" e definindo o conteúdo interno para cada elemento;
    for (let i = 0; i < minWeightElements.length; i++) {
        minWeightElements[i].innerHTML = minWeight;
    }

    // Fazendo o mesmo para a classe "maxWeight"
    let maxWeightElements = document.getElementsByClassName("maxWeight");

    for (i = 0; i < maxWeightElements.length; i++) {
        maxWeightElements[i].innerHTML = maxWeight;
    }

    let overWeightElements = document.getElementsByClassName("overWeight");

    for (i = 0; i < overWeightElements.length; i++) {
        overWeightElements[i].innerHTML = overWeight;
    }

    //Como a classe "overWeight" só precisa ser mostrado duas vezes, não é preciso criar um for, é só colocar o número do índice, que é representado pela vez que aparece no HTML, Ex: [0], primeiro vez que a classe "overWeight" aparece, e assim sucessivamente. Assim o valor que você atribuir, será colocada no elemente nessa posição. (Assim o script tem um melhor desempenho)

    // document.getElementsByClassName("overWeight")[0].innerHTML = overWeight;
    // document.getElementsByClassName("overWeight")[1].innerHTML = overWeight;

    const allElementsTable = document.querySelectorAll(
        ".lineTableLowImc, .lineTableNormalImc, .lineTableOverImc, .lineTableHighImc"
    );

    allElementsTable.forEach(function (lineTable) {
        lineTable.classList.remove("greenMark");
    });

    if (imc < 18.5) {
        document.getElementById("explainImc").innerHTML = "está abaixo do recomendado";
        document.getElementById("imcGoal").innerHTML = "atingir";

        addGreenMark(".lineTableLowImc");
    } else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById("explainImc").innerHTML = "é considerado normal";
        document.getElementById("imcGoal").innerHTML = "manter";

        addGreenMark(".lineTableNormalImc");
    } else if (imc > 24.9 && imc <= 30) {
        document.getElementById("explainImc").innerHTML = "está acima do recomendado";
        document.getElementById("imcGoal").innerHTML = "atingir";

        addGreenMark(".lineTableOverImc");
    } else {
        document.getElementById("explainImc").innerHTML = "está acima do recomendado";
        document.getElementById("imcGoal").innerHTML = "atingir";

        addGreenMark(".lineTableHighImc");
    }
    showHiddenItens();
}

function addGreenMark(selector) {
    const elementsTable = document.querySelectorAll(selector);

    elementsTable.forEach(function (lineTable) {
        lineTable.classList.add("greenMark");
    });
}

function showHiddenItens() {
    document.getElementById("result-div").style.display = "block";
    document.getElementById("triangle").style.display = "block";
}
