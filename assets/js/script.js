// Ouverture du Jquery aprés chargement de la page
$(function(){
  // variable pour calculer le nombre d'essaie
  var clickNumber = 0;
  // Fonction pour activé le click
  $('#validate').click(function(){
    // Variable qui récupére la value de l'ID
    var captureNumber = $('#capture').val();
    // Incrémentation de 1 pour calculer le nombre d'essaies
    clickNumber ++;
    /* Condition "si" pour dire que si la saisie est égale à 28
    on affiche une boite à dialogue pour dire que c'est correcte
    et on donne le nombre d'essaies effectuer*/
    if(captureNumber == 28){
      window.alert('Correcte! ' + 'Nombre d\'essaies effectuer : ' + clickNumber);
    }
    /* Condition "sinon si" la saisie est moins grande que 28 on affiche
    un message alerte "moins"*/
    else if(captureNumber > 28){
      window.alert('Moins');
      /* Condition "sinon" la saisie est plus grande que 28 on affiche
      un message alerte "plus"*/
    }else{
      window.alert('Plus');
    }
  });
});
