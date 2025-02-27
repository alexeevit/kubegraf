System.register(['../../common/types/traits/baseModel'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var baseModel_1;
    var Daemonset;
    return {
        setters:[
            function (baseModel_1_1) {
                baseModel_1 = baseModel_1_1;
            }],
        execute: function() {
            Daemonset = (function (_super) {
                __extends(Daemonset, _super);
                function Daemonset(data) {
                    _super.call(this, data);
                    this.pods = [];
                }
                return Daemonset;
            })(baseModel_1.BaseModel);
            exports_1("Daemonset", Daemonset);
        }
    }
});
//# sourceMappingURL=daemonset.js.map