class DOMNodeCollection{
    constructor(nodes){
        this.nodes = nodes;
    }
};
html = function(string) {
    if(!string){
        this.each((node) =>{
            node.innerHTML = string;
        });
    }else if(this.node.length > 0){
        return this.node[0].innerHTML;
    }
};
empty = function(){
    this.html("");
}
append = function(child){
    if(this.nodes.length === 0){
        return
    }
    if(typeof child === "string"){
        this.each((node) =>{
            node.innerHTML += child
        });
    } else if(child instanceof DOMNodeCollection){
        this.each((node) =>{
            child.each((childNode) =>{
                node.appendChild(childNode.cloneNode(true));
            });
        });
    }
}


module.exports = DOMNodeCollection;