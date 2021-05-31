$(function(){
    var items = ["pierre", "feuille","ciseaux"];
    let sasukeScore = 0;
    let narutoScore = 0;
    let games = 0;
    let ties = 0;
    // choix de pierre
    $('#rock').click(function () { 
        var sasukeChoise = items[Math.floor(Math.random()*items.length)];
        var narutoChoise = "pierre";
        games++ ;
        playShifumi(narutoChoise ,sasukeChoise)
    });
    //choix de feuille
    $('#paper').click(function () { 
        var sasukeChoise = items[Math.floor(Math.random()*items.length)];
        var narutoChoise = "feuille";
        games++ ;
        playShifumi(narutoChoise ,sasukeChoise)
    });
    //choix de scissors
    $('#scissors').click(function () { 
        var sasukeChoise = items[Math.floor(Math.random()*items.length)];
        var narutoChoise = "ciseaux";
        games++ ;
        playShifumi(narutoChoise ,sasukeChoise)
    });
    function playShifumi(narutoChoise ,sasukeChoise){
        showSasukeChoise(sasukeChoise)
          if (narutoChoise == sasukeChoise) {
              resultat = "égalité";
              ties++;
               $('#displayMessage').html(resultat + "<br>" + "Vous avez choisi : " + narutoChoise + "<br>"+ "Sassuke a choisi : " + sasukeChoise);
               $('#displayMessage').css('color', 'white');
               calculateWinningPercentage();
          }
          else if ((narutoChoise == "pierre" && sasukeChoise == "ciseaux") 
                  ||(narutoChoise == "ciseaux" && sasukeChoise == "feuille")
                  ||(narutoChoise == "feuille" && sasukeChoise == "pierre")) {
            resultat = "Vous avez gagné";
            narutoScore++;
            $("#narutoScore").text("Score Naruto : " + narutoScore);
            $('#displayMessage').html(resultat + "<br>" + "Vous avez choisi : " + narutoChoise + "<br>"+ "Sassuke a choisi : " + sasukeChoise);
            $('#displayMessage').css('color', '#00ff00');
            calculateWinningPercentage();
        }
          else{
            resultat = "Vous avez perdu";
            sasukeScore++ ;
            $("#sasukeScore").text(" Score Sasuke : " + sasukeScore);
             $('#displayMessage').html(resultat + "<br>" + "Vous avez choisi : " + narutoChoise + "<br>"+ "Sassuke a choisi : " + sasukeChoise);
             $('#displayMessage').css('color', 'red');
             calculateWinningPercentage();
        }
       }

       function showSasukeChoise(sasukeChoise) { 
        $("#sasukeChoiseImg").css("visibility", "visible");
        if (sasukeChoise == "pierre") {
          $("#sasukeChoiseImg").attr('src', 'images/pierreblanche.png');
        }else if (sasukeChoise == "feuille") {
          $("#sasukeChoiseImg").attr('src', 'images/feuilleblanche.png');
        }else{
          $("#sasukeChoiseImg").attr('src', 'images/ciseauxblanc.png');
        }
        }

        function calculateWinningPercentage() { 
           let winningPercentage = (narutoScore/games)*100
           $('#winning').text( "% de victoires est : " + winningPercentage);
         }
         function calculateWinningPercentageWithTies() { 
          let winningPercentage = ((narutoScore+0.5*ties)/games)*100
          alert(winningPercentageWithTies);
        }
})

