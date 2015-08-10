var dict = {
    A : "Aristocratic"
    , B : "Balls"
    , C : "Crimson"
    , D : "Dancing doggy style"
    , E : "Empathy"
    , F : "Fiddle"
    , G : "Genuine"
    , H : "Historic"
    , I : "Irony"
    , J : "Josephus"
    , K : "Karate"
    , L : "Lemon"
    , M : "Masculinity"
    , N : "Nip slip"
    , O : "Opportunity"
    , P : "Promise"
    , Q : "Quarter"
    , R : "Roaster"
    , S : "Submission"
    , T : "Telepathy"
    , U : "University"
    , V : "Verdict"
    , W : "Wedding"
    , X : "Xerox"
    , Y : "Yell"
    , Z : "Zero"
};

function makeBackronym (string) {
    var retString = "";
    for (var i = 0; i < string.length; i++) {
        retString += (dict[string[i].toUpperCase()] + " ");
    };
    return retString.trim();
}

console.log(makeBackronym("string"));