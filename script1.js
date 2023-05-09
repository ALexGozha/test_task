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
    dataComments.push(comment)
    localStorage.setItem('savecoment',(JSON.stringify(dataComments,null,2)))
    console.log(dataComments)
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
  if(comm.status !== 'disable' ){
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
  
}
  console.log(comment0)
 
  const clearLocalStorege = document.querySelector('#clearYoreComment')

  clearLocalStorege.addEventListener('click',()=>localStorage.clear())




  function init(){
  const commentButton = document.querySelector(' font > div > div:nth-child(5)')
  const btnClickHandler = () => {
      console.log('ff')
    }
  
commentButton.addEventListener('click',(event) => {
   if(event.target.hasAttribute('data-delet')){
      const idcomment = event.target.parentNode.parentNode.parentNode.parentNode.id
      console.log(idcomment.slice(1,-1)+'delet')

      const deletComment = dataComments.filter((com)=>  com.id.slice(0,-1) == idcomment.slice(1,-1))
      
      deletComment[0].status = 'disable'
      console.log(deletComment)
      const deletBlock = document.getElementById(`#${deletComment[0].id}`)
      deletBlock.style.display = 'none';
      console.log(deletBlock)
      localStorage.setItem('savecoment',(JSON.stringify(dataComments,null,2)))
    }
    if(event.target.hasAttribute('data-edit')){
      const idcomment = event.target.parentNode.parentNode.parentNode.parentNode.id
      console.log(idcomment+'edit')
      const editBlock = document.querySelector(`#\\${idcomment} > div.comment-content > p:nth-child(2) > font > font`)
      console.log(editBlock)
      replaceTag(editBlock, 'textarea')

      const ss = document.querySelector(`#\\${idcomment} > div.comment-content > p:nth-child(2) > font > textarea`)
      console.log(ss.value)
      ss.value = ''

        const buttonOk = document.querySelector(`#\\${idcomment} > div.comment-content > p:nth-child(2) > font > div > div > div > font > font`)
            buttonOk.addEventListener('click',()=>{
              const editComment = dataComments.filter((com)=>  com.id.slice(0,-1) == idcomment.slice(1,-1))
              editComment[0].textContent = ss.value
              const block = document.querySelector(`#\\${idcomment} > div.comment-content > p:nth-child(2) > font`)
              const perentBlock = block.parentElement
              console.log(block)
              console.log(perentBlock)
              block.remove()
              const newBlock = document.createElement('font')
              newBlock.style = 'vertical-align: inherit'
              newBlock.innerHTML =`<font style="vertical-align: inherit;">${ss.value}</font>`
              perentBlock.appendChild(newBlock)
              console.log(newBlock)
              console.log(editComment[0].textContent)
              console.log(dataComments)
              localStorage.setItem('savecoment',(JSON.stringify(dataComments,null,2)))
            })
    }
})
}
init()

// console.log(newDataComment)

localStorage.setItem('savecoment',(JSON.stringify(dataComments,null,2)))


        function replaceTag(element, newTagName) {
              // Создаём новый тэг.
              var newTag = document.createElement(newTagName);
              console.log(element)
              const button = document.createElement('div')
              button.innerHTML = `<div class='wrapperButton'>
              <div class="survey_button " >
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;" data-ok='button'>ok</font>
                </font>
              </div>`

              // Вставляем новый тэг перед старым.
              element.parentElement.insertBefore(newTag, element);
              element.parentElement.insertBefore(button, element);
              // Переносим в новый тэг атрибуты старого с их значениями.
              for (let i = 0, attrs = element.attributes, count = attrs.length; i < count; ++i)
                  newTag.setAttribute(attrs[i].name, attrs[i].value);

              // Переносим в новый тэг все дочерние элементы старого.
              let childNodes = element.childNodes;
              while (childNodes.length > 0)
                  newTag.appendChild(childNodes[0]);

              // Удаляем старый тэг.
              element.parentElement.removeChild(element);
       
              
        }

