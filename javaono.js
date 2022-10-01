
const body = document.querySelector('body');

const mainContainer = document.createElement('div');
mainContainer.classList.add('cabecalho');
body.appendChild(mainContainer);

const titulo = document.createElement('h1');
titulo.innerHTML = 'Music Storm';

const header = document.createElement('header');
header.appendChild(titulo);
mainContainer.appendChild(header);

const menu = document.createElement('div');
menu.classList.add('menu');
body.appendChild(menu);

const volt_inicio = document.createElement('a');
volt_inicio.href = '#';
menu.appendChild(volt_inicio);
volt_inicio.innerHTML = 'Home';
volt_inicio.onclick = start;
volt_inicio.classList.add('opcoes');

const sobre = document.createElement('a');
sobre.href = '#';
menu.appendChild(sobre);
sobre.innerHTML = 'Edu Ardanuy';
sobre.classList.add('opcoes');
sobre.onclick = edu;

const preco = document.createElement('a');
preco.href = '#';
menu.appendChild(preco);
preco.innerHTML = 'Kiko Loureiro';
preco.classList.add('opcoes');
preco.onclick = kiko;

const divi_dark = document.createElement('div');
menu.appendChild(divi_dark);
divi_dark.classList.add('divi_dark');

const dark = document.createElement('input');
dark.type = 'checkbox';
dark.id = 'chk';
dark.classList.add('checkbox');
divi_dark.appendChild(dark);

const label = document.createElement('label');
label.for = 'chk';
label.id = 'label';
label.classList.add('opcoes');
label.innerHTML = 'DARK/LIGHT';
divi_dark.appendChild(label);




dark.addEventListener('change', () => {
 // document.body.classList.toggle('dark')
    body.classList.toggle('dark');
})

const main = document.createElement('main');
main.classList.add('principal');
body.appendChild(main);

const inicio = document.createElement('div');
inicio.classList.add('informativo');
main.appendChild(inicio);

const texto_inicio = document.createElement('p');
texto_inicio.classList.add('paragrafo');
inicio.appendChild(texto_inicio);
texto_inicio.innerHTML = 'Esse site possui o intuito de mostrar os maiores guitarristas do Brasil e fornecer o preço dos seus equipamentos.';

const guitarra = document.createElement('section');
main.appendChild(guitarra);
guitarra.classList.add('guitar');

const titulo_guitarra = document.createElement('h2');
main.appendChild(titulo_guitarra);
guitarra.appendChild(titulo_guitarra);
titulo_guitarra.classList.add('texto_guita');
titulo_guitarra.innerHTML = 'Guitarristas';


// KIKO DIV

const kiko_loureiro = document.createElement('div');
main.appendChild(kiko_loureiro);
guitarra.appendChild(kiko_loureiro);
kiko_loureiro.id = 'kiko_div';
kiko_loureiro.classList.add('teste');

// KIKO LOUREIRO APRESENTAÇÃO

const apresentacao_kiko = document.createElement('div');
kiko_loureiro.appendChild(apresentacao_kiko);
apresentacao_kiko.classList.add('apresentacao');

const foto_kiko = document.createElement('img');
foto_kiko.src = 'https://www.perfildosfamosos.com/kiko-loureiro/foto-perfil-kiko-loureiro.jpg?v=68a729050bdeae488a6f260aa0dd012f';
apresentacao_kiko.appendChild(foto_kiko);
foto_kiko.classList.add('foto');

const texto_kiko = document.createElement('p');
apresentacao_kiko.appendChild(texto_kiko);
texto_kiko.classList.add('texto_geral');
texto_kiko.innerHTML = 'Aos 21 anos, em 1993, Kiko lançou seu primeiro álbum de estúdio, com o Angra, “Angels Cry”. Gravado na Alemanha e lançado no mundo todo, o disco ultrapassou a marca de 100.000 ' +
"cópias vendidas e recebeu o disco de ouro no Japão. Desde então o Angra já lançou outros sete álbuns de estúdio, três CDs e dois DVDs ao vivo, seis EPs, recebeu mais um disco de ouro pelo lançamento de" +
'Rebirth (2001) e fez turnês pelo mundo todo, tornando-se uma das principais bandas do Brasil em todos os tempos. Em 2004, Kiko deu início à sua carreira solo com o álbum instrumental “No Gravity”. Com exceção da bateria, Kiko gravou todos os instrumentos.' +
'O ano de 2015 já se inicia com grandes notícias para os fãs: Kiko Loureiro é convidado para integrar o Megadeth, uma das maiores bandas do thrash metal, parte do Big Four do gênero.'

