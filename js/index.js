document.addEventListener('DOMContentLoaded',function(){
    initCrumbData()
    leftTabClick()
    buttomTabClick()
    rightMenu()
    smallAndThumbImg()
    thumbImg()
    arrowThumbClick()
    zoomGlass()
    initGoodBaseInfo()
    parameterInformation()
    goodsParameClick()
    choosedClick()
    footerInputClick()
  
})
// // 面包屑导航栏
//     function initCrumbData(){
//         let container =  document.querySelector('.wrap .con .conPoin')
//         // 面包屑导航栏
//         let pathData = goodData.path
//         // console.log(pathData)
    
//         pathData.forEach(function(ietm , index){
//             // console.log(ietm , index)
            
//             let aNode = document.createElement('a')
//             // console.log(aNode)
//             aNode.innerText = ietm.title
    
//             // if(index!== pathData.length - 1){
//             //     aNode.href = ietm.url
//             // }
    
//             if(ietm.url){
//                 aNode.href = ietm.url
//             }
    
    
//             container.appendChild(aNode)
//         })
//     }

// // 左侧table 切换
//     function leftTabClick () {
// // 基本思路：

//     // 1. 找到对应的节点h4
//     let h4Eles = document.querySelectorAll('.wrap .productDetail .aside .tabWrap h4');
//     // console.log(h4Eles)
//     let tabsContent = document.querySelectorAll('.wrap .productDetail .aside .tabContent > div')
//     // console.log(tabsContent)
//     // 2. 循环绑定单击事件
//     h4Eles.forEach(function(h4Node,index){
//         // console.log(h4Node)
//         h4Node.addEventListener('click',function(){
//             h4Eles.forEach(function(item){
//                 // console.log(item)
//                 item.classList.remove('active')
                
//             })
//             this.classList.add('active')

//             tabsContent.forEach(function(ietm){
//                 ietm.classList.remove('active')
//             })
//             tabsContent[index].classList.add('active')

//         })
//     })
//     // 2-1： 通过排他思想给当前元素添加类名

//     // 2-2： 通过相应的下标，找到对应div节点，通过排他思想添加类名
  
// }
       
// // 下面 table 切换
// function bottomTabClick () {
//     // 思路获取 上侧节点
//         let lisEle = document.querySelectorAll('.wrap .productDetail .detail .intro .tabWrap li')
//         console.log(lisEle)
//         let tabContents = document.querySelectorAll('.wrap .productDetail .detail .intro .tabContent > div')
//         console.log(tabContents)
//     //   循环添加 点击事件
//         lisEle.forEach(function(lisNode,index){
//             // console.log(lisNode)
//             lisNode.addEventListener('click',function(){
//                 lisEle.forEach(function(ietm){
//                     // console.log(ietm)
//                     ietm.classList.remove('active')
//                 }
                    
//                 )
//                 this.classList.add('active')
                
//                 tabContents.forEach(function(item){
//                     console.log(item)
//                     item.classList.remove('active')
//                 })
//                 tabContents[index].classList.add('active')
    
//             })
//         })
//     //   循环  排他  添加样式
    
//     //  对应页面 切换
// }

// 面包屑导航栏
function initCrumbData () {
    // 1.  获取数据源
        let  pathNode = goodData.path
        // console.log(pathNode)
    // 2.  根据数据源创建相应的节点
        pathNode.forEach(function(item){
            // console.log(item)
            let aNOde = document.createElement('a')
            // console.log(aNOde)
            aNOde.innerText = item.title
    
            if(item.url){
                aNOde.href = item.url
            }
            // console.log(aNOde)
    
            document.querySelector('.wrap .con .conPoin').appendChild(aNOde)
        })
    // 3.  将节点支架到指定的容器中（上树）

}

// 左侧table 切换
function leftTabClick(){

    let tabContents = document.querySelectorAll('.wrap .productDetail .aside .tabContent > div')
    // console.log(tabContents)
    let h4Ele = document.querySelectorAll('.wrap .productDetail .aside .tabWrap h4')
    // console.log(h4Ele)
    h4Ele.forEach(function(h4Node,index){
        // console.log(h4Node)
        h4Node.addEventListener('click',function(){
            h4Ele.forEach(function(item){
                // console.log(item)
                item.classList.remove('active')
            })
            this.classList.add('active')
    
            tabContents.forEach(function(item){
                // console.log(item)
                item.classList.remove('active')
            })
            tabContents[index].classList.add('active')
        })
        
    
    })
}

