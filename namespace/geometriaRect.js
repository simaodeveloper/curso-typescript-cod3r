"use strict";
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        function retangular(base, altura) {
            return base * altura;
        }
        Area.retangular = retangular;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
//# sourceMappingURL=geometriaRect.js.map