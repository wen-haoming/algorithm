let arr = [1,2,2,1]

let arr2 = [4,3,2,2,4,5,6,7,1]

// 利用映射关系
// 使用一个对象去建立映射
function intersect(arr1,arr2){
    let mapObj = {};
    let arr = []
    for(let i =0; i < arr1.length; i++){
        mapObj[arr1[i]] = mapObj[arr1[i]] ?  (mapObj[arr1[i]] + 1):1
    }
    for(let i = 0; i < arr2.length; i ++){
        if(mapObj[arr2[i]]){
           arr.push(arr2[i])
        }
    }
    return arr
}

// 利用双指针
// 哪一项最小就往前 +1
// 前提需要排好序 
// 好处是节省空间
function intersect2(arr1,arr2){
     let i = 0, j = 0, k = 0
     let arr = [];
     arr1.sort()
     arr2.sort()
     while(i < arr1.length && j < arr2.length){
        if(arr1[i] > arr2[j]){
            j++
        }else if(arr1[i] < arr2[j]){
            i++
        }else{
            arr.push(arr1[i])   
            i++
            j++
        }
     }
     return arr
}

console.log(intersect2(arr,arr2))