
let turn = 0;

// $('#off').click(function() {
//   $('.panel').css('pointer-events', 'none');
//   console.log(turn)
// });

// $('#on').click(function() {
//   $('.panel').css('pointer-events', '');
//   console.log(turn)
// });


// ============================================== winner's screen
function winner() {
    $('#overlay_win').css('display', 'flex');
    $('#announcer').css('color', 'whitesmoke');
    $('#header').css('color', 'whitesmoke');
    if (turn%2 == 0) {
        $('#announcer').text('O wins!')
    } else {
        $('#announcer').text('X wins!')
    }
}

// ========================================= win checker
function winCheck() {

    // top row X
    if ($('#TL-X').hasClass('visible') && $('#TM-X').hasClass('visible') && $('#TR-X').hasClass('visible')) {
        $('#TL').css('background', '#3fe850');
        $('#TM').css('background', '#3fe850');
        $('#TR').css('background', '#3fe850');
        setTimeout(winner, 750)
    }

    // top row O
    if ($('#TL-O').hasClass('visible') && $('#TM-O').hasClass('visible') && $('#TR-O').hasClass('visible')) {
        $('#TL').css('background', '#3fe850');
        $('#TM').css('background', '#3fe850');
        $('#TR').css('background', '#3fe850');
        setTimeout(winner, 750)
    }
// ==========================================================================================================
    // mid row X
    if ($('#ML-X').hasClass('visible') && $('#MM-X').hasClass('visible') && $('#MR-X').hasClass('visible')) {
        $('#ML').css('background', '#3fe850');
        $('#MM').css('background', '#3fe850');
        $('#MR').css('background', '#3fe850');
        setTimeout(winner, 750)
    }

    // mid row O
    if ($('#ML-O').hasClass('visible') && $('#MM-O').hasClass('visible') && $('#MR-O').hasClass('visible')) {
        $('#ML').css('background', '#3fe850');
        $('#MM').css('background', '#3fe850');
        $('#MR').css('background', '#3fe850');
        setTimeout(winner, 750)
    }
// ==========================================================================================================
    // bot row X
    if ($('#BL-X').hasClass('visible') && $('#BM-X').hasClass('visible') && $('#BR-X').hasClass('visible')) {
        $('#BL').css('background', '#3fe850');
        $('#BM').css('background', '#3fe850');
        $('#BR').css('background', '#3fe850');
        setTimeout(winner, 750)
    }

    // bot row O
    if ($('#BL-O').hasClass('visible') && $('#BM-O').hasClass('visible') && $('#BR-O').hasClass('visible')) {
        $('#BL').css('background', '#3fe850');
        $('#BM').css('background', '#3fe850');
        $('#BR').css('background', '#3fe850');
        setTimeout(winner, 750)
    }
// ==========================================================================================================
    // left col X
    if ($('#TL-X').hasClass('visible') && $('#ML-X').hasClass('visible') && $('#BL-X').hasClass('visible')) {
        $('#TL').css('background', '#3fe850');
        $('#ML').css('background', '#3fe850');
        $('#BL').css('background', '#3fe850');
        setTimeout(winner, 750)
    }

    // left col O
    if ($('#TL-O').hasClass('visible') && $('#ML-O').hasClass('visible') && $('#BL-O').hasClass('visible')) {
        $('#TL').css('background', '#3fe850');
        $('#ML').css('background', '#3fe850');
        $('#BL').css('background', '#3fe850');
        setTimeout(winner, 750)
    }
// ==========================================================================================================
    // mid col X
    if ($('#TM-X').hasClass('visible') && $('#MM-X').hasClass('visible') && $('#BM-X').hasClass('visible')) {
        $('#TM').css('background', '#3fe850');
        $('#MM').css('background', '#3fe850');
        $('#BM').css('background', '#3fe850');
        setTimeout(winner, 750)
    }

    // mid col O
    if ($('#TM-O').hasClass('visible') && $('#MM-O').hasClass('visible') && $('#BM-O').hasClass('visible')) {
        $('#TM').css('background', '#3fe850');
        $('#MM').css('background', '#3fe850');
        $('#BM').css('background', '#3fe850');
        setTimeout(winner, 750)
    }
// ==========================================================================================================
    // right col X
    if ($('#TR-X').hasClass('visible') && $('#MR-X').hasClass('visible') && $('#BR-X').hasClass('visible')) {
        $('#TR').css('background', '#3fe850');
        $('#MR').css('background', '#3fe850');
        $('#BR').css('background', '#3fe850');
        setTimeout(winner, 750)
    }

    // right col O
    if ($('#TR-O').hasClass('visible') && $('#MR-O').hasClass('visible') && $('#BR-O').hasClass('visible')) {
        $('#TR').css('background', '#3fe850');
        $('#MR').css('background', '#3fe850');
        $('#BR').css('background', '#3fe850');
        setTimeout(winner, 750)
    }
// ==========================================================================================================
    // right diagonal X
    if ($('#TL-X').hasClass('visible') && $('#MM-X').hasClass('visible') && $('#BR-X').hasClass('visible')) {
        $('#TL').css('background', '#3fe850');
        $('#MM').css('background', '#3fe850');
        $('#BR').css('background', '#3fe850');
        setTimeout(winner, 750)
    }

    // right diagonal O
    if ($('#TL-O').hasClass('visible') && $('#MM-O').hasClass('visible') && $('#BR-O').hasClass('visible')) {
        $('#TL').css('background', '#3fe850');
        $('#MM').css('background', '#3fe850');
        $('#BR').css('background', '#3fe850');
        setTimeout(winner, 750)
    }
// ==========================================================================================================
    // left diagonal X
    if ($('#BL-X').hasClass('visible') && $('#MM-X').hasClass('visible') && $('#TR-X').hasClass('visible')) {
        $('#BL').css('background', '#3fe850');
        $('#MM').css('background', '#3fe850');
        $('#TR').css('background', '#3fe850');
        setTimeout(winner, 750)
    }

    // left diagonal O
    if ($('#BL-O').hasClass('visible') && $('#MM-O').hasClass('visible') && $('#TR-O').hasClass('visible')) {
        $('#BL').css('background', '#3fe850');
        $('#MM').css('background', '#3fe850');
        $('#TR').css('background', '#3fe850');
        setTimeout(winner, 750)
    }
}


