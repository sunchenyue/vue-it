<template>
<el-container>
  <el-aside width="auto">
    <div class="logo"></div>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          :collapse="isCollapse"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航二</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航三</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
              <el-menu-item index="3-3">选项3</el-menu-item>
              <el-menu-item index="3-4">选项4</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
  <el-container>
    <el-header>
      <div>
        <!-- 点击小图标控制菜单的展开 -->
        <i @click="toggleMenu" class="myicon myicon-menu btnsize"></i>
        <div class="stitle">V U E - I T</div>
        <a href="javascript:;" class="logoutbtn" @click="logout">退出</a>
      </div>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
import { testData } from "../api/api.js";
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  // 方法
  methods: {
    // 退出功能
    logout () {
      // 清除本地的token
      localStorage.removeItem('mytoken')
      // 同时跳转到登录页
      this.$router.push({name: 'login'})
    },
    // 控制菜单的折叠与展开
    toggleMenu () {
      this.isCollapse = !this.isCollapse;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  // 挂载后
  mounted() {
    testData({
      query: "",
      pagenum: 1,
      pagesize: 10
    }).then(res => {
      // console.log("123");
    });
  }
};
</script>

<style scoped>
.el-container {
  background: url("../assets/01.jpg") no-repeat;
  width:100%;
  height:100%;
  background-size:100% 100%;
}
.btnsize {
  font-size: 36px;
  color: #989898;
  cursor: pointer;
  line-height: 60px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-container {
  height: 100%;
}
.el-aside {
  background-color: rgb(84, 92, 100, 1);
  color: #333;
  text-align: left;
  display: block;
}
.el-main{
  background-color: rgb(1, 1, 1, 0);
  text-align: left;
  overflow: "";
}
.logoutbtn {
  position: absolute;
  right: 10px;
  color: orange;
}
.el-header {
  background-color: rgba(1, 1, 1, 0);
}
.logo {
  height: 60px;
  /* background: url(../assets/01.jpg) no-repeat center; */
    background-color: rgb(84, 92, 100, 1);
  width: 100%;
  /* height:100%; */
  /* background-size: 100% 100%; */
}
.stitle {
  position: absolute;
  font-size: 28px;
  overflow: hidden;
  width: 300px;
  color: #fff;
  left: 600px;
  top: 0px;
}
</style>
