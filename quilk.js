/**
 * quilk-css-grid simple build file for the sass.
 * 1 - npm install -g quilk
 * 2 - quilk (builds the non minified version)
 * 3 - quilk release=prod (builds the minified version)
 */
module.exports = {
    modules: [
        {
            name: 'To CSS',
            module: 'sass_std',
            outputStyle: 'nested',
            sourceComments: false,
            input_path: '/quilk-css-grid.scss',
            target: '/quilk-css-grid.css'
        }
    ],

    dont_watch: [
        'quilk-css-grid.css'
    ],

    release_commands_or_modules: {
        prod: {
            post: [{
                name: "Minify the css",
                module: "node_minify",
                type: "sqwish",
                input: [
                    "/quilk-css-grid.css"
                ],
                target: "/quilk-css-grid.min.css"
            }]
        }
    },

    developers: {
        default: {
            platform: "windows",
            notifier: {
                on: false
            }
        }
    }
};