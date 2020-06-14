"use strict";
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        const PI = 3.14016;
        function circunferencia(radio) {
            return PI * Math.pow(radio, 2);
        }
        Area.circunferencia = circunferencia;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
//# sourceMappingURL=geometriaCirc.js.map