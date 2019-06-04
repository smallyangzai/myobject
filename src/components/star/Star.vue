<template>
    <div>
        <div class="star-more">
            <i>大咖在大麦</i>
            <span>查看更多 ></span>
        </div>
        <div class="artist">
            <ul>
                <li>
                    <div  class="artist-top">
                        <div>
                            <img class="artist-img" src="../../common/img/bigstar.webp"/>
                        </div> 
                        <div class="artist-info">
                            <div  class="artist-name">
                                周杰伦
                            </div> 
                            <div  class="artist-fans">
                                151.9万粉丝
                            </div>
                        </div>
                        <div class="artist-follow">
                            + 关注
                        </div>
                    </div> 
                    <div class="artist-bottom">
                        <div class="artist-city">
                            最近2场演出
                        </div> 
                        <i class=".icon-jiantouyou">
                            >
                        </i>
                    </div>
                </li>
                <li>
                    <div  class="artist-top">
                        <div>
                            <img class="artist-img" src="../../common/img/bigstar.webp"/>
                        </div> 
                        <div class="artist-info">
                            <div  class="artist-name">
                                周杰伦
                            </div> 
                            <div  class="artist-fans">
                                151.9万粉丝
                            </div>
                        </div>
                        <div class="artist-follow">
                            + 关注
                        </div>
                    </div> 
                    <div class="artist-bottom">
                        <div class="artist-city">
                            最近2场演出
                        </div> 
                        <i class=".icon-jiantouyou">
                            >
                        </i>
                    </div>
                </li>
                <li>
                    <div  class="artist-top">
                        <div>
                            <img class="artist-img" src="../../common/img/bigstar.webp"/>
                        </div> 
                        <div class="artist-info">
                            <div  class="artist-name">
                                周杰伦
                            </div> 
                            <div  class="artist-fans">
                                151.9万粉丝
                            </div>
                        </div>
                        <div class="artist-follow">
                            + 关注
                        </div>
                    </div> 
                    <div class="artist-bottom">
                        <div class="artist-city">
                            最近2场演出
                        </div> 
                        <i class=".icon-jiantouyou">
                            >
                        </i>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'Star'
}
</script>

<style>
.star-more{
    position: relative;
    height: .58667rem;
    margin-bottom: .42667rem;
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
.star-more > span{    
    display: block;
    float: right;
    margin-top: .4rem;
    font-weight: 700;
    font-size: .3rem;
    color: #999;
    margin-right:.6rem;
}


.artist > ul{
    width: 100%;
    float: left;
    height: 3rem;
    overflow-x: scroll;
    white-space: nowrap;
}
.artist > ul > li{
    display: inline-block;
    box-sizing: border-box;
    width: 5.3rem;
    padding: 0 .32rem;
    margin-right: .4rem;
    border: 1px solid #eee;
    border-radius: .08rem;
    box-shadow: 0 0.08rem 0.4rem 0 rgba(0,0,0,.05);
}
.artist-img{
    width: 1rem;
    height: 1rem;
    margin: .37333rem .24rem .37333rem 0;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.artist-top{
    display: flex;
    box-align: center;
    align-items: center;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.artist-info{
    box-flex: 1;
    flex: 1;
    flex: 1;
    text-align: left;
}
.artist-name{
    display: inline-block;
    font-size: .3rem;
    font-weight: 600;
    color: #111;
}
.artist-fans{
    font-size: .26667rem;
    color: #888;
}
.artist-follow{
    width: 1.35rem;
    height: .55rem;
    box-sizing: border-box;
    line-height: .55rem;
    font-size: .26rem;
    font-weight: 600;
    text-align: center;
    color: #ff1268;
    border: 2px solid #ff1268;
    border-radius: 1.33333rem;
}

.artist-bottom{
    height:1.02667rem;
    display: flex;
    box-align: center;
    align-items: center;
    align-items: center;
}
.artist-city{
    box-flex: 1;
    flex: 1;
    flex: 1;
    text-align: left;
    font-size: .3rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