// 下面table 切换
function buttomTabClick(){

    let tabWraps = document.querySelectorAll('.wrap .productDetail .detail .intro .tabWrap li')
    // console.log(tabWraps)
    let tabContents = document.querySelectorAll('.wrap .productDetail .detail .intro .tabContent > div')
    // console.log(tabContents)
    
    tabWraps.forEach(function(item,index){
        // console.log(item)
        item.addEventListener('click',function(){
            tabWraps.forEach(function(item){
                item.classList.remove('active')
            })
            this.classList.add('active')
    
            tabContents.forEach(function(item){
                item.classList.remove('active')
            })
            tabContents[index].classList.add('active')
    
    
    
    
        })
    
    
    })
}

// 窗口侧边栏
function   rightMenu() {

    let but = document.querySelector('.wrap .toolBar .but.list');
    // console.log(but)
    let toolBar = document.querySelector('.wrap .toolBar.toolWrap');
    // console.log(toolBar)
    let tabLcon = document.querySelector('.wrap .toolBar .back')
    // console.log(tabLcon)
    let tabIcon = document.querySelectorAll('.wrap .toolBar .toolList li .tabIcon')
    // console.log(tabIcon)
    let emsEle = document.querySelectorAll('.wrap .toolBar .toolList li em')
    // console.log(emsEle)
    let isShow = false
    but.addEventListener('click',function(){
        if(!isShow){
            
            toolBar.className = 'toolBar toolOut'
    
            but.className = 'but cross'
            // toolBar.style.right = 0 
            isShow = true
        }else{
            toolBar.className = 'toolBar toolWrap'
            but.className = 'but list'
            // toolBar.style.right = - 294 + 'px'
            isShow = false
        }  
    })
    // em left -62 px   em 35px
    tabIcon.forEach(function(item,index){
        // console.log(item)
        item.addEventListener('mouseenter',function(){
            tabIcon.forEach(function(item){
                // console.log(this)
                tabIcon[index].style.backgroundColor = 'rgb(200,17,34)'
                emsEle[index].style.left = -62 + 'px'
            })
    
        })
        item.addEventListener('mouseleave',function(){
            tabIcon.forEach(function(){
                tabIcon[index].style.backgroundColor = 'rgb(122,110,110)'
                emsEle[index].style.left = 35 + 'px' 
            })
        })
    })
    
    tabLcon.addEventListener('click',function(){
        document.documentElement.scrollTop = document.body.scrollTop = 0 
    })
}
 

// // 右侧展开 关闭
// function rightMenu () {

//     let but = document.querySelector('.wrap .toolBar .but')
//     // console.log(but)
    
//     let toolBar = document.querySelector('.wrap .toolBar')
//     // console.log(toolBar)
    
//     var isShow = true
//     but.addEventListener('click',function(){
//         if(!isShow){
//             but.className ='but list'
    
//         }else {
//             but.className ='but cross'
            
//         }
//         isShow = !isShow
//     })
// }

//  小图和缩略图
function smallAndThumbImg(){
    
    // 渲染小图思路：
    let smallImg = goodData.imgsrc[0].s
    // console.log(smallImg)
    let zoom = document.querySelector('.wrap .con .mainCon .previewWrap .preview .zoom')
    
    let  img = document.createElement('img')
    
    // console.log(img)
    img.src = smallImg
    
    zoom.appendChild(img)
    // 1. 默认取出第一张小图，
    // 2. 创建图片节点,上树到指定容器
    
    let list = document.querySelector('.wrap .con .mainCon .previewWrap .specScroll .itemCon .list')
    // 1. 循环所有的小图数组
    let imgsrc = goodData.imgsrc
    
    imgsrc.forEach(function(item ){
        let li = document.createElement('li')
        // console.log(li)
        let img = document.createElement('img')
        img.src = item.s
        li.appendChild(img)
        list.appendChild(li)
        
    })
    // console.log(imgsrc)
    // 2. 创建li节点和img节点，把img作为li的子节点
    // 3. 将li上树到指定容器
}

