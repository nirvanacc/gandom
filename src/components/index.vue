<template>
  <div>
    <div class="g-doc">
      <div class="g-bd">
          <router-view></router-view>
          <div class="head"></div>
          <div class="menu"></div>
          <div class="dataSort"></div>
          <div class="activity2">活动2</div>
          <div class="combin1">
            <div class="newsRoll">新闻轮播</div>
            <div class="mallHot">商城热卖</div>
          </div>
          <div class="activity3">活动3</div>
          <div class="combin2">
            <div class="goodNews">新闻精品</div>
            <div>
              <div class="activityHot">热门活动</div>
              <div class="manTalk">大佬谈话</div>
            </div>
          </div>
          <div class="modleArea">摸完推荐</div>
          <div class="notice">公告</div>
          <div class="links">连接</div>
      </div>
    </div>
    <div class="g-ft">
        <p>底部始终在文档末尾，当文档较长时跟随在文档末尾，当文档较短时在窗口底部。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style>
*{
  margin: 0 auto;
  padding: 0;
}
/* 底部自适应文档和窗口  */
html,body{
  width:100%;
  height:100%;
  margin:0;
}
.g-doc{
  background-color: red;
  position:relative;
  min-height:100%;
  _height:100%;
}
.g-bd{
  overflow: hidden;
  background-color: green;
  width: 1000px;
  padding:0 0 60px;
  zoom:1;
}
.g-ft{
  background-color: black;
  height:480px;
  margin:0px 0 0;
  background:#ddd;
}
.head,.menu,.dataSort,.activity2,.newsRoll,.activity3,.mallHot,.goodNews,.activityHot,.manTalk,.links{
  height: 80px;
  border: 1px solid #ddd;
  margin-top: 15px;
}
.menu{
  height: 40px;
}
.dataSort{
  height: 35px;
  margin-top: 0px;
}
.activity2{
  height: 90px;
}
.newsRoll{
  width: 700px;
height: 280px;
margin: 0;
margin-top: 15px;
}
.mallHot{
  height: 280px;
float: right;
margin-top: -282px;
width: 281px;
}
.activity3{
  height: 90px;
}
.goodNews{
  width: 700px;
margin: 0;
margin-top: 15px;
height: 635px;
}
.combin2{
  height: 280px;
float: right;
margin-top: -282px;
width: 283px;
}
.activityHot{
  height: 309px;
    margin-top: -355px
}
.manTalk{
      height: 309px;
}
.links{
  height: 200px;
}
</style>
