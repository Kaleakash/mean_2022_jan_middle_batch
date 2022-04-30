module.exports = (grunt)=> {
    // load the package.json 
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json")
    });    
    grunt.registerTask("build",()=> {
        grunt.config("copy",{
            main:{
                expand:true,
                cwd:"src",
                src:"**",
                dest:"dist/"
            }
        });
        grunt.task.run("copy")
    })
    grunt.registerTask("cleanfiles",()=> {
        grunt.config("clean",{
            contents:["dist/**"]
        })

        grunt.task.run("clean");
    })

    grunt.registerTask("cssTask",()=> {
        grunt.config("cssmin",{
            target: {
                files: {
                    "dist/css/styles.min.css":["src/css/*"]
                }
            }
        })    
        grunt.task.run("cssmin")
    })
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask("default",["build","cssTask"]);
}