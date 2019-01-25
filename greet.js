function greet(name){
    if (Array.isArray(name)){
        var check = "";
        name.forEach(upperInAraay);
        function upperInAraay(value, index, array){
            if (value==value.toUpperCase()){
                check = value;
                array.splice(index, 1);
            }
        }
        if (check!=""){
            return "Hello, "+name.join(" and ")+". AND HELLO "+check+"!"
        }else{
            if (name.length>2){
                var last = name.pop();
                return "Hello, "+name.join(", ")+", and "+last+".";
            }else{

                return "Hello, "+name.join(" and ")+".";
            }
        }
    }else{
        if (name==null){
            name = "my friend";
        }else if (name == name.toUpperCase()){
            return "HELLO "+name.toUpperCase()+"!"
        }
        return "Hello, " + name + ".";
    }
    
}
module.exports = greet;