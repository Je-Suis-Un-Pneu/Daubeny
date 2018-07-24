$(document).ready(function() {
  $('#combattre').click(e => {
    $('#text').html("Oui");
      $('#ok1').html("Manger");
      $('#ok2').html("Crier");
      $('#ok').html("Hurler");
      $('body').css("background-image", "url('https://assets.vg247.com/current//2018/05/for_honor_new_hero_teaser_2018_header_1.jpg')")
})

  $('#garde').click(e => {
    $('#text').html("jcgvghyf,ytynttdvv");
  })
  $('#fuir').click(e => {
    $('#text').html("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA<br>AAAAAAAAAAAAAAAAAAAAAAAAH");
  })
});

$(document).keyup(e => {
    if (e.keyCode == 27) {
        alert('Ne fuis pas Daubeny!')
    }
})
