<template>
    <div class="city">
        <p>定位城市</p>
        <div class="position"><span>定位失败</span></div>
        <p>热门城市/区域</p>
        <div class="hot_city">
            <span>全国</span>
            <span>境外</span>
            <span>北京</span>
            <span>上海</span>
            <span>深圳</span>
        </div>
        <p>A</p>
        <div class="A_city">
            <ul>
                <li>兴国</li>
                <li>兴国</li>
                <li>兴国</li>
                <li>兴国</li>
            </ul>
        </div>
        <p>A</p>
        <div class="A_city">
            <ul>
                <li>兴国</li>
                <li>兴国</li>
                <li>兴国</li>
                <li>兴国</li>
            </ul>
        </div>
        <p>A</p>
        <div class="A_city">
            <ul>
                <li>兴国</li>
                <li>兴国</li>
                <li>兴国</li>
                <li>兴国</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'city',
}
</script>

<style>
    .city p{
    height: .4rem;
    line-height: .4rem;
    font-size: .25rem;
    background: #f2f3f4;
    padding-left: .3rem;
    color: #333;
}
.city span{
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    width: 2rem;
    height: .6rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-left: .4rem;
    margin-top: .2rem;
    margin-bottom: .2rem;
}
.city li{
    height: .8rem;
    margin-left: .3rem;
    line-height: .8rem;
    border-bottom: 1px solid #ccc;
}
.position{
    height: 1rem;
    overflow: hidden;
}
.hot_city{
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
}
</style>
