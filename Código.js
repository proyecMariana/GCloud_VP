//Datos propios del sitio de cada estudiante
var HE = SpreadsheetApp.openById('127ee9uqClvGu3Cp3y_Ft41Xm-CU-iY0kzpKPVZ-bhAY');
const rutaGlobal = "https://script.google.com/a/macros/umariana.edu.co/s/AKfycbz93zJWtHTTgi_xVMexiVLclprieCiehYPRtqjMTg6a/dev";
//Fin datos propios de cada estudiante

function doGet(e) {
  //-----------------------------------------------------
  //Definiendo variables de entrada del sitio
  let params = e.parameter;

  switch (params.p) {
    case "1": //Vinculando pagina 1
      console.log('Entro por aqui cuando es uno')
      var template = HtmlService.createTemplateFromFile("pagina_1");
      var output = template.evaluate();
      break;
    case "2": //Vinculando pagina 2
      var template = HtmlService.createTemplateFromFile("pagina_2");
      var output = template.evaluate();
      break;
    case "3": //Vinculando pagina 3
      var template = HtmlService.createTemplateFromFile("pagina_3");
      var output = template.evaluate();
      break;
    case "4": //Vinculando pagina 4
      var template = HtmlService.createTemplateFromFile("pagina_4");
      var output = template.evaluate();
      break;
    case "5": //Vinculando pagina 5
      var template = HtmlService.createTemplateFromFile("pagina_5");
      var output = template.evaluate();
      break;
    default: //Por defecto se carga el index que corresponde a la pagina principal
      var template = HtmlService.createTemplateFromFile("Index");
      template.pubUrl = rutaGlobal;
      var output = template.evaluate();
      break;
  }
  return output;
}

function include(fileName) {
  return HtmlService.createHtmlOutputFromFile(fileName)
    .getContent()
}

