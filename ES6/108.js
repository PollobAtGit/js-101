
/**Array Element Finding */

const cln = (x) => { console.log(); console.log(x) };
const cl = (x) => console.log(x);

const cls = ["PostRepository", "IUnitOfWork", "IRepository", "BlogRepository"];

// POI: find returns the first element
cl(cls.find(x => x.startsWith("I")));//IUnitOfWork
cl(cls.filter(x => x.startsWith("I")));//['IUnitOfWork', 'IRepository']
cl(cls.findIndex(x => x.startsWith("I")));//1

