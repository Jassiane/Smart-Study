<!doctype html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Smart Study</title>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <?php

$dbhost = 'localhost';
$dbUserName = 'root';
$dbPassword = '';
$dbName = 'smart_study';

$conexao = new mysql ($dbhost, $dbUserName, $dbPassword, $dbName)
    ?>
        <div class="header">
            <div class="logo">
                <img src="imagens.png/o-estudo-2.webp" alt="Logo" />
            
            </div>
            <h3> Smart Study</h3>

            <div class="nav-buttons">
                <button onclick="location.href='login.html'">Login</button>
                <button onclick="location.href='cadastro.html'">Cadastro</button>
                <button onclick="location.href='contato.html'">Fale Conosco</button>
            </div>
        </div>

        <section id="home">
            <h1>Bem-vindo ao Smart Study</h1>
            <p>
                A plataforma ideal para melhorar o desempenho nos vestibulares oferece materiais de estudo,
                 simulados e acompanhamento de especialistas, proporcionando acesso a recursos de alta qualidade para uma preparação eficaz.
            </p>
            <a href="#about" class="btn">Saiba Mais</a>
        </section>

        <!-- Seção de Materiais de Estudo -->
        <section id="materials">
            <h2>Materiais de Estudo</h2>
            <p>Encontre materiais organizados por disciplina, com exercícios resolvidos e dicas de estudo.</p>
            <ul>
                <li><a href="#">Matemática</a></li>
                <li><a href="#">Física</a></li>
                <li><a href="#">Química</a></li>
                <li><a href="#">Redação</a></li>
                <li><a href="#">Biologia</a></li>
            </ul>
        </section>

        <!-- Seção de Simulados -->
        <section id="simulados">
            <h2>Simulados</h2>
            <p>Teste seus conhecimentos com nossos simulados online e receba feedback detalhado.</p>
            <a href="#" class="btn">Fazer Simulado</a>
        </section>

        <!-- Seção Professores -->
        <div class="professores">
            <h3>Conheça Nossos Professores</h3>
            
        </div>

        <div class="container">
            <div class="caixa">
                <img src="https://optim.tildacdn.one/tild3866-6532-4331-b964-663861373234/-/resize/486x/-/format/webp/Noslen.png" alt="Professor Noslen" />

               <h1> Português</h1>
               <h2> Noslen</h2>
            </div>
            <div class="caixa">
                <img src="https://cdn.eveclass.com/p/60dce6edab69203d10b8c7c1/files/gallery/image/69172180-ff8c-11eb-aebc-2bda9b90a19a/original.png" alt="Professor de Química" />
            </div>
            <div class="caixa">
                <img src="https://www.seuidioma.com.br/wp-content/uploads/2024/07/Design-sem-nome-25.webp" alt="Professor de Química" />
            </div>
            <div class="caixa">
                <img src="https://cdn-cnffb.nitrocdn.com/ZMVxzPoTgNjmbrxUviMOjDtFuERtCopj/assets/static/optimized/rev-b77cc85/wp-content/uploads/2021/08/boaro-azul.png" alt="Professor de Química" />
            </div>
            <div class="caixa">
                <img src="https://ac-landing-pages-user-uploads-production.s3.amazonaws.com/0000136989/279e148c-60e2-47ec-89bf-8f5ae28219bc.png" alt="Professor de Química" />
            </div>
            <div class="caixa">
                <img src="https://storage.builderall.com//franquias/2/6978727/editor-html/11997105.png" alt="Professor de Química" />
            </div>
        </div>

         

        <footer>
            <h1> Smart Study</h1>
            <p> Nosso site bla bla bla </p>  <i class="fa-brands fa-facebook"></i>

          



        </footer>
        <script src="script.js"></script>
    </body>
</html>