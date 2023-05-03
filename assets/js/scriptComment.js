// const nodes = document.querySelector('#p_body_content > font > div > div:nth-child(4) > div').children
// const comments1 =[]
// console.log(nodes)

// for (let i=1; i<nodes.length; i++){
//     const nod = nodes[i]
//     const comment = {}
//     comment.userName = nod.querySelector(' div.comment-content > p.name > font > font')?.innerText
//     comment.img = nod.querySelector('div > img')?.src
//     comment.id =String (Math.random()).split('.')[1]
//     comment.textContent = nod.querySelector(' div.comment-content > p:nth-child(2) > font > font')?.innerText
//     comment.countLike = nod.querySelector(' div.comment-status > span > font:nth-child(3) > font')?.innerText
//     comment.minutesBefore = (nod.querySelector(' div.comment-status > small > u > font > font')?.innerText) || (nod.querySelector('div.comment-status > font > small > u > font')?.innerText)
//     comments1.push(comment)
// }
// console.log(JSON.stringify(comments1,null,2));
// console.log(JSON.parse(JSON.stringify(comments1,null,2)))
let a = localStorage.getItem('savecoment')
// console.log(a)
const b =  JSON.parse(a)
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
 
  let clearYurComment = document.querySelector('#clearYoreComment')
  
  clearYurComment.addEventListener('click', function(){
    localStorage.clear()
    // console.log(clearYurComment)
  })
  
  const Comment0 = document.querySelector('#p_body_content > font > div > div:nth-child(5) > div > div')
  const comments = b || commentsData
  comments.reverse()
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

        <font style="vertical-align: inherit;">
          <small>
            <font style="vertical-align: inherit;">·</font>
          </small>
          <small>
            <u>
              <font style="vertical-align: inherit;"data-comment="delet" >delet comment</font>
            </u>
          </small>
        </font>
      </div>
      </div>`;
    
      Comment0.after(comm)
      let buttonCommentDelet= document.querySelector('[data-comment="delet"]')
      buttonCommentDelet.addEventListener('click', function(){
            comm.style.display = none
            console.log(comm)
      })
      
      
  }

  



let buttonComment = document.querySelector('#submitComment')
let textComment = document.querySelector('#newComment').innerHTML
console.log(textComment)
const commentBlock= document.querySelector('.comments_face').firstChild.nextElementSibling
let id = String (Math.random()).split('.')[1]
let templateComment = ``;
const imgAva ='./assets/img/ava.jfif'
console.log(textComment);
buttonComment.addEventListener('click', function(){
    // let commentText = textComment.value 
    let newComment = document.createElement('div')
    newComment.innerHTML= `<div class="comments" id="${id}" style="display:block">
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
    console.log(textComment.value)
    commentBlock.after(newComment)

    const newCommentObj = {
      userName: "user",
      img: `${imgAva}`,
      id: `${id}`,
      "textContent": `${textComment.value}`,
      "countLike": "0",
      "minutesBefore": "0"
    }
    commentsData.unshift(newCommentObj)
    localStorage.setItem('savecoment',(JSON.stringify(commentsData,null,2)))
  })
console.log(commentsData)
const showRusult = document.querySelector('#p_modal_button3')

showRusult.addEventListener('click', function (){
    console.log(`
    1.Qual é o seu gênero? ${answer1[0]}
    2.Qual é a sua idade ? ${answer1[1]}
    3.Quantas pessoas existem na sua família? ${answer1[2]} 
    4.Nos passados já comprou iPhone XS do Apple? ${answer1[3]}`)
})



//  localStorage.setItem('savecoment',(JSON.stringify(commentsData,null,2)))
