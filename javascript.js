const comments =[
    {
        userName:'Inês',
        textComment:'Eu ganhei nada',
        img:'./assets/img/1.gif',
        countLike: '29',
        minutesBefore: '4',
        LikeComent: false,
    },
    {
        userName:'FernandoPessoa',
        textComment:'Eu gostei essas promoções',
        img:'./assets/img/4.jpg',
        countLike: '9',
        minutesBefore: '11',
        LikeComent: false,
    },

]



let comment = document.createComment('div')
comment.innerHTML= `<div class="comments" id="comment0" style="display:block">
<div class="profile">
  <img src="${c}"></div>
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