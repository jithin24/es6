window.onload = function (){
    const pi = 3.14;
    function log(num=1000){
        console.log("Parameter: " + num);
    }
    var greetingFunc = (name) => {
        console.log(`Hello Fatty Arrow ${name}`);
    };
    function* gen(){
        console.log("Load");
        console.log("Aim");
        console.log("Fire ----- ");
    }

    console.log(pi);
    var temp = 10;
    console.log(temp);
    if(temp>5){
        let temp = 5;
        console.log("Local value: " + temp);
    }
    console.log("Final value: " + temp);
    log(355);

    var meats = ["ham", "salami", "bacon", "chicken", "pork"];
    console.log(...meats);
    var vegs = ["spinach", "beet", "pepper"];

    var myObj = {};
    var name = "Sheril";
    var props = "Gold";
    //myObj.name = name; myObj.props = props;
    myObj = {name, props, 
            earns(e){
                console.log(`ES6 is pretty cool yeah - Points= ${e}`)
            }
        };
    myObj.earns(109);

    var str = "Euro2016";
    console.log(str.repeat(3));
    greetingFunc("Mark Twain");

    //Sets example
    var names = new Set();
    names.add("Hilda").add("Marlie").add("Rye");
    console.log(names);
    
    console.log(gen().next());
}