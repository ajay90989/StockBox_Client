module.exports = function (app) {
    app.use(require("./Clients")),
    app.use(require("./BasicSetting")),
    app.use(require("./Blogs")),
    app.use(require("./News"))
    app.use(require("./Coupon"))
    app.use(require("./Role"))
    app.use(require("./Service"))
    app.use(require("./Users"))
    app.use(require("./Faq"))
    app.use(require("./Dashboard"))
    app.use(require("./Plan"))
    app.use(require("./Stock"))
    app.use(require("./Basket"))
    app.use(require("./Script"))
    app.use(require("./Signal"))
    app.use(require("./Banner"))
    app.use(require("./Plancategory"))
    app.use(require("./Content"))
    app.use(require("./Mailtemplate"))
    app.use(require("./Angle"))
    app.use(require("./Aliceblue"))
    app.use(require("./Broadcast"))








}