// 单击缩略图呈现相对应小图
let index = 0 ;
function thumbImg (){

    let lis = document.querySelectorAll('.wrap .con .mainCon .previewWrap .specScroll .itemCon .list > li')
    // console.log(lis)
    let smallImg = document.querySelector('.wrap .con .mainCon .previewWrap .preview .zoom img')
    // console.log(smallImg)
    lis.forEach(function(li , i){
        // console.log(li)
        li.addEventListener('click',function(){
            // console.log(smallImg)
            
        //    smallImg.src =  li.img.src 
        //    console.log(this.imgsrc)
            let thumbImgs = this.firstElementChild
            // console.log(thumbImgs)
            smallImg.src = thumbImgs.src
            index = i 
        })
    })


}

// 缩略图的左右箭头的点击 
function arrowThumbClick(){
    let rightArrow = document.querySelector('.wrap .con .mainCon .previewWrap .specScroll .next')
    // console.log(rightArrow)
    let leftArrow = document.querySelector('.wrap .con .mainCon .previewWrap .specScroll .prev')
    // console.log(leftArrow)
    let ul = document.querySelector('.wrap .con .mainCon .previewWrap .specScroll .itemCon .list')
    // console.log(ul)
    // console.log(ul.li[0].offsetWidth); 
    let lis = ul.children
    // console.log(lis)
    let liWidth = lis[0].offsetWidth
    // console.log(liWidth)
    // 获得外边距
    let liMarginRight = parseInt(window.getComputedStyle(lis[0]).marginRight)
    // console.log(liMarginRight)
    // 获得 ul 每一次点击移动的距离
    let ulLeftmove = liWidth + liMarginRight

    // console.log(ulLeftmove)
    // 右移最大移动距离
    let ulMoveLeft = ( lis.length - 5 ) * ulLeftmove 
    // console.log(lis.length)
    // console.log(ulMoveLeft)
    // console.log(ulMoveLeft)
    let leftMove = 0
    

    rightArrow.addEventListener('click',function(){
        if(leftMove === ulMoveLeft ){
            return 

        }

        leftMove += ulLeftmove
        ul.style.left = - leftMove + 'px'
    })


    leftArrow.addEventListener('click',function(){
        if(leftMove === 0){
            return 
        }

        leftMove -= ulLeftmove
        ul.style.left = - leftMove + 'px'

    })
}


