<template>
    <div class="home">
    <el-container>
        <el-aside width="auto">
            <div class="logo"></div>
             <el-menu
        default-active="2"
        class="el-menu-admin"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
         :collapse="isCollapse"
         :router = "true"
        >
        <el-submenu index="1">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span>用户管理</span>
        </template>
        <el-menu-item index="/user">
            <i class="el-icon-menu"></i>
            <span slot="title">用户列表</span>
        </el-menu-item>
        </el-submenu>
        </el-menu>
        </el-aside>
        <el-container>
        <!-- header部分 -->
        <el-header>
            <i class="myicon myicon-menu toggle-btn" @click="toggleCollapse"></i>
            <div class="system-title">电商后台管理系统</div>
            <div>
            <span class="welcome">
                hello,xxx
            </span>
            <el-button type="text" @click="logout">退出</el-button>
            </div>
        </el-header>
        <!-- 中间内容部分 -->
        <el-main>
            <router-view></router-view>
        </el-main>
        </el-container>
    </el-container>
</div>
</template>
<script>
import { getUserList } from '../api/index.js'
export default {
    data() {
        return {
            isCollapse:false
        }
    },
    methods: {
         handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
    handleClose (key, keyPath) {
        console.log(key, keyPath)
      },
      toggleCollapse(){
          this.isCollapse = !this.isCollapse
      },
      logout () {
          //1.退出登录即清除登录状态，删除保存在locaStorage中的token
          localStorage.removeItem('mytoken')
          //2.跳转到登录页面
          this.$router.push({name:'Login'})
      }
    }
   
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #545c64;
  }
  .logo {
    height:60px;
    background: url(../assets/logo.png);
    background-size: cover;
    background-color: #989898;
  }
  .toggle-btn {
    font-size: 36px;
    color: #989898;
    cursor: pointer;
    line-height: 60px;
  }
  .system-title {
    font-size: 28px;
    color: white;
  }
  .logout-btn {
    color: orange;
  }
}
</style>
