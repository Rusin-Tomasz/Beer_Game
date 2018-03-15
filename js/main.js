var defaultField = 'grass';
var score = 0;
var player1Score = 0;
var player2Score = 0;
var temporaryScore = 0;
var beer = 'beer';
var moreBeer = 'moreBeer';
var trash = 'trash';
var oneBeerChance = 55;
var threeBeerChance = 5;
var activePlayer = 1
var winnerScore = 0;
var random;
$('.gameOver').hide();
$('.wrapper').hide();


$(document).ready(function () {

//    init();

    $('.field').click(function () {
        if ($(this).hasClass('grass')) {
            random = Math.floor(Math.random() * 100);

            if (random < threeBeerChance) {
                get3($(this), moreBeer);
            } else if (random < oneBeerChance && random > threeBeerChance) {
                get1($(this), beer);
            } else {
                get0($(this), trash);
            }

            if ($('.fieldDone').length === 25) {
                $('.gameOver').fadeIn(2000);
                if (player1Score > player2Score) {
                    winnerScore = player1Score
                    $('.winner').text('Wygrał ' + $('.player-1-name').text());
                    $('.final-score').text('Z wynikiem ' + winnerScore + ' szt. ' + $('.player-2-name').text() + ' stawia dzisiaj kolejkę :)' );
                } else if (player1Score < player2Score) {
                    winnerScore = player2Score
                    $('.winner').text('Wygrał ' + $('.player-2-name').text());
                    $('.final-score').text('Z wynikiem ' + winnerScore + ' szt. ' + $('.player-1-name').text() + ' stawia dzisiaj kolejkę :)' );
                } else {
                    winnerScore = player1Score;

                }
            }
        }
    })

    function get1(field) {
        get0(field, beer)
        temporaryScore += 1;
        if (activePlayer === 1) {
            player1Score += temporaryScore;
            temporaryScore = 0
            $('.player-' + activePlayer + '-score').text(player1Score);
        } else {
            player2Score += temporaryScore;
            temporaryScore = 0
            $('.player-' + activePlayer + '-score').text(player2Score);
        }

    };

    function get3(field) {
        get0(field, moreBeer)
        temporaryScore += 3;
        if (activePlayer === 1) {
            player1Score += temporaryScore;
            temporaryScore = 0
            $('.player-' + activePlayer + '-score').text(player1Score);
        } else {
            player2Score += temporaryScore;
            temporaryScore = 0
            $('.player-' + activePlayer + '-score').text(player2Score);
        }

    };

    function get0(field, type) {
        $(field).removeClass(defaultField).addClass(type).addClass("fieldDone");
        if (type === 'trash') {
            nextPlayer();
        }
    };

    function nextPlayer() {
        //Next player
        if (activePlayer === 1) {
            activePlayer = 2;
        } else {
            activePlayer = 1;
        }
        
        $(".player-1").toggleClass("active");
        $(".player-2").toggleClass("active");
    }

function init() {
    activePlayer = 1;
    temporaryScore = 0;
    player1Score = 0;
    player2Score = 0;
    winnerScore = 0;
    $('.gameOver').hide();
    $('.player-1-score').text(0);
    $('.player-2-score').text(0);
    $('.field').removeClass('beer moreBeer trash fieldDone').addClass(defaultField);
    $('.init-cn').hide();
    $('.wrapper').show();
    
    if($('.name-1').val() == '') {
        $('.player-1-name').text('Gracz-1')
    }else {
        $('.player-1-name').text($('.name-1').val())
    }
     if($('.name-2').val() == '') {
        $('.player-2-name').text('Gracz-2')
    }else {
        $('.player-2-name').text($('.name-2').val())
    }
     
}

    $('.init').click(function(){
        init();
    })
    
    $('.start').click(function(){
        init();
    })
    
});
