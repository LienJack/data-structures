export class Trinode {
    constructor(key, leaf) {
        this.key = key
        this.leaf = leaf
        this.count = 0
        if (!leaf) {
            this.children = []
        }
    }
}

export class Trie {
    constructor () {
        const root = new Tirenode(null, false)
        this.root = root
    }
    run(strs) {
        const root = this.root
        for(let i = 0; i <strs.length; i++) {
            this.insertNode(root, strs[i])
        }
    }

    insertNode(node, str) {
        if(node.leaf) return
        const child = node.children.find((child)=>{
            return child.key === str[0]
        })
        if (child) {
            child.count ++
            this.insertNode(child,str.substring(1))
        } else {
            let child
            if (str.length === 1) {
                child = new Tirenode(str[0], true)
            } else {
                child = new Tirenode(str[0], false)
            }
            node.children.push(child)
            this.insertNode(child, str.substring(1))
        }
    }

    search(txt) {
        if(!txt) {
            return
        }
        const root = this.root
        const isIn = this.searchTxt(root, txt)
        console.log(isIn)
    }

    searchTxt(node,txt) {
        if(!txt) return false
        if(!node.leaf) {
            const child = node.children.find(child => {
                return child.key === txt[0]
            })
            if(!child) {
                return false
            } else if(child.leaf){
                return child
            } else {
                if (txt.length == 1) {
                    return false
                }
                return this.searchTxt(child, txt.substring(1))
            }
        } else {
            if (node.key === txt[0]) {
                return node
            } else {
                return false
            }
        }
    }

    getRoot () {
        return this.root
    }

}

