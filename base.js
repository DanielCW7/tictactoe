

let turn = 0;

// ============================================== winner's screen
function winner() {
    $('#overlay_win').css('display', 'flex');
    $('#announcer').css('color', 'whitesmoke');
    $('#header').css('color', 'whitesmoke');
    if (turn%2 == 0) {
        $('#announcer').text('player O wins!')
    } else {
        $('#announcer').text('player X wins!')
    }
}

// ========================================= win checker
function winCheck() {

    // top row X
    if ($('#TL-X').hasClass('visible') && $('#TM-X').hasClass('visible') && $('#TR-X').hasClass('visible')) {
        $('#TL').css('background', '#3fe850');
        $('#TM').css('background', '#3fe850');
        $('#TR').css('background', '#3fe850');
        console.log('TOP ROW X');
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

// ============================================== panel listeners
// TOP LEFT
$('#TL').click(function() {
    $(this).addClass('flipped').css('pointer-events', 'none');
    turn++;
        if(turn%2 == 0) {
            $('#TL-O').addClass('visible');
            $('#TL-X').addClass('invisible');
        } else {
            $('#TL-O').addClass('invisible');
            $('#TL-X').addClass('visible');
        };
    winCheck()
});

// TOP MIDDLE
$('#TM').click(function() {
    $(this).addClass('flipped').css('pointer-events', 'none');
    turn++
        if(turn%2 == 0) {
            $('#TM-O').addClass('visible');
            $('#TM-X').addClass('invisible');
        } else {
            $('#TM-O').addClass('invisible');
            $('#TM-X').addClass('visible');
        };
    winCheck()
});

// TOP RIGHT
$('#TR').click(function() {
    $(this).addClass('flipped').css('pointer-events', 'none');
    turn++
        if(turn%2 == 0) {
            $('#TR-O').addClass('visible');
            $('#TR-X').addClass('invisible');
        } else {
            $('#TR-O').addClass('invisible');
            $('#TR-X').addClass('visible');
        };
    winCheck()
});

// MID LEFT
$('#ML').click(function() {
    $(this).addClass('flipped').css('pointer-events', 'none');
    turn++
        if(turn%2 == 0) {
            $('#ML-O').addClass('visible');
            $('#ML-X').addClass('invisible');
        } else {
            $('#ML-O').addClass('invisible');
            $('#ML-X').addClass('visible');
        };
    winCheck()
});

// MID MID
$('#MM').click(function() {
    $(this).addClass('flipped').css('pointer-events', 'none');
    turn++
        if(turn%2 == 0) {
            $('#MM-O').addClass('visible');
            $('#MM-X').addClass('invisible');
        } else {
            $('#MM-O').addClass('invisible');
            $('#MM-X').addClass('visible');
        };
    winCheck()
});

// MID RIGHT
$('#MR').click(function() {
    $(this).addClass('flipped').css('pointer-events', 'none');
    turn++
        if(turn%2 == 0) {
            $('#MR-O').addClass('visible');
            $('#MR-X').addClass('invisible');
        } else {
            $('#MR-O').addClass('invisible');
            $('#MR-X').addClass('visible');
        };
    winCheck()
});

// BOT LEFT
$('#BL').click(function() {
    $(this).addClass('flipped').css('pointer-events', 'none');
    turn++
        if(turn%2 == 0) {
            $('#BL-O').addClass('visible');
            $('#BL-X').addClass('invisible');
        } else {
            $('#BL-O').addClass('invisible');
            $('#BL-X').addClass('visible');
        };
    winCheck()
});

// BOT MID
$('#BM').click(function() {
    $(this).addClass('flipped').css('pointer-events', 'none');
    turn++
        if(turn%2 == 0) {
            $('#BM-O').addClass('visible');
            $('#BM-X').addClass('invisible');
        } else {
            $('#BM-O').addClass('invisible');
            $('#BM-X').addClass('visible');
        };
    winCheck()
});

// BOT RIGHT
$('#BR').click(function() {
    $(this).addClass('flipped').css('pointer-events', 'none');
        turn++
        if(turn%2 == 0) {
            $('#BR-O').addClass('visible');
            $('#BR-X').addClass('invisible');
        } else {
            $('#BR-O').addClass('invisible');
            $('#BR-X').addClass('visible');
        };
    winCheck()
});


// ==================================================================================== reset btn -- flips all the panels and removes classes


// resets the turn counter and also removes all the classes for both X/Os
function restart() {
        $('#TL-X').removeClass('visible invisible');
        $('#TL-O').removeClass('visible invisible');
        $('#TM-X').removeClass('visible invisible');
        $('#TM-O').removeClass('visible invisible');
        $('#TR-X').removeClass('visible invisible');
        $('#TR-O').removeClass('visible invisible');
        $('#ML-X').removeClass('visible invisible');
        $('#ML-O').removeClass('visible invisible');
        $('#MM-X').removeClass('visible invisible');
        $('#MM-O').removeClass('visible invisible');
        $('#MR-X').removeClass('visible invisible');
        $('#MR-O').removeClass('visible invisible');
        $('#BL-X').removeClass('visible invisible');
        $('#BL-O').removeClass('visible invisible');
        $('#BM-X').removeClass('visible invisible');
        $('#BM-O').removeClass('visible invisible');
        $('#BR-X').removeClass('visible invisible');
        $('#BR-O').removeClass('visible invisible');
    turn = 0;
};

// allows for the panels to flip and change color before the X/Os are both reset
$('#reset').click(function() {
    $('#overlay_win').css('display', 'none');
    $('#header').css('color', 'black');
    $('div.flipped').removeClass('flipped').css('pointer-events', 'auto');
    $('#TL').css('background', '#afafaf');
    $('#TM').css('background', '#afafaf');
    $('#TR').css('background', '#afafaf');
    $('#ML').css('background', '#afafaf');
    $('#MM').css('background', '#afafaf');
    $('#MR').css('background', '#afafaf');
    $('#BL').css('background', '#afafaf');
    $('#BM').css('background', '#afafaf');
    $('#BR').css('background', '#afafaf');
    setTimeout(restart, 350)
});
