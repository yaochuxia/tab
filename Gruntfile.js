module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        stylus:{
            build: {
                options: {
                    linenos: false,
                    compress: true
                },
                files: [{
                    'build/index.min.css':['css/index.styl']
                }]
            }
        },
        watch: {
            another: {
                files: ['css/*styl','build/*'],
                tasks: ['stylus'],
                options: {
                    lievreload:1227
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.registerTask('default',['watch']);
} 