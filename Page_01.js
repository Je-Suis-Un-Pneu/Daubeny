var story = "Daubeny perdit tous ces hommes suite à l'humiliation subit par Holden Cross...<br>Il s'en alla donc retrouver sa gloire en cherhant un exploit qui le rendrai brave.<br>Alors qu'il errait dans les ruines de son chateau, une bande de pilleurs arriva.<br>Le chef de ces pilleurs, se posa alors devant Daubeny et parla en ces termes :<br>\"Vous avez une bien belle armure monseigneur, aurier vous la gentillesse de nous la laisser l'emprunter ?\"<br>Daubeny se dit alors qu'apres s'etre fait voler son epee il ne perdrai point son armure.<br>Ainsi Daubeny...<br>";

var choix1 = ["Brandit courageusement son épée! Les bandits reculèrent, surpris. C'est alors qu'une pensée traversa Daubeny:<br>\"Ils sont plus nombreux que moi...Est-ce vraiment la bonne solution?\" En y réfléchissant bien il réalisa...","les pilleurs avaient l'air franchement nuls...n'est-ce pas? Ils se rappela un proverbe qu'il avait entendu il y a bien longtemps...<br>","\"La violence n'est pas une solution, c'est LA solution\". Il se rua donc vers les pilleurs et...","et se fit un claquage...Daubeny avait voulu etre brave et avait echoué...Les bandits s'avançaient épées levées pour en découdre<br>FIN"];
var choix2 = ["Tenta de déstabiliser son adversaire en le desarmant ! Mais...","la tartine de confiture tombe toujours sur la confiture. Il pensa à ce dicton...<br>","\"Lourd est le parpaing de la réalité sur la tartelette aux frises de nos illusions\". Il décida qu il combattrait et..."];
var choix3 = ["Fit demi tour et courru de toutes ses forces afin d'eviter l'affrontement ! car...","il avait peur. Il se dit alors: Si seulement j'avais le double de mon courage...<br>Une voix résonna dans son esprit \"Daubeny... deux fois zéro, cela fait toujours zéro. <br> Maintenant écoute la voix de la sagesse...\"","\"Tu ne peux pas perdre...si tu ne combat pas du tout\" Abasourdi par cette éclat de vérité Daubeny opéra une rotation de 480° <br>par l'axe verticale dans le sens horaire puis effectua une translation selon le vecteur parallèle à l'axe des abscisses<br> d'équation y=8x.<br> Avant que les brigand ait eu le temps de sortir leur calculette il s'élançait vers l'horizon...","et...et non finalement! il esquiva les brigands semblant danser alors qu ils les traversait.<br>Tous furent frappés de cécité devant sa...disons sa grace."];

var page = 0;
var chapitre = 0;

$(document).ready(function() {
  $('#combattre').click(e => {
    var n = 0;
    while (n< choix1.length) {
      if (chapitre === n) {
        story += ' '+ choix1[n];
        $('#poutrelle').html(story);
        chapitre += 1;
        if (n == 3) {
          $('#combattre').hide();
          $('#garde').hide();
          $('#fuir').hide();
        }
        break;
      } else {
        n +=1;
      }
  }
});

  $('#garde').click(e => {
    var i = 0;
    while (i< choix2.length) {
      if (chapitre === i) {
        story += ' '+ choix2[i];
        $('#poutrelle').html(story);
        chapitre += 1;
        break;
      } else {
        i +=1;
      }
    }
  });

  $('#fuir').click(e => {
    var z = 0;
    while (z< choix3.length) {
      if (chapitre === z) {
        story += ' '+ choix3[z];
        $('#poutrelle').html(story);
        chapitre += 1;
        break;
      } else {
        z +=1;
      }
    }
  });
});


$(document).keydown(e => {
    if (e.keyCode == 27) {
        alert('Ne fuis pas Daubeny!')
    }else if (e.keyCode == 18) {
      alert('OU CROIS TU ALLER DAUBENY? DAUUUUUUUUUUBENY!')
    } {

    }
});

// $('#poutrelle').timer({
//   duration: '10s'
//   callback: function(){
//     $('#poutrelle').show();
//   }
// })
