let commentsData = [
    {
      "userName": "Inês",
      "img": "file:///C:/web/test_task/assets/img/1.gif",
      "id": "4764954296272912",
      "textContent": "Eu ganhei nada",
      "countLike": "29",
      "minutesBefore": "4 minutos antes"
    },
    {
      "userName": "FernandoPessoa",
      "img": "file:///C:/web/test_task/assets/img/4.jpg",
      "id": "6418721090194961",
      "textContent": "Eu gostei essas promoções",
      "countLike": "9",
      "minutesBefore": "11 minutos antes"
    },
    {
      "userName": "Maria",
      "img": "file:///C:/web/test_task/assets/img/5.jpg",
      "id": "474903421580237",
      "textContent": "Já recebi minha iPhone 11 Pro. Agradeço muito!",
      "countLike": "22",
      "minutesBefore": "15 minutos antes"
    },
    {
      "userName": "Lucas",
      "img": "file:///C:/web/test_task/assets/img/6.jpg",
      "id": "14794706931078316",
      "textContent": "Eu achava que era uma brincadeira, mas meu iPhone 11 Pro do Apple chegou hoje de manhã",
      "countLike": "36",
      "minutesBefore": "38 minutos antes"
    },
    {
      "userName": "Mariana",
      "img": "file:///C:/web/test_task/assets/img/2.gif",
      "id": "886492698798292",
      "textContent": "Eu participei, venci e ganhou o meu iPhone 11 Pro do Apple depois de 5 dias. ",
      "countLike": "31",
      "minutesBefore": "42 minutos antes"
    },
    {
      "userName": "Rafael",
      "img": "file:///C:/web/test_task/assets/img/7.jpg",
      "id": "6402959100759766",
      "textContent": "É possível pegar o meu iPhone 11 Pro do Apple hoje？",
      "countLike": "6",
      "minutesBefore": "1 hora antes"
    },
    {
      "userName": "Francisco",
      "img": "file:///C:/web/test_task/assets/img/8.jpg",
      "id": "07357112495617235",
      "textContent": "Eu achava que era uma brincadeira, mas hoje de manhã eu recebi meu iPhone 11 Pro através de DHL, eu quero participar outras pesquisas！",
      "countLike": "15",
      "minutesBefore": "2 hora antes"
    },
    {
      "userName": "Fernando",
      "img": "file:///C:/web/test_task/assets/img/4.jpg",
      "id": "6282216393967333",
      "textContent": "Existe algumas outras pesquisas ？",
      "countLike": "39",
      "minutesBefore": "2 hora antes"
    },
    {
      "userName": "Heloísa",
      "img": "file:///C:/web/test_task/assets/img/10.jpg",
      "id": "08837981738721279",
      "textContent": "Que bom! ",
      "countLike": "23",
      "minutesBefore": "3 hora antes"
    },
    {
      "userName": "Gustavo",
      "img": "file:///C:/web/test_task/assets/img/9.jpg",
      "id": "6295281757406064",
      "textContent": "No início eu achava que era uma brincadeira, mas em fim eu ganhei minha Galaxy S10.",
      "countLike": "30",
      "minutesBefore": "4 hora antes"
    }
  ]
  
  
  
  
  const Comment0 = document.querySelector('#p_body_content > font > div > div:nth-child(4) > div > div:nth-child(1)')
  const comments = commentsData.reverse()
  for(let com of comments){
      let comm = document.createElement('div')
      comm.innerHTML= `<div class="comments" id="${com.id}" style="display:block">
      <div class="profile">
        <img src="${com.img}"></div>
      <div class="comment-content">
        <p class="name">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">${com.userName}</font>
          </font>
        </p>
        <p>
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">${com.textContent}</font>
          </font>
        </p>
      </div>
      <div class="clr"></div>
      <div class="comment-status">
        <span>
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Curte·comente</font>
          </font>
          <img src="./assets/img/like.png" width="15px" height="15px">
          <font style="vertical-align: inherit;">
            <font data-like style="vertical-align: inherit;">${com.countLike}</font>
          </font>
        </span>
        <font style="vertical-align: inherit;">
          <small>
            <font style="vertical-align: inherit;">·</font>
          </small>
          <small>
            <u>
              <font style="vertical-align: inherit;">${com.minutesBefore}</font>
            </u>
          </small>
        </font>
        <small>
          <font style="vertical-align: inherit;"></font>
          <u>
            <font style="vertical-align: inherit;"></font>
          </u>
        </small>
      </div>
      </div>`;
      Comment0.after(comm)
  }


let buttonComment = document.querySelector('#submitComment')
let textComment = document.querySelector('#newComment')
const commentBlock= document.querySelector('.comments_face').firstChild.nextElementSibling
let templateComment = ``;
const imgAva ='./assets/img/ava.jfif'

buttonComment.addEventListener('click', function(){
    // let commentText = textComment.value 
    let newComment = document.createElement('div')
    newComment.innerHTML= `<div class="comments" id="comment0" style="display:block">
    <div class="profile">
      <img src="${imgAva}"></div>
    <div class="comment-content">
      <p class="name">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">user</font>
        </font>
      </p>
      <p>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">${textComment.value}</font>
        </font>
      </p>
    </div>
    <div class="clr"></div>
    <div class="comment-status">
      <span>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">Curte·comente</font>
        </font>
        <img src="./assets/img/like.png" width="15px" height="15px">
        <font style="vertical-align: inherit;">
          <font data-like style="vertical-align: inherit;">29</font>
        </font>
      </span>
      <font style="vertical-align: inherit;">
        <small>
          <font style="vertical-align: inherit;">·</font>
        </small>
        <small>
          <u>
            <font style="vertical-align: inherit;">4 minutos antes</font>
          </u>
        </small>
      </font>
      <small>
        <font style="vertical-align: inherit;"></font>
        <u>
          <font style="vertical-align: inherit;"></font>
        </u>
      </small>
    </div>
    </div>`;

        let like = document.querySelector('[data-like]')

    console.log(like)
    console.log(newComment)
    console.log(commentBlock)
    commentBlock.after(newComment)
})