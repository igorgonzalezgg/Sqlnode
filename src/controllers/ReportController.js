const {Op}=require('sequelize')

const  User = require('../models/User');

module.exports={

    async show (req,res){
        //@hotmail
        //rua jose
        //techs com react

        const users= await User.findAll({
            attributes:['name','email'],
            where:{
                email:{

                    [Op.iLike]:'%@hotmail.com'

                }
            },
            include:[
                {association:'addresses', where:{street:'Vila Mariana'}},
                {association:'techs',
                required:false,                
                where:{
                    name:{
                        [Op.iLike]:'React%'
                    }
                }}
            ]
        })

        return res.json(users)
    }

}