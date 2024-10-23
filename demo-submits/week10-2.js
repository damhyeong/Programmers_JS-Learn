let count = 0;
while(count < 4) {
    count++;
    console.log(count);
}

console.log("END");

const foo = new Set();
foo.add("apple");
foo.add("banana");

for (const i of foo) {
    console.log(i);
}

const doo = (type) => {
    switch (type) {
        case "apple":
            console.log("Apple");
        case "banana":
            console.log("Banana");
            break;
        default:
            console.log("What");
    }
    console.log("Latest");
}

doo("banana");

const fooCatch = (value) => {
    if (value < 4)
        throw value;
    else
        console.log(value);
};

const bar = (value) => {
    try {
        fooCatch(value);
    } catch (catchID) {
        console.log('CATCH', catchID);
    }
};

bar(2);

const object1 = {
    property1 : "attr1",
    property2 : "attr2"
};

object1;

const object2 = {
    property: "value"
};

object2.property;
object2["property"];

const object3 = {
    property1 : function () {
        console.log("apple");
    },
    property2 : function () {
        console.log("banana");
    },
};

object3.property1();
object3.property2();

const Person = {
    name: "jason",
    age : 25,
    getName: function () {
        console.log(this.name);
    }
};

const Joy = Object.create(Person);
Joy.name = "Joy";
Joy.getName();

new Date().getMonth();

new Date().toLocaleDateString(
    undefined,
    { weekday: 'long' }
)


