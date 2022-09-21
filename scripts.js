function Converter() {
  var valorEntradaString = document.getElementById("valor").value;
  var moedaEntrada = document.getElementById("entradaMoeda").value;
  var moedaSaida = document.getElementById("saidaMoeda").value;
  var valorReais = parseFloat(valorEntradaString);
  var valorReaisFixado = valorReais.toFixed(2);
  var valorDolar = parseFloat(valorEntradaString);
  var valorDolarFixado = valorDolar.toFixed(2);
  var valorEuro = parseFloat(valorEntradaString);
  var valorEuroFixado = valorEuro.toFixed(2);
  var valorBTC = parseFloat(valorEntradaString);
  var valorBTCFixado = valorBTC.toFixed(6);

  //real como entrada
  if (moedaEntrada == "realEntrada") {
    var valorDolar = valorReaisFixado / 5.25;
    var valorDolarFixado = valorDolar.toFixed(2);
    var valorEuro = valorReaisFixado / 5.22;
    var valorEuroFixado = valorEuro.toFixed(2);
    var valorBTC = valorReais / 99348.55;
    var valorBTCFixado = valorBTC.toFixed(6);
  }
  if (moedaEntrada == "realEntrada" && moedaSaida == "dolarSaida") {
    document.getElementById("valorConvertido").innerHTML =
      "R$ " + valorReaisFixado + " =  US$ " + valorDolarFixado;
  } else if (moedaEntrada == "realEntrada" && moedaSaida == "btcSaida") {
    document.getElementById("valorConvertido").innerHTML =
      "R$ " + valorReaisFixado + " = ฿ " + valorBTCFixado;
  } else if (moedaEntrada == "realEntrada" && moedaSaida == "euroSaida") {
    document.getElementById("valorConvertido").innerHTML =
      "R$ " + valorReaisFixado + " = € " + valorEuroFixado;
  } else if (moedaEntrada == "realEntrada" && moedaSaida == "realSaida") {
    document.getElementById("valorConvertido").innerHTML =
      "R$ " + valorReaisFixado + " = R$ " + valorReaisFixado;
  }
  //dolar como entrada
  if (moedaEntrada == "dolarEntrada") {
    var valorReais = valorDolarFixado * 5.22;
    var valorReaisFixado = valorReais.toFixed(2);
    var valorEuro = valorDolarFixado * 0.99;
    var valorEuroFixado = valorEuro.toFixed(2);
    var valorBTC = valorDolarFixado / 19003.66;
    var valorBTCFixado = valorBTC.toFixed(6);
  }
  if (moedaEntrada == "dolarEntrada" && moedaSaida == "realSaida") {
    document.getElementById("valorConvertido").innerHTML =
      " US$ " + valorDolarFixado + " = R$ " + valorReaisFixado;
  } else if (moedaEntrada == "dolarEntrada" && moedaSaida == "btcSaida") {
    document.getElementById("valorConvertido").innerHTML =
      " US$ " + valorDolarFixado + " = ฿ " + valorBTCFixado;
  } else if (moedaEntrada == "dolarEntrada" && moedaSaida == "euroSaida") {
    document.getElementById("valorConvertido").innerHTML =
      " US$ " + valorDolarFixado + " = € " + valorEuroFixado;
  } else if (moedaEntrada == "dolarEntrada" && moedaSaida == "dolarSaida") {
    document.getElementById("valorConvertido").innerHTML =
      " US$ " + valorDolarFixado + " = US$ " + valorDolarFixado;
  }

  //euro como entrada
  if (moedaEntrada == "euroEntrada") {
    var valorReais = valorEuroFixado / 0.19;
    var valorReaisFixado = valorReais.toFixed(2);
    var valorDolar = valorEuroFixado / 0.99;
    var valorDolarFixado = valorDolar.toFixed(2);
    var valorBTC = valorEuroFixado * 0.000053;
    var valorBTCFixado = valorBTC.toFixed(6);
  }
  if (moedaEntrada == "euroEntrada" && moedaSaida == "realSaida") {
    document.getElementById("valorConvertido").innerHTML =
      " € " + valorEuroFixado + " = R$ " + valorReaisFixado;
  } else if (moedaEntrada == "euroEntrada" && moedaSaida == "btcSaida") {
    document.getElementById("valorConvertido").innerHTML =
      " € " + valorEuroFixado + " = ฿ " + valorBTCFixado;
  } else if (moedaEntrada == "euroEntrada" && moedaSaida == "dolarSaida") {
    document.getElementById("valorConvertido").innerHTML =
      " € " + valorEuroFixado + " = US$ " + valorDolarFixado;
  } else if (moedaEntrada == "euroEntrada" && moedaSaida == "euroSaida") {
    document.getElementById("valorConvertido").innerHTML =
      " € " + valorEuroFixado + " =  € " + valorEuroFixado;
  }

  //btc como entrada
  if (moedaEntrada == "btcEntrada") {
    var valorReais = valorBTCFixado * 99584.27;
    var valorReaisFixado = valorReais.toFixed(2);
    var valorDolar = valorBTCFixado * 18975.3;
    var valorDolarFixado = valorDolar.toFixed(2);
    var valorEuro = valorBTCFixado * 18996.27;
    var valorEuroFixado = valorEuro.toFixed(2);
  }
  if (moedaEntrada == "btcEntrada" && moedaSaida == "realSaida") {
    document.getElementById("valorConvertido").innerHTML =
      " ฿ " + valorBTCFixado + " = R$ " + valorReaisFixado;
  } else if (moedaEntrada == "btcEntrada" && moedaSaida == "btcSaida") {
    document.getElementById("valorConvertido").innerHTML =
      " ฿ " + valorBTCFixado + " = ฿ " + valorBTCFixado;
  } else if (moedaEntrada == "btcEntrada" && moedaSaida == "dolarSaida") {
    document.getElementById("valorConvertido").innerHTML =
      " ฿ " + valorBTCFixado + " = US$ " + valorDolarFixado;
  } else if (moedaEntrada == "btcEntrada" && moedaSaida == "euroSaida") {
    document.getElementById("valorConvertido").innerHTML =
      " ฿ " + valorBTCFixado + " =  € " + valorEuroFixado;
  }
}