// ============================================== panel flipper function
 
function flipper(a, b, c) {
  $(c).addClass('flipped').css('pointer-events', 'none');
  turn += 1;
    if(turn%2 == 0) {
      $(a).addClass('visible');
      $(b).addClass('invisible');
    } else {
      $(a).addClass('invisible');
      $(b).addClass('visible');
    };
}


// ============================================== disable panels
function disable(a) {
  a.css('pointer-events', '')
}


// ============================================== panel listeners

// TOP LEFT
$('#TL').click(function() {
  const TL = $('#TL')
  const TL_O = $('#TL-O');
  const TL_X = $('#TL-X');

  flipper(TL_O, TL_X, TL)
  winCheck()
});

// TOP MIDDLE
$('#TM').click(function() {
  const TM = $('#TM')
  const TM_O = $('#TM-O');
  const TM_X = $('#TM-X');

  flipper(TM_O, TM_X, TM)
  winCheck()
});

// TOP RIGHT
$('#TR').click(function() {
  const TR = $('#TR')
  const TR_O = $('#TR-O');
  const TR_X = $('#TR-X');

  flipper(TR_O, TR_X, TR)
  winCheck()
});

// MID LEFT
$('#ML').click(function() {
  const ML = $('#ML')
  const ML_O = $('#ML-O');
  const ML_X = $('#ML-X');

  flipper(ML_O, ML_X, ML)
  winCheck()
});

// MID MID
$('#MM').click(function() {
  const MM = $('#MM')
  const MM_O = $('#MM-O');
  const MM_X = $('#MM-X');

  flipper(MM_O, MM_X, MM)
  winCheck()
});

// MID RIGHT
$('#MR').click(function() {
  const MR = $('#MR')
  const MR_O = $('#MR-O');
  const MR_X = $('#MR-X');

  flipper(MR_O, MR_X, MR)
  winCheck()
});

// BOT LEFT
$('#BL').click(function() {
  const BL = $('#BL')
  const BL_O = $('#BL-O');
  const BL_X = $('#BL-X');

  flipper(BL_O, BL_X, BL)
  winCheck()
});

// BOT MID
$('#BM').click(function() {
  const BM = $('#BM')
  const BM_O = $('#BM-O');
  const BM_X = $('#BM-X');

  flipper(BM_O, BM_X, BM)
  winCheck()
});

// BOT RIGHT
$('#BR').click(function() {
  const BR = $('#BR')
  const BR_O = $('#BR-O');
  const BR_X = $('#BR-X');

  flipper(BR_O, BR_X, BR)
  winCheck()
});


// ==================================================================================== reset btn -- flips all the panels and removes classes


// resets the turn counter and also removes all the classes for both X/Os
function restart() {
    $('#TL-X, #TL-O, #TM-X, #TM-O, #TR-X, #TR-O, #ML-X, #ML-O, #MM-X, #MM-O, #MR-X, #MR-O, #BL-X, #BL-O, #BM-X, #BM-O, #BR-X, #BR-O').removeClass('visible invisible');
    turn = 0;
};

// allows for the panels to flip and change color before the X/Os are both reset
$('#reset').click(function() {
    $('#overlay_win').css('display', 'none');
    $('#header').css('color', 'black');
    $('div.flipped').removeClass('flipped').css('pointer-events', 'auto');
    $('#TL, #TM, #TR, #ML, #MM, #MR, #BL, #BM, #BR').css('background', '#afafaf');
    setTimeout(restart, 350)
});