// 放大镜
function zoomGlass(){
    let zoom = document.querySelector('.wrap .con .mainCon .previewWrap .preview .zoom')
    // 给小图容器绑定鼠标悬浮和离开、鼠标移动
    let preview = document.querySelector('.wrap .con .mainCon .previewWrap .preview')
    let mask = null ;
    let bigBox = null;
    let bigImg = null;
    // console.log(index)

    // 悬浮：创建遮盖、大图容器和大图片
    zoom.addEventListener('mouseenter',function(){
        // 添加遮罩
         mask = document.createElement('div')
        mask.className = 'mask'
        // console.log(mask)
        zoom.appendChild(mask)

        // 添加大图容器 和 大图片
         bigBox = document.createElement('div')
         bigImg = document.createElement('img')
        bigBox.className = 'bigBox'
        // console.log(goodData.imgsrc[0].b); 
        bigImg.src = goodData.imgsrc[index].b
        
        // console.log(goodData.imgsrc[index].b)
        // console.log(bigImg.src)
        // console.log(index)
        bigBox.appendChild(bigImg)
        preview.appendChild(bigBox)
        // console.log(bigBox)

    })
    // 离开：将上面创建的元素给销毁
    zoom.addEventListener('mouseleave',function(){
        zoom.removeChild(mask)
        preview.removeChild(bigBox)

        mask = bigBox = bigImg = null ;

    })
    
    
    // 移动：让遮盖移动和大图也要移动
    zoom.addEventListener('mousemove',function(event){
        // 遮盖的移动的left = event.clientX - smallBox.getBoundingClientRect().left - mask.offsetWidth / 2
        let maskMoveLeft = event.clientX - zoom.getBoundingClientRect().left - mask.offsetWidth / 2;
        let maskMoveTop = event.clientY - zoom.getBoundingClientRect().top - mask.offsetHeight / 2;

        // console.log(maskMoveLeft)
        // console.log(maskMoveTop)
        
        // 计算出遮盖最大移动距离top = 小图容器的内高 - 遮盖的外高
        let maskMaxMoveLeft = zoom.offsetWidth - mask.clientWidth
        let maskMaxMoveTop = zoom.offsetHeight - mask.clientHeight
        // console.log(maskMaxMoveLeft)
        // console.log(maskMaxMoveTop)
        // 防止遮盖越过小盒子的上和左边

        if(maskMoveLeft < 0){
            maskMoveLeft = 0
        }
        if(maskMoveTop < 0 ){
            maskMoveTop = 0
        }
        if(maskMoveLeft > maskMaxMoveLeft){
            maskMoveLeft = maskMaxMoveLeft
        }
        if(maskMoveTop > maskMaxMoveTop){
            maskMoveTop = maskMaxMoveTop
        }


        mask.style.left = maskMoveLeft + 'px'
        mask.style.top = maskMoveTop + 'px'

        // 大图也要移动，有比例：遮盖移动距离 / 遮盖最大的移动距离 = 大图片的移动距离 / 大图片最大移动距离
        // 大图片最大移动距离left = 大图片内宽 - 大图片容器的外宽
          let bigBoxMaxMoveLeft = bigImg.clientWidth -  bigBox.offsetWidth
          let bigBoxMaxMoveTop = bigImg.clientHeight - bigBox.offsetHeight

          
          let bigBoxMoveLeft = (maskMoveLeft * bigBoxMaxMoveLeft) /  maskMaxMoveLeft 
          let bigBoxMoveTop = (maskMoveTop * bigBoxMaxMoveTop ) /  maskMaxMoveTop 

        // 大图片的移动距离 = (遮盖移动距离 * 大图片最大移动距离) /  遮盖最大的移动距离
        bigImg.style.left = - bigBoxMoveLeft + 'px'
        bigImg.style.top = - bigBoxMoveTop + 'px'
    })
}

// 渲染商品的基本信息
let inputsNum = 0 ;
function initGoodBaseInfo(){
    let data = goodData.goodsDetail
    // console.log(data)
    let goodsInfo = `<h3 class="infoName">
        ${data.title}
    </h3>
    <p class="news">
        ${data.recommend}
    </p>
    <div class="priceArea">
        <div class="priceArea1">
            <div class="title">
                价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格
            </div>    
            <div class="price">
                <i>￥</i>
                <em>${data.price}</em>
                <span>降价通知/span>
            </div>
            <div class="remark">
                <i>累计评价</i>
                <em>${data.evaluateNum}</em>
            </div>
        </div>
        <div class="priceArea2">
            <div class="title">
                促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销
            </div>
            <div class="fixWidth">
                <i>${data.promoteSales.type}</i>
                <span>${data.promoteSales.content}</span>
            </div>
        </div>
    </div>
    <div class="support">
        <div>
            <div class="title">
                支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持
            </div>
            <div class="fixWidth">
               ${data.support}
            </div>
        </div>
        <div>
            <div class="title">配&nbsp;送&nbsp;至</div>
            <div class="fixWidth">${data.address}</div>
        </div>
    </div>
    `
    let info1 = document.querySelector('.wrap .con .mainCon .infoWrap .info1')
    info1.innerHTML = goodsInfo
    let masterNum = document.querySelector('.wrap .productDetail .detail .fitting .goodSuits .master p')
    // console.log(masterNum)
    masterNum.innerText = '￥' + data.price

    //  获得底部搭配区已选中的商品数量：
    let inputs = document.querySelectorAll('.wrap .productDetail .detail .fitting .goodSuits .suits .suitsItem input')
    // console.log(inputs)
   
    let inputValue = 0 ;
    inputs.forEach(function(input){
        // console.log(input)

        if(input.checked){
            inputsNum++ 
            inputValue += parseInt(input.value)
        }
            
        

    })
    // console.log(inputValue)
    
    // console.log(inputsNum)

    let selectedGoods = document.querySelector('.wrap .productDetail .detail .fitting .goodSuits .result > div span')
    // console.log(selectedGoods)
    selectedGoods.innerText = inputsNum

    // 获得底部搭配区的套餐总价赋值
    let CombinedTotalPrice = document.querySelector('.wrap .productDetail .detail .fitting .goodSuits .result .price')
    CombinedTotalPrice.innerText = '￥' + (data.price + inputValue)
}

