<template>
    <div class="login-body" @keyup.enter="handleLogin">
        <top-color v-show="false"></top-color>  <!-- 自定义改变登录框颜色 -->
        <div class="login-container animated bounceInRight">
            <div class="login-left">
            </div>
            <div class="login-right">
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss">
@import "@/styles/login.scss";
</style>
