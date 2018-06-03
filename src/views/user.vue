<template>
    <div class="user">
    <el-row>
        <el-col :span="24">
            <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <!-- 给组件绑定原生事件的话，需要一个.native的修饰符 -->
            <el-input placeholder="请输入内容" class="search-input" v-model="query" @keydown.native.enter="initList">
            <el-button slot="append" icon="el-icon-search" @click="initList"></el-button>
            </el-input>
            <el-button type="success" plain>添加用户</el-button>
        </el-col>
    </el-row>
    <el-table
    :data="userList"
    border
    style="width: 100%">
    <el-table-column
        type="index"
        width="50">
    </el-table-column>
    <el-table-column
        prop="username"
        label="姓名"
        width="180">
    </el-table-column>
    <el-table-column
        prop="email"
        label="邮箱"
        width="180">
    </el-table-column>
    <el-table-column
        prop="mobile"
        label="电话">
    </el-table-column>
    <el-table-column label="用户状态">
        <template slot-scope="scope">
            <el-switch v-model="value"></el-switch>
        </template>
    </el-table-column>
    <el-table-column label="操作">
        <template slot-scope="scope">
            <el-button size="mini" type="primary" plain icon="el-icon-edit"></el-button>
            <el-button size="mini" type="danger" plain icon="el-icon-delete"></el-button>
            <el-button size="mini" type="warning" plain icon="el-icon-check"></el-button>
        </template>
    </el-table-column>
</el-table>
    <div class="page">
        <el-pagination
            @size-change="handleSizeChange(val)"
            @current-change="handleCurrentChange(val)"
            :current-page="1"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="40">
        </el-pagination>
    </div>

</div>
</template>
<script>
import {getUserList} from '../api/index.js'
export default {
    data() {
        return{        
            userList: [],
            query: '',
            total: 0, // 数据总条数
            pagesize: 10, // 每页显示多少条
            pagenum: 1, // 当前页码
            addDialogFormVisible: false, // 控制添加用户对话框显示隐藏
        }
    },
    methods: {
                initList () {
                    getUserList({params: {query: this.query, pagenum: 1, pagesize: 3}}).then(res => {
                    console.log(res)
                    this.userList = res.data.users
                    this.total = res.data.total
                    })
                },
                handleSizeChange (val) {
                console.log(`每页 ${val} 条`)
                this.pagesize = val
                this.initList()
                },
                handleCurrentChange (val) {
                    console.log(`当前页: ${val}`)
                    this.pagenum = val
                    this.initList()
                }
            },
     // 3. 在生命周期函数created中发送请求
    created(){
                this.initList()
            }
}
</script>
<style lang="scss" scoped>
/*element.scss中书写面包屑组件样式*/
.el-breadcrumb {
    background-color: #D3DCE6;
    height: 45px;
    font-size: 15px;
    padding-left: 10px;
    line-height: 45px;
    margin-bottom: 15px;
}

/*组件内部style标签中书写以下样式*/
.user {
  .margin-20 {
    margin: 20px 0;
  }
  .search-input {
    width: 300px;
  }
  .page {
    padding: 5px 0;
    background-color: #D3DCE6;
  }
} 
</style>

