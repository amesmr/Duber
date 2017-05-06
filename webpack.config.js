//testing this code as the html is not working. You may need to delete this later, Alex
var webpack = require("webpack");

module.exports = {

    // This is the entry point or start of our react applicaton
    entry: "./app/app.js",

    // The plain compiled JavaScript will be output into this file
    output: {
        filename: "/bundle.js",
        path: __dirname + "/public", //removed public from bundle.js and added a path -Alex
        watch: true,//added a watch to update webpack to up code as we change it
    },

    // This section desribes the transformations we will perform
    module: {
        loaders: [
            {
                // Only working with files that in in a .js or .jsx extension
                test: /\.jsx?$/,
                // Webpack will only process files in our app folder. This avoids processing
                // node modules and server files unnecessarily
                include: /app/,
                loader: "babel-loader", //changed babel to "babel-loader as it is in our dependencies"-Alex
                exclude: /node_modules/, //added exclude to code per video on Youtube - Alex
                query: {
                    // These are the specific transformations we'll be using.
                    presets: ["react", "es2015"]
                }
            }
        ]
    },
    // This lets us debug our react code in chrome dev tools. Errors will have lines
    // and file names Without this the console says all errors are coming from just
    // coming from bundle.js
    devtool: "eval-source-map"
};