<template>
    <div class="register">
        <van-nav-bar
                title="学前端,找铭哥"
                left-text="返回"
                left-arrow
                @click-left="getHome">
        </van-nav-bar>
        <van-form @submit="onSubmit">
            <van-field v-model="username" label="用户名" placeholder="请输入用户名" :right-icon="nameState"  label-align="center" name="username">  
            </van-field>
            <van-field v-model="userpwd1" label="密码" placeholder="请输入密码" :right-icon="pwdState1" label-align="center" name="userpwd1">  
            </van-field> 
            <van-field v-model="userpwd2" label="再次输入密码" placeholder="请再输入一次密码" :right-icon="pwdState2" label-align="center" name="userpwd2">  
            </van-field> 
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">注册</van-button>
            </div>
        </van-form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:"",
            userpwd1:"",
            userpwd2:"",
            nameState:"",
            pwdState1:"",
            pwdState2:""
        }
    },
    methods:{
        onSubmit(values){
           var reg=/^\w{3,10}$/;
           if(reg.test(values.username)==false){
               this.nameState="cross"
               this.$toast({
                   message:"用户名不正确,请重新输入"
               })
               return;
           }else{
               this.nameState="success"
           }
           if(reg.test(values.userpwd1)==false){
               this.pwdState="cross";
               this.$toast({
                   message:"密码不正确,请重新输入"
               })
           }else{
               this.pwdState="success"
           }

            if(reg.test(values.userpwd2)==true && values.userpwd1==values.userpwd2){
                this.pwdState="success"; 
            }else{
                this.pwdState="cross"
                this.$toast({
                    message:"两次密码不一致,请重新输入"
                })
            }

           if(reg.test(values.username)==true && reg.test(values.userpwd1)==true && values.userpwd1==values.userpwd2){
               this.axios.post("/register",`username=${this.username}&password=${this.userpwd1}`).then(result=>{
                console.log(result)
                if(result.data.code==200){
                   this.$toast({
                    message:"注册成功",
                })
                this.$router.push("/login")
                }else if(result.data.code == 201){
                    this.$toast({
                        message:"该用户已注册",
                        duration:2000
                    })
                    return;
                }
                })
           }
        },
        getHome(){
            this.$router.push("/")
        }
    },
    watch:{
        // username(){
        //     let reg = /^\w{3,6}$/;
        //     if()
        // }
    }

}
</script>
<style scoped>
.van-nav-bar{
    background-color: aqua;
}
.van-field{
    margin-top: 20px;
}
</style>