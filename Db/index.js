const mongoose=require("mongoose")
const { number } = require("zod")
const { fooditem } = require("../types")
mongoose.connect("mongodb+srv://ashwin8248:Ashwin007%23@nodeexpresscourse.izryu5r.mongodb.net/cruise-ship")
const EntrySchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        maxLength:30,
        minLength:3,
        required:true,
        trim:true,
        lowercase:true
    },
    firstname:{
        type:String,
        maxLength:30,
        minLength:3,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        maxLength:30,
        minLength:3,
        required:true,
        trim:true
    },
    password:{
        type:String,
        maxLength:30,
        minLength:6,
        required:true,
    },
    usercategory:{
        type:String,
        required:true
    }
})
// const adminSchema=new mongoose.Schema({
//     username:{
//         type:String,
//         unique:true,
//         maxLength:30,
//         minLength:3,
//         required:true,
//         trim:true,
//         lowercase:true
//     },
//     firstname:{
//         type:String,
//         maxLength:30,
//         minLength:3,
//         required:true,
//         trim:true
//     },
//     lastname:{
//         type:String,
//         maxLength:30,
//         minLength:3,
//         required:true,
//         trim:true
//     },
//     password:{
//         type:String,
//         maxLength:30,
//         minLength:6,
//         required:true,
//     }
// })
const FoodSchema=new mongoose.Schema({
    itemname:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    }
})
const Beautysalonschema=new mongoose.Schema({
    servicename:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true

    }

})
const Fitnessschema=new mongoose.Schema({
    programname:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true

    }

})
const stationeryschema=new mongoose.Schema({
    materialname:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true

    }

})
const partyhallschema=mongoose.Schema({
    hallname:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    numberofguests:{
        type:Number
    },
    eventdate:{
        type:String,
        required:true
    },
    starttime:{
        type:String,
        required:true
    },
    endtime:{
        type:String,
        required:true
    },
    eventtype:{
        type:String,
        enum: ['Wedding', 'Conference', 'Birthday', 'Corporate Event', 'Other'],
        required:true
    }
})
const movieticketschema=mongoose.Schema({
    moviename:{
        type:String,
        unique:true,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    ticketprice:{
        type:Number,
        required:true
    },
    screeningdate:{
        type:String,
        required:true
    },
    starttime:{
        type:String,
        required:true
    },
    numberofseats:{
        type:Number,
        required:true
    }
})
const foodcartschema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    fooditems:[{
        fooditemid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Food'
        }
    }]
})
const saloncartschema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    salonitems:[{
        salonitemid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Salon'
        }
    }]
})
const fitnesscartschema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    fitnessitems:[{
        fitnessitemid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Fitness'
        }
    }]
})
const partyhallcartschema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    partyhallitems:[{
        partyhallid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Partyhall'
        }
    }]
})
const movieticketcartschema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    movieticketitems:[{
        movieticketid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Movieticket'
        }
    }]
})
const stationerycartschema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    stationerycartitems:[{
        stationerycartid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Stationery'
        }
    }]
})
const User=mongoose.model('User',EntrySchema)
const Admin=mongoose.model('Admin',EntrySchema)
const Manager=mongoose.model('Manager',EntrySchema)
const Headcook=mongoose.model('Headcook',EntrySchema)
const Supervisor=mongoose.model('Supervisor',EntrySchema)
const Food=mongoose.model('Food',FoodSchema)
const Salon=mongoose.model('Salon',Beautysalonschema)
const Fitness=mongoose.model('Fitness',Fitnessschema)
const Stationery=mongoose.model('Stationery',stationeryschema)
const Partyhall=mongoose.model('Partyhall',partyhallschema)
const Movieticket=mongoose.model('Movieticket',movieticketschema)
const Foodcart=mongoose.model('Foodcart',foodcartschema)
const Saloncart=mongoose.model('Saloncart',saloncartschema)
const Fitnesscart=mongoose.model('Fitnesscart',fitnesscartschema)
const Partyhallcart=mongoose.model('Partyhallcart',partyhallcartschema)
const Stationerycart=mongoose.model('Stationerycart',stationerycartschema)
const Movieticketcart=mongoose.model('Movieticketcart',movieticketcartschema)
// const Admin=mongoose.model('Admin',adminSchema)
module.exports={
    User,
    Admin,
    Manager,
    Headcook,
    Supervisor,
    Food,
    Salon,
    Fitness,
    Stationery,
    Partyhall,
    Movieticket,
    Foodcart,
    Saloncart,
    Fitnesscart,
    Stationerycart,
    Movieticketcart,
    Partyhallcart
}
