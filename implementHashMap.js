class Hash {
    constructor(size=53){
        this.keyMap = new Array(size)
    }

    _hash(key){
        let total = 0;
        let primeNum = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * primeNum + value) % this.keyMap
        }
        return total
    }

    set(key, value) {
        let index = this._hash(key)
        // insert key and value into index
        if (!this.keyMap[index]){
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key,value])
    }
}

let myHash = new Hash(5) 
console.log(myHash.hash("red", 13))
console.log(myHash.hash("pink", 13))
console.log(myHash.hash("blue", 13))
