exports.home = function(req, res){
    res.render('home', {
        title: "Sistem Informasi Mesjid Cibiru"
    });
};
exports.signup = function(req, res){
    res.render('sign-up');
}; 
exports.admin = function(req, res){
    res.render('admin');
};
exports.session = function(req, res){
    session = req.session;
    //res.end(JSON.stringify(req.body));
    if(req.body.username == 'ibnuaziz' && req.body.password == 'admin'){
        session.uniqueID = req.body.username;
    }
    res.redirect('/redirects');
};
exports.redirect = function(req, res){
    session = req.session;
    if(session.uniqueID){
        res.redirect('/');
    }else{
        res.end('Who Are You???');
    }
};
exports.notFound = function(req, res){
    res.send("<h2>Page Not Found</h2>");
};
exports.listen = function(req, res){
    console.log("This application running at port 3000");
};