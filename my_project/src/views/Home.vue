<template>
    <div>
        <my-header></my-header>
        <van-tabs v-model="active" animated  sticky swipeable offset-top="46px">
            <van-tab :title="`${item.category_name}`" v-for="item,i in category" :key="i" ref="container"> 
                <!-- 轮播图 -->
                <carousel></carousel>
                 <!-- 单一文章信息开始 -->
                <div class="articleItem" v-for="(item,i) of articles" :key="i">
                <!-- 文章标题开始 -->
                <router-link :to="`/article?id=${item.id}`">
                    <div class="articleItem-header">{{item.subject}}</div>
                    <!-- 文章标题结束 -->
                    <!-- 文章图文信息开始 -->
                    <div class="articleItem-wrapper">
                    <!-- 文章图像开始  -->
                    <div class="articleImg">
                        <img :src="item.image" />
                    </div>
                    <!-- 文章图像结束 -->
                    <!-- 文章简介开始 -->
                    <div class="articleDes">
                        {{item.description}}
                    </div>
                    <!-- 文章简介结束 -->
                    </div>
                    <!-- 文章图文信息结束 -->
                </router-link>
                </div>
                <!-- 单一文章信息结束 -->
                 <!-- 底部分页栏 -->
                <van-pagination v-model="currenPage" :total-items="50" :show-page-size="5" :page-count="pagecount" @change="loadPage">
                </van-pagination>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import MyHeader from "./Header"
import Carousel from "./Carousel"
export default {
    components:{MyHeader,Carousel},
    data(){
        return{
            category:[],
            articles:[],
            active:0,
            currenPage:1,
            pagecount:1,
        }
    },
    methods:{
        loadPage(){
            let page = this.currenPage;
            this.axios.get(
                `/articles?cid=${this.active+1}&page=${page}`).then(result=>{
                    console.log(result)
                // 处理文章的图片路径 require()
                let articles = result.data.results
                // 遍历articles中的图片资源路径，require处理一下
                articles.forEach(item=>{
                if(item.image!=null){
                    item.image = require(
                        '../assets/articles/'+item.image)
                }
                })
                this.articles = articles
            })
            scrollTo(0,0)
        }
    },
    mounted(){
        this.axios.get("/category").then(result=>{
            this.category = result.data.results
        })
        this.axios.get(
            `/articles?cid=1&page=1`).then(result=>{
                console.log(result)
                let articles = result.data.results
                articles.forEach(item=>{
                    if(item.image!=null){
                        item.image = require("../assets/articles/"+item.image)
                    }
                })
                this.articles = articles;
                this.pagecount = result.data.pagecount
            })      
    },
    watch:{
        active(newval){
            // console.log(newval)
            this.currenPage=1;
            this.axios.get(
                `/articles?cid=${newval+1}&page=1`).then(result=>{
                    let articles = result.data.results;
                    articles.forEach(item=>{
                    if(item.image!=null){
                        item.image = require("../assets/articles/"+item.image)
                    }
                    })
                    this.articles = articles;
                })
        }
    }
}

</script>
<style scoped>
.articleItem {
  padding: 10px 0;
  margin: 0 10px;
  border-bottom: 1px solid #999;
}
.articleItem-header {
  font-weight: 600;
  font-size: 17px;
  color: #1a1a1a;
  line-height: 22px;
}
.articleItem-wrapper {
  display: flex;
  align-items: center;
  padding-top: 10px;
  width: 100%;
}
.articleImg {
  margin-right: 15px;
}
.articleImg img {
  width: 112px;
  height: 74px;
  border-radius: 5px;
}
.articleDes {
  height: 65px;
  font-size: 15px;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  line-height: 21px;
  letter-spacing: normal;
  color: #444;
}
</style>