// 渲染尚品的参数信息
function parameterInformation(){
    let crumbData = goodData.goodsDetail.crumbData
    // console.log(crumbData)
    let chooseArea = document.querySelector('.wrap .con .mainCon .infoWrap .choose .chooseArea')

    crumbData.forEach(function(item){
        // console.log(item)
        let dl = document.createElement('dl')
        // console.log(dl)
        let dt = document.createElement('dt')
        dt.innerText = item.title
        dl.appendChild(dt)
        // console.log(dl)

        // console.log(item)
        // item.data.forEach(function(item){
        //     let dd = document.createElement(dd)
        //     console.log(dd)
        // })
        item.data.forEach(function(item){
            // console.log(item)
            let dd = document.createElement('dd')
            // console.log(dd)
            dd.innerText = item.type
            dd.setAttribute('price',item.changePrice)
            dl.appendChild(dd)
        })

        // console.log(dl)
        chooseArea.appendChild(dl)

        // console.log(item.data)


    })
}

// 单击商品参数效果
let conditionArr = [0,0,0,0]
function goodsParameClick(){
    let dls = document.querySelectorAll('.wrap .con .mainCon .infoWrap .choose .chooseArea dl')
    // console.log(dls)
    let choosed = document.querySelector('.wrap .con .mainCon .infoWrap .choose .chooseArea .choosed')
    // 获取所有dl
    dls.forEach(function(dl,dlIndex){
        // console.log(dl)
        // console.log(dlIndex)

        // 循环dl集合，找到dl下面对应的dd集合
        let dds = dl.querySelectorAll('dd')
        // console.log(dd)
        // console.log(dds)
        // 循环dd集合，在每个dd节点绑定单击事件
        dds.forEach(function(dd){
            // console.log(dd)
            
            dd.addEventListener('click',function(){
                // 循环dd集合，排他思想 ， 当前dd变成红色 ， 同辈dd变为灰色
                dds.forEach(function(item){
                //    console.log(item)
                   item.style.color = 'rgb(102,102,102)'
       
                })
                this.style.color = 'red'

                conditionArr[dlIndex] = {
                    test:this.innerText ,
                    price: parseInt(this.getAttribute('price'))
                    

                }
                // console.log(this.getAttribute('price'))

                calcTotalPrice()
                // console.log(conditionArr)
                choosed.innerText = ''
                conditionArr.forEach(function(item,dlIndex){
                    // console.log(item)

                    //  判断 如果是0 直接退出

                    if(!item){
                        return 
                    }
                    // console.log(item)
                    // 创建Mark  a  节点 
                    let mark = document.createElement('mark')
                    let aNOde = document.createElement('a')
                    // 设置Mark  a  里面内容
                    // console.log(conditionArr[dlIndex])
                     aNOde.setAttribute('dlIndex',dlIndex)
                    mark.innerText = item.test
                    aNOde.innerText = 'X'
                    // 上树
                    mark.appendChild(aNOde)
                    choosed.appendChild(mark)
 
                })
            })
        })
        
        
    })
}

