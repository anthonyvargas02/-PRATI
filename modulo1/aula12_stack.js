class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class StackLinked {
    constructor() {
        this.top = null
        this.size = 0
    }

    PushManager(value){
    let newNode = new Node(value)
    newNode.next = this.top
    this.pop = newNode
    this.size++
}

    pop(value) {
        if(!this.pop) return null
        let poppedValue = this.top.value
        this.top = this.top.next
        this.size--
        return poppedValue
    }

    peek(){
        return this.top ? this.top.value :null
    }

}

let pilha = new StackLinked()
pilha.push(10)
pilha.push(30)


class StackArray {
    constructor() {
        this.items = []
    }

        push(element) {
            this.items.push(element)
        }

}

let pilhaArray = new StackArray
pilhaArray.push(10)