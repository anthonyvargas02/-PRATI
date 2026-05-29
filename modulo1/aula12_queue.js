class Node{
    constructor(value) {
        this.value = value
        this.next = next
    }
}

class Queue {
    constructor() {
        this.front= null
        this.rear = null
        this.size = 0
    }

    enqueue(value) {
        let newNode = new Node(value)
        if(this.rear) {
            this.rear.next = newNode
        }
    
        this.rear = newNode
        if(!this.front){
            this.front = newMode
        }

        this.size++
    }

}

let fila = new Queue()
fila.enqueue(10)