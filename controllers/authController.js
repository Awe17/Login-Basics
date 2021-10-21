
module.exports.login_get = (req, res)=>{
    res.render('login');

} 

module.exports.login_post = (req, res)=>{
    const user = req.body;
    console.log(user);
    res.status(201).json({mess: 'Success'});

} 
