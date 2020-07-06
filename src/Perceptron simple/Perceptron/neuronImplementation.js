import data from "./data.js"
import Neuron from "./neuron.js";

function startIterations(input, expectedResult) {
  // rango pesos sinápticos
  const max = 5;
  const min = -5;
  // entradas
  const neuronInputs = input
    .split(" ")
    .map((value) => (data[value] ? data[value] : 0));
  // pesos sinápticos
  const synapticWeights = neuronInputs.map(() =>
    Math.round(Math.random() * (max - min) + min)
  );

  // inicio iteraciones en la neurona:
  console.log("Frase: ", input);
  console.log("Entradas: ", neuronInputs);
  console.log("Pesos sinápticos: ", synapticWeights);
  const iterationData =  Neuron(neuronInputs, synapticWeights, expectedResult);

  return {
    frase: input,
    entradas: neuronInputs,
    pesos: synapticWeights,
    pesosIterados: iterationData.array,
    respuesta: iterationData.response
  }
}

export default startIterations;