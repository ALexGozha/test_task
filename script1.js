let a = localStorage.getItem('savecoment')
// console.log(a)
const b = JSON.parse(a)
// console.log(b)
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
commentsData.reverse()
  // let a = '-'
  // for(let i=0; i<5; i++){
  //   a+=a 
  // }
// console.log(JSON.stringify(commentsData,null,2))
// console.log(a)


const dataComments = b || commentsData





 const  createComent = document.querySelector("#submitComment")
 const  textComment = document.querySelector('#newComment')
 const comment0 = document.querySelector('font > div > div:nth-child(5) > div > div')
  createComent.addEventListener('click', function(){
    let idd = String(Math.random()).split('.')[1]
    console.log(idd)
    console.log(textComment);
    const comment = {
      userName: "user",
      img: "file:///C:/web/test_task/assets/img/ava.jfif",
      id: `${idd}`,
      textContent: textComment.value,
      countLike: "29",
      minutesBefore: "4 minutos antes"
    }
    commentsData.push(comment)
    localStorage.setItem('savecoment',(JSON.stringify(commentsData,null,2)))
    console.log(commentsData)
    textComment.value = ''
    console.log(textComment)
    const newComment = document.createElement('div')
    newComment.innerHTML = `<div class="comments" id="#${comment.id}" style="display:block">
    <div class="profile">
      <img src="${comment.img}"></div>
    <div class="comment-content">
      <p class="name">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">${comment.userName}</font>
        </font>
      </p>
      <p>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">${comment.textContent}</font>
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
          <font data-like style="vertical-align: inherit;">${comment.countLike}</font>
        </font>
      </span>
      <font style="vertical-align: inherit;">
        <small>
          <font style="vertical-align: inherit;">·</font>
        </small>
        <small>
          <u>
            <font style="vertical-align: inherit;">${comment.minutesBefore}</font>
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
            <font style="vertical-align: inherit;"data-comment="delet" >edit comment</font>
          </u>
        </small>
      </font>

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
    </div>`
    comment0.after(newComment)
    // const idHtml = document.getElementById(`#${comment.id}`)
    // console.log(idHtml)
    
  })

for(let comm of dataComments){
  const comments = document.createElement('div')
  comments.innerHTML = `<div class="comments" id="#${comm.id}" style="display:block">
  <div class="profile">
    <img src="${comm.img}"></div>
  <div class="comment-content">
    <p class="name">
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">${comm.userName}</font>
      </font>
    </p>
    <p>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">${comm.textContent}</font>
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
        <font data-like style="vertical-align: inherit;">${comm.countLike}</font>
      </font>
    </span>
    <font style="vertical-align: inherit;">
      <small>
        <font style="vertical-align: inherit;">·</font>
      </small>
      <small>
        <u>
          <font style="vertical-align: inherit;">${comm.minutesBefore}</font>
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
 <div class='wrapperButton'>
    <div class="survey_button " >
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;" data-edit='button'>edit</font>
      </font>
    </div>


    <div class="survey_button " >
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;" data-delet='button'>Delet</font>
      </font>
    </div>
  </div>
  </div>`
  comment0.after(comments)
  
  
}
 


  console.log(comment0)
  
  function init(){
  const commentButton = document.querySelector(' font > div > div:nth-child(5)')
  const btnClickHandler = () => {
      console.log('ff')
    }
  
commentButton.addEventListener('click',(event) => {
   if(event.target.hasAttribute('data-delet')){
      const idcomment = event.target.parentNode.parentNode.parentNode.parentNode.id
      console.log(idcomment.slice(1,-1)+'delet')

      const commentsData = commentsData.filter((com)=>  com.id.slice(0,-1) !== idcomment.slice(1,-1))
      console.log(commentsData)
      // for(let com of commentsData){
      //   if(idcomment.slice(1,-1) == com.id.slice(0,-1)){
      //     console.log(com)
      //   }
      // }
    }
    if(event.target.hasAttribute('data-edit')){
      const idcomment = event.target.parentNode.parentNode.parentNode.parentNode.id
      console.log(idcomment+'edit')
    }
})
}
init()
