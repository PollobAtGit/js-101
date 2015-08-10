var friends = {

    bill : {
        firstName: "Bill",
        lastName: "Bill",
        number: "012345679",
        address: ["Dhaka", "Azimpur", "Bangladesh"]
    },

    steve : {
        firstName : "Steve",
        lastname: "Steve",
        number: "012345",
        address: ["Khulna", "Bangladesh"]
    }
};

function search(firstName) {
    for(name in friends){
        if(friends[name].firstName === firstName){
            console.log(friends[name]);
            return friends[name];
        }
    }
}

var friend = search (friends.steve.firstName);

console.log("First Name: " + friend.firstName);
console.log("Last Name: " + friend.lastname);
console.log("Number: " + friend.number);
console.log("Address: " + friend.address);