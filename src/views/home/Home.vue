<template>
<div class="contoner">
    
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
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(item, index) in images" :key="index">
                <img v-lazy="item"/>
            </van-swipe-item>
        </van-swipe>
</div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);

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
            images: [
                '/src/common/img/lun2.webp',
                '/src/common/img/lun2.webp',
                '/src/common/img/lun2.webp',
            ]
        }
    }
}
</script>

<style>
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
.contoner{
    overflow: hidden;
}
.van-swipe{
    margin-top: 1rem
}
</style>
