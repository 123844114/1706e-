<!--
 * @Author: your name
 * @Date: 2019-11-02 08:46:12  就地复用
 * @LastEditTime: 2019-11-02 09:57:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demovue\src\ToDoList.vue
 -->
 <template>
  <div class="demo">
    <p>
      <input type="text" v-model="val" @keydown="addFn($event)" />
    </p>
    <p> 
        <label>
            <input type="checkbox" :checked='will' @change="willFn">未完成 
        </label>
    </p>
    <ul>
        <Item v-for="item in list" :key='item.id' :item="item" :msg='msg' @msgEvent="changeMsg"/>
    </ul>
  </div>
</template>
 
 <script>
import Item from "./components/Item";
export default {
  components: { Item },
  data() {
    return {
        msg:'下雨',
      val: "",
      will:false,
      list: [
        {
          id: 100,
          name: "爸爸去哪儿",
          flag: false
        }
        // {
        //   id: 101,
        //   name: "爸爸去哪儿1",
        //   flag: true
        // }
      ],
      copyList:[]
    };
  },
  created(){
      //JSON.parse(JSON.stringify(this.list)) 深拷贝
     this.copyList=[...this.list] 
  },
  methods: {
      changeMsg(v){
          //改变msg
          this.msg=v
      },
    /**
     * 增加一条记录
     */
    addFn(e) {
        // 触发事件，如何判断keycode
        console.log(e.keyCode)
        //准备一个对象
        let obj={
            id:new Date()*1,
            name:this.val,
            flag:false
        }
        if(e.keyCode===13){
            this.list.push(obj)
            this.val=''
        }
    },
/**
 * 未完成 点击事件
 */
    willFn(e){
        //赋值
        this.will=e.target.checked
        // 过滤 filter
        //  当will==true，从list中过滤出flag==false的
      if(this.will){
          this.list=  this.copyList.filter(item=>item.flag===false)
      }else {
          this.list=this.copyList
      }
    }
  }
};
</script>
 
 <style>
</style>
