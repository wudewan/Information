<template>
    <div class="login">
        <van-nav-bar
                title="学前端,找铭哥"
                left-text="返回"
                left-arrow
                @click-left="getHome">
        </van-nav-bar>
        <van-form @submit="onSubmit">
            <van-field v-model="username" label="用户名" placeholder="请输入用户名" :right-icon="nameState"  label-align="center" name="username">  
            </van-field>
            <van-field v-model="userpwd" label="密码" placeholder="请输入密码" :right-icon="pwdState" label-align="center" name="userpwd">  
            </van-field> 
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">登录</van-button>
            </div>
        </van-form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:"",
            userpwd:"",
            nameState:"",
            pwdState:""
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
           if(reg.test(values.userpwd)==false){
               this.pwdState="cross";
               this.$toast({
                   message:"密码不正确,请重新输入"
               })
           }else{
               this.pwdState="success"
           }
           if(reg.test(values.username)==true && reg.test(values.userpwd)==true){
               this.axios.post("/login",`username=${values.username}&password=${values.userpwd}`).then(result=>{
                console.log(result)
                if(result.data.code==200){
                    this.$toast({
                      message:"登录成功"
                    })
                    let username = result.data.result.username;
                    this.$store.commit("loginOK",username);
                    
                    //向sessionStoragez中存储islogin与username
                    sessionStorage.setItem("islogin","true");
                    sessionStorage.setItem("username",username);
                    //跳转到登录
                    this.$router.push("/")
                }else if(result.data.code == 201){
                    this.$toast({
                        message:"用户名或密码错误",
                        position:"bottom",
                        duration:3000
                  })
                }
                })
           }
        },
        getHome(){
            this.$router.push("/")
        }
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