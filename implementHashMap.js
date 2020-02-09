class Hash {
    constructor(size = 53){
        this.keyMap = new Array(size)
    }

    _hash(key){
        let total = 0;
        let primeNum = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * primeNum + value) % this.keyMap.length
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
        return this.keyMap
    }

    get(key) {
        let index = this._hash(key)
        if (this.keyMap[index]){
            if (this.keyMap[index].length == 1) {
                return this.keyMap[index][0][1]
            } else {
                this.keyMap[index].forEach(array => {
                    if (array[0] == key){
                        return this.keyMap[index][0][1]
                    }
                });
            }
        return "key not found"
        }
    }

    keys() {
        let keysArr = []
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                   keysArr.push(this.keyMap[i][j][0])
                }
            }
        }
        return keysArr;
    }
    
    values(){
        let valuesArr = []
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr;
    }
}

let myHash = new Hash 
console.log(myHash._hash("this"))
console.log(myHash.set("this", "hashmap"))
console.log(myHash.set("pink", "mine"))
console.log(myHash.set("blue", "yours"))
console.log(myHash.get("this"))
console.log(myHash.get("blue"))
console.log(myHash.get("pink"))
console.log(myHash.values())
console.log(myHash.keys())
