var texte = "Daubeny perdit tous ces hommes suite à l'humiliation subit par Holden Cross...<br>Il s'en alla donc retrouver sa gloire en cherhant un exploit qui le rendrai brave.<br>Alors qu'il errait dans les ruines de son chateau, une bande de pilleurs arriva.<br>Le chef de ces pilleurs, se posa alors devant Daubeny et parla en ces termes :<br>\"Vous avez une bien belle armure monseigneur, aurier vous la gentillesse de nous la laisser l'emprunter ?\"<br>Daubeny se dit alors qu'apres s'etre fait voler son epee il ne perdrai point son armure.<br>Ainsi Daubeny...<br>";

$(document).ready(function() {
  $('#combattre').click(e => {
    texte += "Brandit courageusement son epee et l'abbatit de toutes ses forces sur le bandit !";
    $('#poutrelle').html(texte);
})

  $('#garde').click(e => {
    texte += "Tenta de déstabiliser son adversaire en le desarmant ! ";
    $('#poutrelle').html(texte);
  })
  $('#fuir').click(e => {
    texte += "Fit demi tour et courru de toutes ses forces afin d'eviter l'affrontement !";
    $('#poutrelle').html(texte);
  })
});

$(document).keyup(e => {
    if (e.keyCode == 27) {
        alert('Ne fuis pas Daubeny!')
    }
})

// $('#poutrelle').timer({
//   duration: '10s'
//   callback: function(){
//     $('#poutrelle').show();
//   }
// })
