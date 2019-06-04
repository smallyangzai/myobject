<template>
    <div class="near">
        <div class="star-more">
            <i>近期演出</i>
            <span>演出日历 ></span>
        </div>
        <div class="home-calendar-week">
            <span class="selected">
                今天
            </span>
            <span class="">
                明天
            </span>
            <span class="">
                周四
            </span>
            <span class="">
                周五
            </span>
            <span class="">
                周六
            </span>
            <span class="">
                周日
            </span>
            <span class="">
                周一
            </span>
        </div>
        <div class="near-show">
            <ul>
                <li>
                    <div>
                        <img class="near-show-paint" src="../../common/img/nearshow.webp" alt="">
                    </div>
                    <p class="near-show-title">LINE FRIENDS城市地标行——I AM SALLY限时体验展</p>
                    <div class="home-card-item-price">
                        <span>￥50 起</span> 
                    </div>
                </li>
                <li>
                    <div>
                        <img class="near-show-paint" src="../../common/img/nearshow.webp" alt="">
                    </div>
                    <p class="near-show-title">LINE FRIENDS城市地标行——I AM SALLY限时体验展</p>
                    <div class="home-card-item-price">
                        <span>￥50 起</span> 
                    </div>
                </li>
                <li>
                    <div>
                        <img class="near-show-paint" src="../../common/img/nearshow.webp" alt="">
                    </div>
                    <p class="near-show-title">LINE FRIENDS城市地标行——I AM SALLY限时体验展</p>
                    <div class="home-card-item-price">
                        <span>￥50 起</span> 
                    </div>
                </li>
                <li>
                    <div>
                        <img class="near-show-paint" src="../../common/img/nearshow.webp" alt="">
                    </div>
                    <p class="near-show-title">LINE FRIENDS城市地标行——I AM SALLY限时体验展</p>
                    <div class="home-card-item-price">
                        <span>￥50 起</span> 
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'Near'
}
</script>

<style>
.near{
    width: 100%;
}
.star-more{
   
    height: .58667rem;
    margin-bottom: .42667rem;
    text-align: left;
    width: 100%;
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


.home-calendar-week{
    width: 100%;
    height: .58667rem;
    display: flex;
    font-family: '宋体';
    justify-content: space-around;
    color: #999;
    font-size: .3rem;
    padding-top:.25rem;
    padding-left:.3rem;
}

.near-show{
    width: 100%;
    overflow: hidden;
}
.near-show > ul{
    height: 5.5rem;
    width: 100%;
    margin-top: .25rem;
    bottom: -.06667rem;
    white-space: nowrap;
    overflow: scroll;
    display: flex;
    margin-left: .5rem;
}
.near-show > ul > li{
    display: inline-block;
    height: 4.3rem;
    margin-right: .32rem;
    border-radius: .10667rem;
}
.near-show-paint{
    display: inline-block;
    width: 2.8rem;
    height: 4.3rem;
    border-radius: .10667rem;
}
.near-show-title{
    width: 2.8rem;
    margin-top: .2rem;
    margin-bottom: .16rem;
    font-size: .3rem;
    font-weight: 600;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.home-card-item-price{
    display: flex;
    box-pack: justify;
    justify-content: space-between;
    box-align: end;
    align-items: flex-end;
    font-size: .29rem;
    line-height: .3rem;
    margin-left: -.05333rem;
}

</style>
