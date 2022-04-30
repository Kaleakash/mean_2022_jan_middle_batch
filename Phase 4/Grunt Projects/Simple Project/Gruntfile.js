module.exports = (grunt)=> {

    // load the package.json 
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json")
    });

    grunt.registerTask("first","First Task",()=> {
        console.log("First task executed...");
    })
    grunt.registerTask("second","second Task",()=> {
        console.log("second task executed...");
    })
    grunt.registerTask("third","third Task",()=> {
        console.log("third task executed...");
    })
    // grunt.registerTask("default","Default Task",()=> {
    //     console.log("this is default task");
    // })
    grunt.registerTask("default",["first","third","second"]);
}