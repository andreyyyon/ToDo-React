
class Item{
    // Variavel de classe não pertence ao objeto e sim a classe do objeto
    static lastId = 0;

    constructor(text){
        this.id = Item.lastId++;
        this.text = text;
        this.done = false;
    }
}

export default Item