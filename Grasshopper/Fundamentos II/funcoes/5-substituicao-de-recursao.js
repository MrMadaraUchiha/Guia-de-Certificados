// Neste desafio, foi usado uma função para corrigir recursivamente todos os erros de digitação de uma string.

function updateAllNames(string, oldPart, newPart) {
    if (string.includes(oldPart) === false) {
      return string;
    }
    string = string.replace(oldPart, newPart);
    return updateAllNames(string, oldPart, newPart);
  };
  console.log(travelDocument);
  console.log(updateAllNames(travelDocument, 'grasshoper', 'grasshopper'));