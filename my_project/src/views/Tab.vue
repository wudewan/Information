<template>
    <div class="tab">
        <van-tabs v-model="active" animated>
            <!-- <van-tab :title="`${item.category_name}`" v-for="item,i in category" :key="i">
                <carousel></carousel>
            </van-tab> -->
        </van-tabs>
    </div>
</template>
<script>
// import Carousel from "./Carousel"
export default {
    // props:["category","articles"],
    // components:{
    //     Carousel
    // },
    data(){
        return{
            active:0
        }
    }
}
</script>