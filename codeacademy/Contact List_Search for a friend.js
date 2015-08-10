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

function searchPerson(firstName){
    for(name in friends){
        if(friends[name].firstName === firstName){
            console.log(name);
            return name;
        }
    }
}

searchPerson (friends.steve.firstName);
searchPerson ('friends.steve.firstName');
searchPerson ("Steve");
searchPerson (friends.bill.firstName);


