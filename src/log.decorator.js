// Traditional Decorator Syntax (TypeScript/Legacy Babel)
export function logger(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    console.log(target)
    console.log(propertyKey)
    console.log(descriptor)
    descriptor.value = function (...args) {
      console.log(`Method: ${propertyKey}`);
      console.log(`Arguments: ${JSON.stringify(args)}`);
      
      const result = originalMethod.apply(this, args);
      
      console.log(`Result: ${result}`);
      return result;
    };
  
    return descriptor;
}  

// The modern decorator proposal, which is currently at Stage 3 in the TC39 process,
export const log = (value, {kind, name})=>{
    if(kind === "method"){
        return function(...args){
            console.log(`${name} decorator logged at : ${new Date().toLocaleString()}`);
            try {
                const result = value.apply(this, args);
                return result;
                //2// return  `Vikas is a developer. ${result}`;
            } catch (error) {
                console.log(`Error: ${error}`);
                throw error;
            }
        }
    }
};

//3//
// export const logged = (value, {kind, name}) => {
//     if (kind === "class"){
//         return class extends value{
//             constructor(...args){
//                 super(...args);
//                 console.log(`Contructing instance of ${name} with arguments ${args.join(", ")}`);
////5//                 this.name = args[0] + 5;
////5//                 this.superProp = true;
//             }
//         }
//     }
// } 