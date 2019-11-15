<!--
 * @Author: your name
 * @Date: 2019-11-01 11:08:36
 * @LastEditTime: 2019-11-01 16:14:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demovue\src\App.vue
 -->
<template>
  <div class="demo">
    <div class="txt">
      <el-input v-model="val" placeholder="请输入内容" width="180"></el-input>
      <el-button type="primary" @click="addFn">添加</el-button>
    </div>
    <span>任务的个数:{{tableData.length}}</span>
    <div class="tablecon">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="日期" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="内容" width="180" prop="content"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 弹框 开始 -->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="日期" :label-width="formLabelWidth">
          <!-- <el-input v-model="form.date" autocomplete="off"></el-input> -->
          <el-date-picker v-model="form.date" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="内容" :label-width="formLabelWidth">
          <el-input v-model="form.content" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitFn">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import './mock'
import axios from 'axios'
export default {
  data() {
    return {
      val: "",
      currentIndex: null, //当前编辑的下标
      tableData: [
        {
          date: "2016-05-02",
          content: "王小虎"
        }
      ],
      form: {
        date: "",
        content: ""
      },
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "120px"
    };
  },
  methods: {
    // 使用箭头函数吗？建议不要用箭头函数
    handleEdit(index, row) {
      this.dialogFormVisible = true;
      // this.form.date=row.date
      // this.form.content=row.content
      this.form = row;
      this.currentIndex = index;
      console.log(index, row);
    },
    /**
     * 删除
     * 数组删除 arr.splice(index,1)
     */
    handleDelete(index, row) {
      // console.log(index, row);
      this.tableData.splice(index, 1);
    },
    /**
     * 添加内容
     * 获取val
     * push一个对象
     * 清空原有的
     */
    addFn() {
      // console.log(this)
      let obj = {
        date: new Date().toLocaleString().split(" ")[0],
        content: this.val
      };
      this.tableData.push(obj);
      // 重置
      this.val = "";
    },
    /**
     * 编辑-提交
     * 收集数据:数组的替换 splice(index,1,obj)
     * 隐藏弹框
     */
    submitFn() {
      // console.log(this.form.date.toLocaleString().split(" ")[0])
      this.form.date=this.form.date.toLocaleString().split(" ")[0]
      this.tableData.splice(this.currentIndex, 1, this.form);
      this.dialogFormVisible = false;
    }
  },
  created(){
    axios.get('/list').then(({data})=>{
      console.log(data)
    })
  }
};
</script>
<style  scoped>
.demo {
  width: 600px;
  overflow: hidden;
  margin: 50px auto;
}
.txt .el-input {
  width: 400px;
}
</style>