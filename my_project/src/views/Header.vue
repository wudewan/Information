<template>
  <div class="myheader">
    <van-nav-bar title="昨日头条" fixed placeholder>
      <template #right>
        <div v-if="$store.state.islogin">欢迎{{ $store.state.username }}</div>
        <div v-else>
          <span><router-link to="/login">登录</router-link> </span>丨
          <span><router-link to="/register">注册</router-link></span>
        </div>
      </template>
    </van-nav-bar>
  </div>
</template>

<style>
.myheader .van-nav-bar__content {
  background-color: aqua;
}
</style>
