<!DOCTYPE html>
<?php
        session_start();

        //クリックジャッキング対策
        header('X-FRAME-OPTIONS: SAMEORIGIN');

        // トークン生成
        if (!isset($_SESSION['token'])) {
            $_SESSION['token'] = sha1(random_bytes(30));
        }

        // HTML特殊文字をエスケープする関数
        function escape($str) {
            return htmlspecialchars($str,ENT_QUOTES,'UTF-8');
        }
    ?>
<html>
    <head>
        <meta charset="utf-8">
        <title>莉子ちゃんのバースデー旅行</title>
        <meta name="description" content="莉子ちゃんの誕生日を誰よりも素晴らしい日にするためのWebサイトです。"> 
        <link rel="stylesheet" href="form.css">
        <link rel="stylesheet" type="text/css" href="http://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/move02/4-12/css/reset.css">
        <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>

    <body>
        <div class="container">
        <header>
            <h1>莉子ちゃんの<br>バースデー旅行！</h1>
            <div class="top">
                <h2>感想</h2>
            </div>
        </header>
        
        <main class="inquiry">
        <div class="ryuji">
        <img src="hakone/ryuchan.png">
        </div>
        <section>
            <div class="form">     
                <h2>Contact</h2>
                <p>お仕事のご依頼などこちらからお問い合わせください</p>

                <form action="functions/send.php" method="Post">      
                    <div class="form-title">
                        <dl>
                            <dt>お名前
                                <dd>
                                    <div>
                                        <input type="text" name="namedata"  placeholder="例) 花子" class="inputText namearea" required>
                                    </div>                              
                                </dd>
                            </dt>
                            <dt>
                                E-mail
                                <dd>
                                    <div>
                                        <input type="text" name="mailarea"  placeholder="例)info@gmail.com" class="inputText mailarea" required>             
                                    </div>
                                </dd>
                            </dt>
                            <dt>
                                お問い合わせ内容
                                <dd>
                                <textarea name="textboxdata" placeholder="お問い合わせ内容を入力" class="inputText textboxarea" required>
                                </textarea>
                                </dd>
                            </dt>
                        </dl>                       
                        <div class="makesurebox">
                            <input type="submit" class="btnStyle1" value="送信する" />
                        </div>                               
                        </div>
                    </form>
            </div>
        </form>
        </section>
        </main>
        <div class="navi">
            <nav>
              <!--スクロールしてふわっ-->
             <ul class="flex delayScroll">
                 <li class="box"><a href="index.html">ホーム</a></li>
                 <li class="box"><a href="company.html">箱根観光地</a></li>
                 <li class="box"><a href="form.html">感想</a></li>
             </ul>    
             </nav>
            </div>
          <footer>
            <p><strong>りゅうちゃんプレゼンツ</strong></p>
          </footer>
        </div>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
        <script src="http://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/move02/4-12/js/4-12.js"></script>
    </body>

</html>