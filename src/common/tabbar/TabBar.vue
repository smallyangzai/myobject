<template>
  <div id="footer">
      <ul>
          <router-link v-for="(item,index) in navs" :to="item.path" tag="li" :key="index">
              <i class="iconfont" v-html="item.icon"></i>
              <span>{{item.title}}</span>
          </router-link>
      </ul>
  </div>
</template>

<script>
export default {
    name:"TabBar",
    data(){
        return{
            navs:[
                {
                    title:"首页",
                    icon:"&#xe604",
                    path:"/home"
                },
                {
                    title:"分类",
                    icon:"&#xe501;",
                    path:"/sort"
                },
                {
                    title:"我的",
                    icon:"&#xe612;",
                    path:"/mine"
                }
            ]
        }
    }
}
</script>

<style>
    #footer{
        width: 100%;
        height: 1rem;
        position: fixed;
        left:0;
        bottom:0;
        box-shadow: 0 0 2px 0 rgba(183,183,183,0.50);
        background: #ffffff;
    }
    #footer>ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between; 
    }
    #footer>ul>li{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
        align-items: center;
        padding: .05rem 0;
    }
    #footer>ul>.router-link-active{
        color:#c33;
    }
    #footer>ul>li>i{
        font-size: .4rem;
        font-weight:600;
    }
    #footer>ul>li>span{
        font-size:.3rem;
        font-weight:600;
    }







    
</style>
