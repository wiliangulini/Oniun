let compra = document.getElementById('compra');
let liCompra = document.querySelector('.compra');
let estoque = document.getElementById('estoque');
let liEstoque = document.querySelector('.estoque');
let vendas = document.getElementById('vendas');
let liVendas = document.querySelector('.vendas');
let crm = document.getElementById('crm');
let liCrm = document.querySelector('.crm');
let portalCliente = document.getElementById('portalCliente');
let liPortalCliente = document.querySelector('.portalCliente');
let financeiro = document.getElementById('financeiro');
let liFinanceiro = document.querySelector('.financeiro');
let contabilidade = document.getElementById('contabilidade');
let liContabilidade = document.querySelector('.contabilidade');
let fiscal = document.getElementById('fiscal');
let liFiscal = document.querySelector('.fiscal');
let patrimonial = document.getElementById('patrimonial');
let liPatrimonial = document.querySelector('.patrimonial');
let producao = document.getElementById('producao');
let liProducao = document.querySelector('.producao');
let controleQualidade = document.getElementById('controleQualidade');
let liControleQualidade = document.querySelector('.controleQualidade');
let manutencaoAtivos = document.getElementById('manutencaoAtivos');
let liManutencaoAtivos = document.querySelector('.manutencaoAtivos');
let dashboard = document.getElementById('dashboard');
let liDashboard = document.querySelector('.dashboard');
let auditoriaMovimentos = document.getElementById('auditoriaMovimentos');
let liAuditoriaMovimentos = document.querySelector('.auditoriaMovimentos');
let appMobile = document.getElementById('appMobile');
let liAppMobile = document.querySelector('.appMobile');
let mais = document.getElementById('mais');
let liMais = document.querySelector('.mais');
let liModulosInt = document.querySelectorAll('.modulosInt li');
let liModulosInt2 = document.querySelectorAll('.modulosInt2 li');
let modulosIntMobile = document.querySelectorAll('.modulosIntMobile li');
let arrUl_Li = [];
let serviçosSoftware = document.querySelector('.container-fluid.servicosSoftware');
let liactive;
serviçosSoftware.setAttribute("style", "background: url('assets/images/servicos_software/Grupo4675@2x.webp') no-repeat top !important; height: 100vh; background-size: cover !important;");

if(screen.width <= 1366 && screen.width > 1220) {
  serviçosSoftware.setAttribute("style", "background: url('assets/images/servicos_software/Grupo4675.webp') no-repeat top !important; height: 100vh; background-size: cover !important;");

  document.querySelector('section.appMobile').style.zoom = '71%';
  document.querySelector('section.personalize_S').style.zoom = '70%';

}


if (screen.width < 1025) {

  serviçosSoftware.setAttribute("style", "background: url('assets/images/servicos_software/44.png') no-repeat center !important; height: 100vh; background-size: cover !important;");
  
  var activeClick2 = (event) => {
    console.log(event);
    var liActive = event.target;
  
    for (let i = 0; i < modulosIntMobile.length; ++i) {
      console.log(modulosIntMobile[i]);
      arrUl_Li.push(modulosIntMobile[i]);
      if (arrUl_Li.length == 16) break;
    }
  
    let remActive;
    arrUl_Li.forEach((elem) => {
      if (elem.classList.contains('active')) {
        elem.classList.remove('active');
        remActive = elem.classList;
        console.log(remActive.length);
        document.getElementById(remActive['value']).classList.remove('displayFlex');
        document.getElementById(remActive['value']).classList.add('displayNone');
      }
    });
  
    setTimeout(() => {
      liActive.classList.add("active");
      arrUl_Li.forEach((elem) => {
        if (elem.classList.contains('active')) {
          let remActive = elem.classList;
          console.log(remActive);
          document.getElementById(remActive[0]).classList.remove('displayNone');
          document.getElementById(remActive[0]).classList.add('displayFlex');
        }
      });
    }, 100);
  }

}

