var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

for ( var property in languages ) {
    if( typeof( languages[property] ) === "string") {
        console.log( languages[property] );
    }
}

for ( var property in languages ) {
    console.log( typeof( property ) + " : " + languages[property] );
}

/*
Explanation:
    'property' is of string value inside for loop as for provides name as 'string'
Output:
    string : Hello!
    string : Bonjour!
    string : 4
    string : Hola!
*/