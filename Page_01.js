$(document).ready(function() {
  $('#combattre').click(e => {
    $('#text').html("Brandit courageusement son epee et l'abbatit de toutes ses forces sur le bandit !");
})

  $('#garde').click(e => {
    $('#text').html("Tenta de déstabiliser son adversaire en le desarmant ! ");
  })
  $('#fuir').click(e => {
    $('#text').html("Fit demi tour et courru de toutes ses forces afin d'eviter l'affrontement !");
  })
});

$(document).keyup(e => {
    if (e.keyCode == 27) {
        alert('Ne fuis pas Daubeny!')
    }
})