// 12. 商品规格信息单击
function choosedClick(){
    // 因为商品参数是属于后续动态添加的，我们希望其也有单击删除事件，所以我们可以采用事件委托去绑定。
    
    // 将单击事件委托给其公共祖先`.choosed`
    
    // 1. 找到`.choosed`元素，绑定单击事件
    // 2. 只有单击的目标元素target是a节点，才执行删除当前所在mark节点
    let choosed = document.querySelector('.wrap .con .mainCon .infoWrap .choose .chooseArea .choosed')
    choosed.addEventListener('click',function(event){
        // console.log(event.target.localName)
        if(event.target.localName !== 'a'){
            return
        }
        let aNode = event.target
        // console.log(aNode)
        let markNode = aNode.parentNode
        // console.log(markNode)
        choosed.removeChild(markNode)
        
        // 3. 重置第一个dd颜色为红色，其他同辈为灰色
        // 4. 将对应的dl下标的条件容器元素重置为0  
        let dlIndex = aNode.getAttribute('dlIndex')
        // console.log(dlIndex)
        // console.log(dlIndex)
        let dl = document.querySelectorAll('.wrap .con .mainCon .infoWrap .choose .chooseArea dl')[dlIndex]
        // console.log(dl)
             // 在去找dl下面所有的dd
            let dds = dl.querySelectorAll('dd')
            // console.log(dds)
            // 把所有dd改成灰色，下标为0改成红色
            dds.forEach(function(item){
                item.style.color = 'rgb(102,102,102)'
            })
            // console.log(dds[0])
            dds[0].style.color = 'red'
            // 将对应的条件容器中的值置为0  
            conditionArr[dlIndex] = 0
            // console.log(conditionArr)
            
            
            // 汇总价格

            calcTotalPrice()
        
    })
}

// 思路
// 添加删除条件要汇总价格（商品原价 和 条件容器中的价格做相加即可）
function calcTotalPrice(){
    // 1. 创建dd的时候，给dd创建一个自定义属性price，记录当前条件值得一个价格
    let originPrice = goodData.goodsDetail.price;
    let paramTotalPrice = 0 ;
    let  leftPriceEle = document.querySelector('.wrap .productDetail .detail .fitting .goodSuits .master p')

    // 2. 点击dd的时候，获取上面price属性即可
    conditionArr.forEach(function(obj){
        if(!obj){
            return ;
        }
        // console.log(obj)
        // let  = getAttribute('price')
        paramTotalPrice += obj.price

    })
    // 3. 将价格存入到容器中
    let totalPrice = paramTotalPrice + originPrice
    // console.log(totalPrice)
    // 4. 删除或添加条件只需要拿到商品的原价和已选中的条件价格做一个汇总即可
    let price = document.querySelector('.wrap .con .mainCon .infoWrap .info1 .priceArea .priceArea1 .price em')

    price.innerText = totalPrice
    let inputs = document.querySelectorAll('.wrap .productDetail .detail .fitting .goodSuits .suits .suitsItem label input')
   
   
    let selectedTotalPrice = 0
    inputs.forEach(function (input) {
      if (input.checked) {
        selectedTotalPrice += parseInt(input.value)
      }
    })
    // console.log(selectedTotalPrice)
    // 5. 最后汇总价格上树

    leftPriceEle.innerText = '￥' +  totalPrice 
    let rightPriceEle = document.querySelector('.wrap .productDetail .detail .fitting .goodSuits .result .price')
    rightPriceEle.innerText = '￥' + (totalPrice + selectedTotalPrice) 
}


// 单击搭配区input元素事件处理
function footerInputClick(){
    let inputs = document.querySelectorAll('.wrap .productDetail .detail .fitting .goodSuits .suits .suitsItem label input')
    // console.log(inputs)
    let selectedGoods = document.querySelector('.wrap .productDetail .detail .fitting .goodSuits .result > div span')
    // console.log(selectedGoods)
    let rightPriceEle = document.querySelector('.wrap .productDetail .detail .fitting .goodSuits .result .price')
    // console.log(rightPriceEle)
    // let inputValue = 30 ;
    // let leftPriceEle = document.querySelector('.wrap .productDetail .detail .fitting .goodSuits .master p')
    // console.log(leftPriceEle)
    inputs.forEach(function(item){
        item.addEventListener('click',function(){
            let rightTotalPrice = parseInt(rightPriceEle.innerText.substring(1))
            console.log(rightTotalPrice)
            // console.log(parseInt(rightPriceEle.innerText.substring(1)))
            if(this.checked){
                inputsNum++
                rightTotalPrice += parseInt(this.value)
                // console.log(item.value)
                // console.log(inputValue)
                // console.log('选中')
            }else{
                inputsNum--
                rightTotalPrice -= parseInt(this.value)
                // console.log(inputValue)
                // console.log('未选中')
            }
            // console.log(inputsNum)
            selectedGoods.innerText = inputsNum

            // console.log(inputValue)
            rightPriceEle.innerText = '￥' + rightTotalPrice
        })

    })
}

