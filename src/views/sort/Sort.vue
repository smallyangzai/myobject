<template>
        <div class="sort">
            <div id="resent-search-view3">
                <ul id="resent-search3">
                    <li class="resent-search-tag3"><a href="#">全部</a></li>
                    <li class="resent-search-tag3"><a href="#">演唱会</a></li>
                    <li class="resent-search-tag3"><a href="#">话剧歌剧</a></li>
                    <li class="resent-search-tag3"><a href="#">音乐会</a></li>
                    <li class="resent-search-tag3"><a href="#">曲苑杂坛</a></li>
                    <li class="resent-search-tag3"><a href="#">巴黎舞蹈</a></li>
                    <li class="resent-search-tag3"><a href="#">体育比赛</a></li>
                    <li class="resent-search-tag3"><a href="#">儿童亲子</a></li>
                    <li class="resent-search-tag3"><a href="#">展览休闲</a></li>
                    <li class="resent-search-tag3"><a href="#">二次元</a></li>
                    <li class="resent-search-tag3"><a href="#">旅游展览</a></li>
                </ul>
            </div>
    
            <div class="list">
                <ul class="listnav">
                    <li><a href="#">全国<span class="iconfont">&#xe6bb;</span></a></li>
                    <li><a href="#"></a>全部时间<span class="iconfont">&#xe6bb;</span></a></li>
                    <li><a href="#">推荐排列</a><span class="iconfont">&#xe6bb;</span></a></li>
                    <li><a href="#">距离最近</a></li>
                </ul>
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
    name:"Sort"
}
</script>

<style>
.sort{
    width: 100%;
}
    .recent-search-tag {
        display: block;
        overflow: hidden;
        white-space: nowrap;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
    }


    #resent-search3 {
        height: 48px;
        margin-left: 15px;
        overflow-x: auto;
        white-space: nowrap;
        width: auto;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    .resent-search-tag3 {
        display: inline-block;
        padding: 2px 10px;
        margin-right: 10px;
        margin-top: 10px;
        font-size: 20px;
        font-weight: 900
    }
    .resent-search-tag3 a{
        color: #111;
    }



.list{
    width: 100%;
    background:#f5f5f5 ;
        
}
.list .listnav{
    height: 50px;
    display: flex;
    box-sizing: border-box;
    padding: 15px;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
    
}
.list .listnav li .iconfont{
    font-size: 12px;
}
.list .listnav li a{
    color: #111111;
}
.list .listnav li:nth-child(3) a{
    color: #ff1268
}



.content{
    width: 100%;
    height: 195px;
    display: flex;
    justify-content: center;
    align-items: center
}
.content > .banner > img{
    width: 114px;
    height: 151px;

}
.content .introduce{
    box-sizing: border-box;
    padding-left:10px;
    width: 289px;
    height: 151px;
}
.content .introduce .introduceone{
    font-size: 19px;
    color: #111;
    font-weight: 900;
}
.content .introduce .introducetwo{
    margin-top:8px;
    color: #aaaaaa
}
.content .introduce .introducethree{
    box-sizing: 5px;
    margin-top: 50px;
    padding-left: 10px;
    color:#ff1268;
    font-size: 16px
}
    </style>
