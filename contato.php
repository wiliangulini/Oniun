<!DOCTYPE html>
<html>

<head>
  <!-- Google Tag Manager -->
  <script>
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-MJ6KH5DH');
  </script>
  <!-- End Google Tag Manager -->
  <title>Oniun | Contato</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,user-scalable=0" />
  <meta name="description" content="Oniun, Gestão Integrada para Indústrias">
  <meta name="keywords" content="Oniun pato branco, Oniun, Oniun site, oniun pato branco, oniun, oniun site">
  <meta name="robots" content="index, follow">
  <meta name="revisit-after" content="1 day">
  <meta name="language" content="pt-BR">
  <meta name="generator" content="N/A">
  <meta name="author" content="Wilian Gulini" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <link rel="shortcut icon" href="./assets/images/FAVICON.png">
  <link rel="stylesheet" type="text/css" href="./assets/css/bootstrap.min.css" />
  <link rel="stylesheet" type="text/css" href="./assets/css/footer.css" />
  <link rel="stylesheet" type="text/css" href="./assets/css/header.css" />
  <link rel="stylesheet" type="text/css" href="./assets/css/contato.css" />
  <link rel="stylesheet" type="text/css" href="./assets/css/stylesGeral.css" />
</head>

<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MJ6KH5DH" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  <main>
    <?php require "./assets/includes/menu.php" ?>
    <div class="container-fluid contato d-flex justify-content-center align-items-center">
      <div class="container mt-5 pt-5">
        <div class="row title justify-content-center align-items-center flex-column">
          <h1 class="font-weight-bold text-center">Para solucionar, basta integrar!</h1>
          <p class="h6 text-center">Entre em contato com nossa equipe.</p>
        </div>
      </div>
    </div>
    </header>
    <section class="one d-flex justify-content-center align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-sm-5 col-md-5 col-lg-5 col-xl-5 d-flex justify-content-center align-items-center">
            <p class="h2 w-50">Quer falar com um especialista em <strong>Gestão Integrada para Indústria?</strong></p>
          </div>
          <div class="col-sm-7 col-md-7 col-lg-7 col-xl-7">
            <form method="POST" action="phpmailer/envio.php" class="w-100 formulario d-flex flex-column align-items-start justify-content-center">
              <div class="labels d-flex w-70 mb-4">
                <label class="labelInt cliente active">Cliente</label>
                <input class="cliente" type="radio" name="usuario" value='cliente' >
                <label class="labelInt parceiro">Parceiro</label>
                <input class="parceiro" type="radio" name="usuario" value='parceiro'>
              </div>
              <input type="text" class="w-70" name="nome" placeholder="Seu nome completo" required />
              <input type="email" class="w-70" name="email" placeholder="Seu e-mail" required />
              <input type="tel" class="w-70" name="tel" placeholder="Seu telefone" required />
              <textarea class="w-70" name="mensagem" placeholder="Digite sua mensagem aqui" required></textarea>
              <input type="submit" name="submit" class="w-25 inputSubmit" value="Enviar" />
            </form>
          </div>
        </div>
      </div>
    </section>
    <section class="two" id="maps">
      <div class="container-fluid maps d-flex justify-content-center align-items-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.2237633694785!2d-52.679381323802595!3d-26.221917964697113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e552e690cbb2e7%3A0xec85e08f60189fe2!2sOniun%20Sistemas%20de%20Gest%C3%A3o!5e0!3m2!1spt-BR!2sus!4v1704903976778!5m2!1spt-BR!2sus" width="1920" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  </main>
  <?php require "./assets/includes/footer.php" ?>

  <script src="./assets/js/jquery.min.js"></script>
  <script src="./assets/js/bootstrap.bundle.min.js"></script>

  <script type="text/javascript" src="./assets/js/header.js"></script>
  <script type="text/javascript" src="./assets/js/contato.js"></script>
</body>

</html>