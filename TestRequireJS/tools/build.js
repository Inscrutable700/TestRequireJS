Object({
    appDir: '../Scripts',
    mainConfigFile: '../Scripts/common.js',
    dir: '../ScriptsMin',
    baseUrl: '.',
    paths: {
        requireLib: 'require'
    },


    modules: [
        {
            name: 'common',
            include: [
                'jquery',
                'requireLib'
            ]
        },
        {
            name: 'pages/home',
            exclude: ['./common']
        },
    ]
})