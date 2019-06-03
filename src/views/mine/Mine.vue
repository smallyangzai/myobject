<template>
<div>
    <div class="top">
        <div class="photo" style="background: url(./img/li.png) no-repeat top center"></div>
        <p class="mine_p">登陆/注册</p>
    </div>
    <div class="my_list">
            <ul class="list_one">
                <router-link v-for="(item,index) in navs" tag="li" :key="index" :to="item.path">
                    <span class="iconfont" v-html="item.icon"></span>
                    <i>{{item.title}}</i>
                    <div>></div>
                </router-link>
            </ul>
            <ul class="list_two">
                <router-link v-for="(item,index) in ones" tag="li" :key="index" :to="item.path">
                    <span class="iconfont" v-html="item.icon"></span>
                    <i>{{item.title}}</i>
                    <div>></div>
                </router-link>
            </ul>
            <ul class="list_three">
                <router-link v-for="(item,index) in lists" tag="li" :key="index" :to="item.path">
                    <span class="iconfont" v-html="item.icon"></span>
                    <i>{{item.title}}</i>
                    <div>></div>
                </router-link>
            </ul>
            <p class="my_p">关于大麦|联系我们</p>
    </div>
</div>
    
    
</template>

<script>
export default {
    name:'Mine',
    data(){
        return{
            navs:[
                {
                    title:"我的订单",
                    icon:"&#xe60b;",
                    path:'./mine'
                },
                {
                    title:"优惠券",
                    icon:"&#xe70d;",
                    path:'./mine'
                },
                {
                    title:"我的票",
                    icon:"&#xe72d;",
                    path:'./mine'
                },
            ],
            ones:[
                {
                    title:"我的关注",
                    icon:"&#xe50c;",
                    path:'./mine'
                },
            ],
            lists:[
                {
                    title:"收货地址",
                    icon:"&#xe629;",
                    path:'./mine'
                },
                {
                    title:"常用购票人",
                    icon:"&#xe729;",
                    path:'./mine'
                },
                {
                    title:"实名认证",
                    icon:"&#xe630;",
                    path:'./mine'
                },
                {
                    title:"意见反馈",
                    icon:"&#xe60f;",
                    path:'./mine'
                },
                {
                    title:"客服电话",
                    icon:"&#xe696;",
                    path:'./mine'
                },
            ]
        }
    }
}
</script>

<style>
    .top{
    display: flex;
    align-items: center;
    height: 2rem;
    background: #ff1268;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
}
.photo{
    display: block;
    margin: 0 .33333rem 0 .32rem;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 100%;
    border: 3px solid #fff;
}
.mine_p{
    flex: 1;
    font-size: .3rem;
    color: #fff;
    padding-right: .8rem;
    word-break: break-all;
    height: .40667rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}



/* list */
.my_list{
    background: #f3f3f3;
    overflow: hidden;
    margin-top: 2rem;
}
.list_one{
    display: flex;
    font-size: .27rem;
    color: #666;
    flex-direction: column;
    background: #fff;
    margin-top:.2rem;
}
.list_two{
    background: #fff;
    margin-top: .27rem;
    color: #666;
}
.list_three{
    background: #fff;
    margin-top: .27rem;
    color: #666;
}
.my_list li{
    width: 100%;
    display: flex;
    align-items: center;
    height: 1.1rem;
    border-bottom: .1px solid #e7e7e7;
}
.my_list li span{
    font-size: .3rem;
    color: #ff1268;
    padding-left: .3rem; 
}
.my_list li i{
    padding-left: .2rem;
    width: 1.5rem;
}
.my_list li div{
    float: right;
    padding-right: .1rem;
    margin-left: 4.7rem;
}
.phone{
    margin-left: 3.5rem;
    color: #999;
}
.my_p{
    margin: .5rem 2.5rem;
    font-size: .25rem;
    color: #999;
}
</style>
