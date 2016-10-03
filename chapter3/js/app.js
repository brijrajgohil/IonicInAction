angular.module('App',[])
.directive('markdown', function() {
    var convertor = new Showdown.convertor();
    return {
        scope: {
            markdown: '@'
        },
        link: function(scope, element, attrs) {
            scope.$watch('markdown', function() {
                var content = convertor.makeHtml(attrs.markdown);
                element.html(content);
            });
        }
    }
});
