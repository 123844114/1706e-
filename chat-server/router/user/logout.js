/*
 * 退出登录
 */
module.exports=(req,res,next)=>{
    req.session.isLogin=false
    res.send({msg:'退出成功！'})
}