// KIKO LOUREIRO TRABALHOS

const trabalhos_kiko = document.createElement('div');
kiko_loureiro.appendChild(trabalhos_kiko);
trabalhos_kiko.classList.add('trabalhos');

const holyland = document.createElement('a');
holyland.href = 'https://www.youtube.com/playlist?list=OLAK5uy_kpV54Gruosqn1MuNgLNwSTuURCZ6zLzMI'
trabalhos_kiko.appendChild(holyland);
holyland.target = '_blank';

const imagem_holyland = document.createElement('img');
imagem_holyland.src = 'https://akamai.sscdn.co/uploadfile/letras/albuns/d/a/c/7/9311560251045.jpg';
holyland.appendChild(imagem_holyland);
imagem_holyland.classList.add('imagem_trabalho');

const temple_shadow = document.createElement('a');
temple_shadow.href = 'https://www.youtube.com/playlist?list=OLAK5uy_n-A3lf9iwzPkHfzLlLU4lvTZooTJsdass'
trabalhos_kiko.appendChild(temple_shadow);
temple_shadow.target = '_blank';

const imagem_temple = document.createElement('img');
imagem_temple.src = 'https://images-na.ssl-images-amazon.com/images/I/81MJ05GJTlL.jpg';
temple_shadow.appendChild(imagem_temple);
imagem_temple.classList.add('imagem_trabalho');

const no_gravity = document.createElement('a');
no_gravity.href = 'https://www.youtube.com/playlist?list=OLAK5uy_nU0IQiYjl8AuOYVCpdkvPL_GW0MIFWsWc'
trabalhos_kiko.appendChild(no_gravity);
no_gravity.target = '_blank';

const imagem_gravity = document.createElement('img');
imagem_gravity.src = 'https://upload.wikimedia.org/wikipedia/en/4/4a/No_gravity.jpg';
no_gravity.appendChild(imagem_gravity);
imagem_gravity.classList.add('imagem_trabalho');

const dystopia = document.createElement('a');
dystopia.href = 'https://www.youtube.com/playlist?list=OLAK5uy_nU0IQiYjl8AuOYVCpdkvPL_GW0MIFWsWc'
trabalhos_kiko.appendChild(dystopia);
dystopia.target = '_blank';

const imagem_dystopia = document.createElement('img');
imagem_dystopia.src = 'https://www.angrymetalguy.com/wp-content/uploads/2016/01/Megadeth_Dystopia.jpg';
dystopia.appendChild(imagem_dystopia);
imagem_dystopia.classList.add('imagem_trabalho');

// KIKO DIV

const edu_ardanuy = document.createElement('div');
main.appendChild(edu_ardanuy);
guitarra.appendChild(edu_ardanuy);
edu_ardanuy.classList.add('teste');
edu_ardanuy.id = 'edu';

// KIKO LOUREIRO APRESENTAÇÃO

const apresentacao_edu = document.createElement('div');
edu_ardanuy.appendChild(apresentacao_edu);
apresentacao_edu.classList.add('apresentacao');

const foto_edu = document.createElement('img');
foto_edu.src = 'https://www.eduardanuy.com.br/novo-site/wp-content/uploads/2022/02/edu-ardanuy-guitarrista-1.jpg';
apresentacao_edu.appendChild(foto_edu);
foto_edu.classList.add('foto');

const texto_edu = document.createElement('p');
apresentacao_edu.appendChild(texto_edu);
texto_edu.classList.add('texto_geral');
texto_edu.innerHTML = 'Edu Ardanuy nasceu em São Paulo em 20/06/67, influenciado por bandas como Deep Purple, Led Zeppelin, Rush e Van Halen, entrou na cena do rock brasileiro no o final dos anos 80, ' + 
'hoje considerado uma referencia da guitarra brasileira. Edu Ardanuy sempre esteve na contramão da mídia fazendo acima de tudo o tipo de música que gostava independente das consequências e dificuldades, não se tornou uma ' +
'referencia na guitarra por acaso, passou a maior parte da vida com a guitarra nas mãos pesquisando as infinitas possibilidades desse incrível instrumento, não por obrigação nem contando as horas de estudo no relógio e sim por puro prazer de tocar guitarra e amor incondicional ao bom e velho Rock ’n’ Roll.'
// KIKO LOUREIRO TRABALHOS

