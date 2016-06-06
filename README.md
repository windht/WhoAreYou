# WhoAreYou

An ip tracker and recorder middleware for nodejs web applications (currently only available for expressjs).

## Install

    npm install WhoAreYou

## Usage
        
    var app = express();
    var WAU = require("WhoAreYou");
    
    // Use with the global applcations
    app.use(WhoAreYou());
    
    // Use with specific route
    app.get("/xxx",WhoAreYou());
    
## ToDo

* Connection with databases (pipe data directly in);
* An independent dashboard or excel auto-generation for direct analysis.

## Why?

* Traffic tracking yourself!
* By adapting to different routes, you may have a much more detailed report!

## Acknowledgements

[Yummy Yang](https://github.com/oopsyummy)
        
