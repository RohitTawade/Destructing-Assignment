function extractNameAndStreet(personObj) {
    const { name, address: { street } } = personObj;
    return { name, street };
}

const person = {
    name: "Mithun",
    age: 21,
    address: {
        street: "B8, Block B, Industrial Area.",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh",
    },
};

const extractedData = extractNameAndStreet(person);

console.log("Extracted Data:");
console.log(extractedData);
