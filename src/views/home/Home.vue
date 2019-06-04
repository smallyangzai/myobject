<template>
    <div class="all">
        <div class="head">
                <div class="hom">
                    <ul>
                        <router-link v-for="(item,index) in citys" :key="index" tag="li" class="hom_position" :to="item.path">
                            <span class="iconfont" v-html="item.icon"></span><i>全国</i>
                        </router-link>
                        <li class="hom_search">
                            <span class="iconfont">&#xe60d;</span>
                            <input type="text" placeholder="搜索明星、演出比赛、场馆">
                        </li>
                        <router-link v-for="(item,index) in navs" :key="index" tag="li" class="hom_mine" :to="item.path">
                            <span class="iconfont" v-html="item.icon"></span>
                        </router-link>
                    </ul>
                </div>
        </div>
        <div class="content-s">
            <mt-swipe :auto="4000">
                <mt-swipe-item><img class="si" src="../../common/img/lun1.webp"/></mt-swipe-item>
                <mt-swipe-item><img class="si" src="../../common/img/lun2.webp"/></mt-swipe-item>
                <mt-swipe-item><img class="si" src="../../common/img/lun3.webp"/></mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="main-sort">
            <ul>
                <router-link v-for="(item,index) in genre" :to="item.path" tag="li" :key="index">
                    <i class="iconfont" v-html="item.icon"></i>
                    <span>{{item.title}}</span>
                </router-link>
            </ul>
        </div>
        <div><img src="https://img.alicdn.com/tps/i4/TB1y_ymJmzqK1RjSZFjwu2lCFXa.png" style="width:100%"></div>
        
        <Star/>
        <Near/>
        <More/>
    </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
import Star from "@components/star/Star"
import Near from "@components/near/Near"
import More from "@components/more/More"

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
    name:'Home',
    data(){
        return{
            navs:[
                {
                    icon:"&#xe608;",
                    path:"./mine",
                }
            ],
            citys:[
                {
                    icon:"&#xe672;",
                    path:"./city",
                }
            ],
            genre:[
                {
                    title:"演唱会",
                    icon:"&#xe627;",
                    path:"/"
                },
                {
                    title:"话剧歌剧",
                    icon:"&#xe628;",
                    path:"/"
                },
                {
                    title:"音乐会",
                    icon:"&#xe626;",
                    path:"/"
                },
                {
                    title:"体育",
                    icon:"&#xe624;",
                    path:"/"
                },
                {
                    title:"曲苑杂坛",
                    icon:"&#xe625;",
                    path:"/"
                },
                {
                    title:"亲子",
                    icon:"&#xe623;",
                    path:"/"
                },
                {
                    title:"展览休闲",
                    icon:"&#xe622;",
                    path:"/"
                },
                {
                    title:"境外",
                    icon:"&#xe632;",
                    path:"/"
                }
            ]
        }
    },
    components:{
        Star,
        Near,
        More
    }
}
</script>

<style>
.all{
    width: 100%;
    height: 12rem;
    overflow: scroll;
}
    .hom{
    height: 1rem;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    z-index: 10;
}
.hom ul{
    display: flex;
    align-items:center;

}
.hom ul li{
    height: .6rem;
    line-height: .6rem;
}
.hom_position{
    margin-left: .3rem;
    font-size: .35rem;
}
.hom_position span{
    font-size: .35rem;
    padding-right: .1rem;
}
.hom_position i{
    font-size: .31rem;
    font-weight: 530;
}
.hom_search{
    border-radius: 100px;
    background: #fff;
    margin-left: .4rem;
    width: 4.5rem;
    height:0.3rem;
}
.hom_search span{
    font-size: .3rem;
    padding-left: .2rem;
    float: left;
}
.hom_search input{
    height: .35rem;
    border: none;
    width: 4rem;
    outline: none;
    font-size: .28rem;
    padding-left: .2rem;
}
.hom_mine span{
    font-size: .4rem;
    margin-left: .3rem;
    font-weight: 600;
}



.content-s{
    margin-top:1rem;
    height: 2.82rem;
    overflow: hidden;
}
.si{
    height: 2.82rem;
    width: 100%;
}


.main-sort{
    background: #fff;
    padding: .3rem 0 .2rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
}
.main-sort>ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.main-sort>ul>li{
    width: 25%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
    align-items: center;
    padding-top:.3rem;
}
.main-sort>ul>li>i{
    font-size: .55rem;
    font-weight:600;
}
.main-sort>ul>li>span{
    font-size:.25rem;
    font-weight:600;
    padding-top: .1rem;
}
</style>
