<!--
 * @Author: your name
 * @Date: 2019-11-02 10:58:32
 * @LastEditTime: 2019-11-04 15:47:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demovue\src\views\My.vue
 -->
<template>
  <div class="my">
      我的
      <Menu :list="menu"/>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
export default {
    components:{Menu},
data(){
  return {
    menu:[{
        "id": 10,
        "name": '男装',
        "show":false,
        "children": [{
                "id": 101,
                "name": '正装'
            },
            {
                "id": 102,
                "name": 'T恤'
            },
            {
                "id": 103,
                "name": '裤衩'
            }
        ]
    },
    {
        "id": 20,
        "name": '女装',
        "show":false,
        "children": [{
                "id": 201,
                "name": '短裙'
            },
            {
                "id": 202,
                "name": '连衣裙'
            },
            {
                "id": 203,
                "name": '裤子',
                "show":false,
                "children": [{
                        "id": 2031,
                        "name": '长裤'
                    },
                    {
                        "id": 2031,
                        "name": '九分裤'
                    },
                    {
                        "id": 2031,
                        "name": '七分裤'
                    }
                ]
            },
        ]
    },
    {
        "id": 30,
        "name": '童装',
        "show":false,
        "children": [{
                "id": 301,
                "name": '帽子'
            },
            {
                "id": 302,
                "name": '套装',
                "show":false,
                "children": [{
                        "id": 3021,
                        "name": "0-3岁"
                    },
                    {
                        "id": 3021,
                        "name": "3-6岁"
                    },
                    {
                        "id": 3021,
                        "name": "6-9岁"
                    },
                    {
                        "id": 3021,
                        "name": "9-12岁"
                    }
                ]
            },
            {
                "id": 303,
                "name": '手套'
            }
        ]
    }
]
  }
}
}
</script>

<style>

</style>