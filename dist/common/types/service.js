System.register(['../../common/types/traits/baseModel'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var baseModel_1;
    var Service;
    return {
        setters:[
            function (baseModel_1_1) {
                baseModel_1 = baseModel_1_1;
            }],
        execute: function() {
            Service = (function (_super) {
                __extends(Service, _super);
                function Service(data) {
                    _super.call(this, data);
                }
                return Service;
            })(baseModel_1.BaseModel);
            exports_1("Service", Service);
        }
    }
});
//# sourceMappingURL=service.js.map