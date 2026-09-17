const Node = (value=null, nextNode=null) => {
    return { value, nextNode }
}

const LinkedList = () => {
    let rootNode = null; 
    let tailNode = null;

    function append(value) {
        if (rootNode==null){
            rootNode= Node(value);
            tailNode = rootNode;
            return;
        }
        let lastNode = Node(value);
        tailNode.nextNode = lastNode; 
        tailNode = lastNode;
    }
    
    function prepend(value) {
        let newRoot = Node(value);
        newRoot.nextNode = rootNode;
        rootNode = newRoot;
    }
    
    function size() {
        let c = 0;
        let node = rootNode;
        while(node!= null) {
            node = node.nextNode;
            c = c + 1;
        }
        return c;
    }

    function head() {
        return rootNode.value;
    }
    
    function tail() {
        if(tailNode == null) {
            return undefined;
        }

        return tailNode.value;
    }

    function at(index) {
        if(typeof(index) != "number") {
            return undefined;
        }
        if (index<0) {
            return undefined;
        }
        let node = rootNode;
        let c = 0;

        while(c<index && node != null) {
            c = c+1;
            node = node.nextNode;
        }
        if (node==null) {
            return undefined;
        }
        return node.value;
    }

    function pop() {
        if(tail==null){
            return undefined;
        }
        let node = rootNode;
        while (node.nextNode != tailNode) {
            node = node.nextNode;
        }
        node.nextNode = null;
        const returnedNode = tailNode;
        tailNode = node;
        return returnedNode.value;
    }
    function contains(value) {
        let node = rootNode;
        while(node!=null){
            if(node.value==value){
                return true
            }
            node = node.nextNode;
        }
        return false;
    }
    function findIndex(value) {
        let c = 0;
        let node = rootNode;
        while(node!=null){
            if(node.value==value){
                return c;
            }
            c = c +1;
            node = node.nextNode;
        }
        return -1;
    }
    function toString() {
        let node = rootNode;
        let s = ""
        while(node!=null) {
            s = s + `( ${node.value} ) -> `;
            node = node.nextNode ;
        }
        s = s + "null";
        return s
    }
    return { append, prepend, size, head, tail, at, pop, contains, findIndex, toString }
}

export { LinkedList, Node };

