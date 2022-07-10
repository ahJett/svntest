function deepClone(obj){
    let newObj = {}
    for (let key in obj){
        if(Object.prototype.toString.call(this,obj){
            newObj[key] = deepClone(obj[key])
        }else{
            newObj[key] = obj[key]
        }
    }
}