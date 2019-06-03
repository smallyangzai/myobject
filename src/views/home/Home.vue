<template>
    <div class="head">
        <div class="hom">
            <ul>
                <router-link v-for="(item,index) in citys" :key="index" tag="li" class="hom_position" :to="item.path">
                    <span class="iconfont" v-html="item.icon"></span>全国
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
        <div>
            {{}}
        </div>
    </div>
</template>

<script>
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
.hom_search{
    border-radius: 20px;
    background: #fff;
    margin-left: .4rem;
    width: 4.5rem;
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
    font-size: .5rem;
    margin-left: .3rem;
    font-weight: 600;
}
</style>
