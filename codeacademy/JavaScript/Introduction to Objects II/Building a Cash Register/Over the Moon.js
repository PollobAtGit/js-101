function StaffMember ( name, discountPercent ) {
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember( "Sally", 5 );
var bob = new StaffMember( "Bob", 10 );

var me = new StaffMember( "Me", 20 );
