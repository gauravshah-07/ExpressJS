const jwt = require('jsonwebtoken')

// Three steps : Generate, Decode, verify

// Generate the web tokens

const value = {
    username: "gauravshah4816@gmail.com",
    password: "llmm"
}

const token = jwt.sign(value,"secret") // secret is a thing which will backend use to verify the jwt finally, if it get lost to some hacker, then hacker can hack your system.

console.log(token);
// Output : 
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdhdXJhdnNoYWg0ODE2QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoibGxtbSIsImlhdCI6MTcyNzUyMDM1OH0.oWfN37N1dDwSM_bHAHtVosiDsnnYfBMwlBNhE6K2wvw // This is your checque book or jwt.
// If you lost this, your account is not safe.
// This jwt can be seen by anyone, and can be decoded, decoding means seeing the original content.