let activeIdentify = (liEvent) => {
  if (arrUl_Li.length >= 0 && arrUl_Li <= 16) {
    for (let i in liModulosInt) {
      if (i < liModulosInt.length) {
        arrUl_Li.push(liModulosInt[i]);
        console.log(arrUl_Li.length);
        if (arrUl_Li.length == 10) break;
      };
    }
    for (let i in liModulosInt2) {
      if (i < liModulosInt2.length) {
        arrUl_Li.push(liModulosInt2[i]);
        console.log(arrUl_Li.length);
        if (arrUl_Li.length == 6) break;
      }
    }
  }
  let remActive;
  arrUl_Li.forEach((elem) => {
    if (elem.classList.contains('active')) {
      elem.classList.remove('active');
      remActive = elem.classList;
      console.log(remActive.length);
      document.getElementById(remActive['value']).classList.remove('displayFlex');
      document.getElementById(remActive['value']).classList.add('displayNone');
    }
  });
  setTimeout(() => {
    liEvent.classList.add('active');
    console.log(liEvent);
  }, 100);
}

let activeClick = (event, event2) => {

  event.addEventListener('click', () => {

    event2.classList.remove('displayNone');
    event2.classList.add('displayFlex');
    activeIdentify(event);
  });
}

let removeActive = (liElm) => {
  liElm.classList.remove('active');
}

let activeFlex = (event2) => {
  event2.classList.remove('displayNone');
  event2.classList.add('displayFlex');
}

let removeFlex = (event, event2) => {
  event2.classList.remove('displayFlex');
  event2.classList.add('displayNone');
  removeActive(event);
}

let mouseEnter = (liElem, elem) => {
  liElem.addEventListener('mouseenter', () => {
    activeClick(liElem, elem);
    if (liElem.classList.contains('active')) {
      activeFlex(elem);
      liElem.addEventListener('click', () => {
        removeActive(liElem);
      });
    }
  });
}

let mouseOut = (liElm, elm) => {
  liElm.addEventListener('mouseout', () => {
    if (!liElm.classList.contains('active')) {
      removeFlex(liElm, elm);
    }
  });
}

// COMPRA mouse hover
mouseEnter(liCompra, compra);
mouseOut(liCompra, compra);

// ESTOQUE mouse hover
mouseEnter(liEstoque, estoque);
mouseOut(liEstoque, estoque);

// VENDAS mouse hover
mouseEnter(liVendas, vendas);
mouseOut(liVendas, vendas);

// CRM mouse hover
mouseEnter(liCrm, crm);
mouseOut(liCrm, crm);

// PORTAL DO CLIENTE mouse hover
mouseEnter(liPortalCliente, portalCliente);
mouseOut(liPortalCliente, portalCliente);

// FINANCEIRO mouse hover
mouseEnter(liFinanceiro, financeiro);
mouseOut(liFinanceiro, financeiro);

// CONTABILIDADE mouse hover
mouseEnter(liContabilidade, contabilidade);
mouseOut(liContabilidade, contabilidade);

// FISCAL mouse hover
mouseEnter(liFiscal, fiscal);
mouseOut(liFiscal, fiscal);

// PATRIMONIAL mouse hover
mouseEnter(liPatrimonial, patrimonial);
mouseOut(liPatrimonial, patrimonial);

// PRODUÇÃO mouse hover
mouseEnter(liProducao, producao);
mouseOut(liProducao, producao);

// CONTROLE QUALIDADE mouse hover
mouseEnter(liControleQualidade, controleQualidade);
mouseOut(liControleQualidade, controleQualidade);

// MANUTENÇÃO DE ATIVOS mouse hover
mouseEnter(liManutencaoAtivos, manutencaoAtivos);
mouseOut(liManutencaoAtivos, manutencaoAtivos);

// DASHBOARD mouse hover
mouseEnter(liDashboard, dashboard);
mouseOut(liDashboard, dashboard);

// AUDITORIA DE MOVIMENTOS mouse hover
mouseEnter(liAuditoriaMovimentos, auditoriaMovimentos);
mouseOut(liAuditoriaMovimentos, auditoriaMovimentos);

// APP MOBILE mouse hover
mouseEnter(liAppMobile, appMobile);
mouseOut(liAppMobile, appMobile);

// MAIS mouse hover
mouseEnter(liMais, mais);
mouseOut(liMais, mais);