const trabalhos_edu = document.createElement('div');
edu_ardanuy.appendChild(trabalhos_edu);
trabalhos_edu.classList.add('trabalhos');

const brutal = document.createElement('a');
brutal.href = 'https://www.youtube.com/playlist?list=OLAK5uy_nYZ-AB0HbAa6vjFn_DbuJojXxRu6L74So'
trabalhos_edu.appendChild(brutal);
brutal.target = '_blank';

const imagem_brutal = document.createElement('img');
imagem_brutal.src = 'https://roadie-metal.com/wp-content/uploads/2017/07/Brutal.jpg';
brutal.appendChild(imagem_brutal);
imagem_brutal.classList.add('imagem_trabalho');

const eletric_nightmare = document.createElement('a');
eletric_nightmare.href = 'https://www.youtube.com/playlist?list=OLAK5uy_kwwbmpQ6CkE5if9YbtNVdb0jPkpql0x4U'
trabalhos_edu.appendChild(eletric_nightmare);
eletric_nightmare.target = '_blank';

const imagem_eletric = document.createElement('img');
imagem_eletric.src = 'https://cdns-images.dzcdn.net/images/cover/9768d5e3c0f82b7d3a15ef6600d555c8/500x500.jpg';
eletric_nightmare.appendChild(imagem_eletric);
imagem_eletric.classList.add('imagem_trabalho');

const original_sin = document.createElement('a');
original_sin.href = 'https://www.youtube.com/playlist?list=OLAK5uy_np-xVT0y-T5VmkUsF6YsL7gD4tHua9YUA'
trabalhos_edu.appendChild(original_sin);
original_sin.target = '_blank';

const imagem_original = document.createElement('img');
imagem_original.src = 'https://akamai.sscdn.co/uploadfile/letras/albuns/0/e/f/8/21647.jpg';
original_sin.appendChild(imagem_original);
imagem_original.classList.add('imagem_trabalho');

const animal = document.createElement('a');
animal.href = 'https://www.youtube.com/playlist?list=OLAK5uy_mNWChV7y6kJ4S2kmauKz3zkUxuoZ_q4dg'
trabalhos_edu.appendChild(animal);
animal.target = '_blank';

const imagem_animal = document.createElement('img');
imagem_animal.src = 'https://images-americanas.b2w.io/produtos/2485408011/imagens/cd-dr-sin-animal/2485408020_1_large.jpg';
animal.appendChild(imagem_animal);
imagem_animal.classList.add('imagem_trabalho');

const voltar_topo = document.createElement('div');
voltar_topo.innerHTML = '<a href = "#" class = "botao"> &#9650 </a>';
main.appendChild(voltar_topo);
voltar_topo.classList.add('topo');

const footer = document.createElement('footer');
main.appendChild(footer);
footer.innerHTML = '<p class = "texto_footer">Todos os direitos reservados - Unisal Campinas</p>';
footer.classList.add('footer');

start();

function edu(){

    //document.getElementById('edu').toggle('');

    if(document.getElementById('edu').style.display == 'none'){
        divKiko = document.getElementById('kiko_div');
        divEdu = document.getElementById('edu');
    
        divKiko.style.display = 'none';
        divEdu.style.display = 'flex';
      //  divKiko = document.getElementById('kiko_div');
      //  divKiko.classList.toggle('remove');
    }





}

function kiko(){
    if(document.getElementById('kiko_div').style.display == 'none'){
        divKiko = document.getElementById('kiko_div');
        divEdu = document.getElementById('edu');
    
        divKiko.style.display = 'flex';
        divEdu.style.display = 'none';
      //  divKiko = document.getElementById('kiko_div');
      //  divKiko.classList.toggle('remove');
    }

}

function start(){
    divKiko = document.getElementById('kiko_div');
    divEdu = document.getElementById('edu');

    divKiko.style.display = 'none';
    divEdu.style.display = 'none';
}

