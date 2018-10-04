module.exports = function(grunt){

    //Configuration
    grunt.initConfig({
        //pass options to plugins, references to files etc
    });

    //Load plugins
    //grunt.loadNpmTasks('')

    //Register Tasks
    grunt.registerTask('run', function(){
        console.log('I have started Running');
    });

    grunt.registerTask('sleep', function(){
        console.log('I am Sleeping');
    });
};