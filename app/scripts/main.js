require.config({
    baseUrl: 'scripts',
    paths: {
        'jquery': '../../bower_components/jquery/dist/jquery',
        'underscore': '../../bower_components/underscore/underscore',
        'backbone': '../../bower_components/backbone/backbone',
        'marionette': '../../bower_components/marionette/lib/backbone.marionette'
    },
    shim: {
        'jquery': {
            deps: [],
            exports: '$'
        },
        'underscore': {
            deps: [],
            exports: '_'
        },
        'backbone': {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        'marionette' : {
            deps : [
                'backbone'
            ],
            exports : 'Marionette'
        }
    },
    wrapShim: true
});

require([
    'jquery',
    'underscore',
    'backbone',
    'marionette'
], function($, _, Backbone, Marionette){
    if($) {
        console.log('jQuery working!');
    }
    if(_) {
        console.log('Underscore working!');
    }
    if(Backbone) {
        console.log('Backbone working!');
    }
    if(Marionette) {
        console.log('Marionette working!');
    }
});