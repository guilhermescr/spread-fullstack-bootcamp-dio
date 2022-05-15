<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu primeiro site em PHP! Top demais :D</title>
    <style type="text/css">
        div {
            display: flex;
            justify-content: center;
            flex-flow: wrap row;
        }

        .teste {
            max-width: 500px;
            font-family: Arial, Helvetica, sans-serif;
            padding: 10px;
            margin-right: 10px;
        }

        #din {
            height: 50px;
            max-width: 500px;
            font-family: Arial, Helvetica, sans-serif;
        }
    </style>
</head>
<body>
    <h1>Testando</h1>
    <div>
        <?php
            for ($i = 0 ; $i <= 9 ; $i++) {
                print("<span class='teste'>Linha número </span>" . $i . "<br>");
            }
            for ($i = 10 ; $i <= 20 ; $i++) {
                print("<span class='teste'>Linha número </span>" . $i . "<br>");
            }
            if ($dinheiro = 25) {
                print("<br>" . "<p id='din'>Sou pobré!</p>");
            }
        
            else {
                print("<br>" . "<p id='din'>Sou ricó!</p>");
            }
        ?>
    </div>
</body>
</html>
        