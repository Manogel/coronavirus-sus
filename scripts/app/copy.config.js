module.exports = {
    copyFonts: {
        src: ['node_modules/ionic-framework/fonts/**/*.ttf',
            'node_modules/ionicons/dist/fonts/*.ttf',
            'node_modules/ionicons/dist/fonts/*.woff*'],
        dest: '{{WWW}}/fonts'
    },
    linkify: {
        src: '{{SRC}}/scripts/linkify.min.js',
        dest: '{{WWW}}/'
      },
    
      linkifyString: {
        src: '{{SRC}}/scripts/linkify-string.min.js',
        dest: '{{WWW}}/'
      },

      clusterer: {
        src: '{{SRC}}/scripts/markerclusterer.js',
        dest: '{{WWW}}/'
      }
};
