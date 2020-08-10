let arr1 = [7,1,5,3,6,4]
let arr2 = [7,6,4,3,1]

var maxProfit = function(prices) {
    let minprice = Number.MAX_SAFE_INTEGER
    let max = 0
    for(let i = 0;i<prices.length;i++){
        if(prices[i]<minprice){
            minprice = prices[i]
        }else{
            max = Math.max(max,prices[i]-minprice)
        }
    }
    return max
}

/**
 * 
 *  只要股票价格上涨，上涨的部分就是我的利润，可以理解为上涨期间第一天买入，然后一直持有到上涨最后一天即下跌前一天再卖出
 *  只要股票价格下跌，那我肯定在下跌前一天卖了，而且下跌期间永远不会买入
 */
function maxProfit2(prices){
    let profit = 0;
    for(let i = 0; i < prices.length; i++){
           if(prices[i+1] && prices[i+1] > prices[i]) profit =  profit + (prices[i+1] - prices[i])
    }
    return profit
}


console.log(maxProfit2(arr1));