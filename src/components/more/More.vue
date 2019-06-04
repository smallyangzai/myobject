<template>
    <div class="more">
        <div class="star-more">
            <i>更多演出</i>
        </div>
        <div class="home-calendar-week">
            <span class="selected">
                全部分类 
            </span>
            <span class="">
                全部时间
            </span>
            <span class="">
                推荐排序
            </span>
            <span class="">
                距离最近
            </span>
        </div>
        <div class="content">
            <div class="banner">
                <img src="../../common/img/sort1.webp" alt="">
            </div>
            <div class="introduce">
                <div class="introduceone">林宥嘉idol巡回演唱会北京站</div>
                <div class="introducetwo">北京 / 2019.07.13 周六 18:30 / 凯迪拉克中心</div>
                <div class="introducethree">￥380-1280</div>
            </div>
        </div>
        <div class="content">
            <div class="banner">
                <img src="../../common/img/sort1.webp" alt="">
            </div>
            <div class="introduce">
                <div class="introduceone">林宥嘉idol巡回演唱会北京站</div>
                <div class="introducetwo">北京 / 2019.07.13 周六 18:30 / 凯迪拉克中心</div>
                <div class="introducethree">￥380-1280</div>
            </div>
        </div>
        <div class="content">
            <div class="banner">
                <img src="../../common/img/sort1.webp" alt="">
            </div>
            <div class="introduce">
                <div class="introduceone">林宥嘉idol巡回演唱会北京站</div>
                <div class="introducetwo">北京 / 2019.07.13 周六 18:30 / 凯迪拉克中心</div>
                <div class="introducethree">￥380-1280</div>
            </div>
        </div>
        <div class="content">
            <div class="banner">
                <img src="../../common/img/sort1.webp" alt="">
            </div>
            <div class="introduce">
                <div class="introduceone">林宥嘉idol巡回演唱会北京站</div>
                <div class="introducetwo">北京 / 2019.07.13 周六 18:30 / 凯迪拉克中心</div>
                <div class="introducethree">￥380-1280</div>
            </div>
        </div>
        <div class="content">
            <div class="banner">
                <img src="../../common/img/sort1.webp" alt="">
            </div>
            <div class="introduce">
                <div class="introduceone">林宥嘉idol巡回演唱会北京站</div>
                <div class="introducetwo">北京 / 2019.07.13 周六 18:30 / 凯迪拉克中心</div>
                <div class="introducethree">￥380-1280</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'More'
}
</script>

<style>
.more{
    width: 100%;
}
.star-more{
    position: relative;
    height: .58667rem;
    text-align: left;
}
.star-more > i{
    display: block;
    font-weight: 800;
    font-size: .35rem;
    color: #111;
    padding-left: .48rem;
    margin-top:.4rem;
    float: left;
}

.home-calendar-week{
    width: 100%;
    height: .58667rem;
    display: flex;
    box-pack: justify;
    font-family: '宋体';
    justify-content: space-around;
    color: #999;
    font-size: .3rem;
    padding-top:.25rem;
    padding-left:.3rem;
}

.content{
    margin-top:.1rem;
    width: 100%;
    height: 3.8rem;
    display: flex;
    justify-content: center;
    align-items: center
}
.content > .banner > img{
    width: 2.3rem;
    height: 3rem;
    margin-left:.5rem;
}
.content .introduce{
    box-sizing: border-box;
    padding-left:.25rem;
    width: 289px;
    height: 151px;
}
.content .introduce .introduceone{
    font-size: 15px;
    color: #111;
    font-weight: 900;
}
.content .introduce .introducetwo{
    margin-top:8px;
    color: #aaaaaa
}
.content .introduce .introducethree{
    box-sizing: 5px;
    margin-top: 78px;
    padding-left: 10px;
    color:#ff1268;
    font-size: 16px
}
</style>
