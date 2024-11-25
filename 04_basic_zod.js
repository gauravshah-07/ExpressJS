// Section - 1

// const zod = require('zod')
// function validateInput(arr){
//     const schema = zod.array(zod.number()) // Data passed should be array of numbers.
//     const response = schema.safeParse(arr)
//     console.log(response);
// }
// validateInput([1,2,3]) // { success: true, data: [ 1, 2, 3 ] }
// validateInput(4) // { success: false, error: [Getter] }

const zod = require('zod')
function validateInput(arr){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min()
    })
    const response = schema.safeParse(arr)
    console.log(response);
}
validateInput(["1",2,3]) // { success: false, error: [Getter] }
validateInput({
    email: "gauravshah4816@gmail.com",
    password: "12345678"
}) 
// {
//     success: true,
//     data: { email: 'gauravshah4816@gmail.com', password: '12345678' }
//   }