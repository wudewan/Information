<template>
    <div class="carousel">
        <van-swipe  :autoplay="3000" indicator-color="white" :style="{height:h}">
            <van-swipe-item>
                <img src="../assets/itemCat_banner1.png"/>
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/itemCat_banner2.png"/>
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/itemCat_banner3.png"/>
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/itemCat_banner4.png"/>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
export default {
    data(){
        return{
          h:""
        }
    },
    mounted(){
        var picw = 1000;
        var pich = 400;
        var screenw = window.screen.width;
        this.h = Math.floor(pich*screenw/picw)+"px"
    }
}
</script>
<style>
    /* .van-swipe{
        height: 150px;
    } */
    .van-swipe  img{
        width: 100%;
    }
</style>