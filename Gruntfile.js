module.exports = function (grunt) {

    var min_dest_path = "public/assets/js/",
        dev_path = "public/assets/dev/*.js",
        build_src_path = "public/assets/build/",
        dist_path = 'public/assets/dist/',
        css_path = 'public/assets/dist/css/',
        css_assets = 'public/assets/dist/css/img/',
        html_files_path = 'public/*.html'
        sass_path = 'public/assets/compass/sass/',
        sass_dist_path = 'public/assets/dist/css/';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%=grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: build_src_path + "*.js",
                dest: dist_path +'<%= pkg.name %>.min.js'
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: dev_path,
                dest: build_src_path + "build.js"
            }
        },
        watch: {
            scripts: {
                files: [dev_path, css_path + '*.css', css_assets + "*.*", html_files_path],
                tasks: ['jshint', 'concat', 'sass', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            options: {
                livereload: true
            }
        },
        jshint: {
            all: dev_path
        },
        clean: {
            build: build_src_path,
            release: dist_path
        },
        sass: {
            dist: {
                options: {
                    compass: true
                },
                files: [{
                   expand: true,
                   cwd: sass_path,
                   src: ['*.scss'],
                   dest: sass_dist_path,
                   ext: '.css'
                }]
            }
        },
        express: {
            dev: {
                options: {
                    script: 'server.js'
                }
            }
        }
        // tests (unit and then integration)
        // nice to have: create your own server using grunt, but nodejs
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-express');

    grunt.registerTask('default', ['clean', 'express', 'watch']);
};
