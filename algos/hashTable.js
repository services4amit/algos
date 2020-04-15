class HashTable {

    constructor(size = 50) {

        this.keyMap = new Array(size);
    }

    hash(key) {

        let total = 0;

        let WEIRD_PRIME = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {

            let char = key[i];
            let value = char.charCodeAt() - 96;

            total = (total * WEIRD_PRIME + value) % this.keyMap.length;

        }

        return total;

    }


    set(key, value) {


        let hashKey = this.hash(key);
        if (!this.keyMap[hashKey]) {

            this.keyMap[hashKey] = [];
            this.keyMap[hashKey].push([key, value])
        } else {
            this.keyMap[hashKey].push([key, value]);
        }



        // this.keyMap[hashKey] = value;
        // console.log(hashKey)


    }

    get(key) {


        let hashKey = this.hash(key);
        if (this.keyMap[hashKey]) {

            return this.keyMap[hashKey].map((data) => {

                if (data[0] === key)
                    return data[1];
            })[0] || "NOT FOUND";
        } else {
            return "NOT FOUND";
        }

        // return this.keyMap[hashKey];
        // console.log(hashKey)


    }

    getKeys() {

        let keys = [];

        this.keyMap.map((data) => {

            data.map((d)=>{
                keys.push(d[0]);
            })

        })

        return keys;

    }

    getValues() {

        let keys = [];

        this.keyMap.map((data) => {

            data.map((d)=>{
                keys.push(d[1]);
            })

        })

        return keys;

    }



}

let hashTable = new HashTable(20);
hashTable.set("hello", "")
hashTable.set("hello1", "aef22f")
hashTable.set("he1llo1", "aef22f")
hashTable.set("heqllo1", "aef22f")
hashTable.set("heqllo1", "aef22f")
// console.log(hashTable.get("hello"));
// console.log(hashTable.get("hell1"))
console.log(hashTable.getValues())
