const express=require("express")
const zod=require("zod")
const signup=zod.object({
    firstname:zod.string(),
    lastname:zod.string(),
    username:zod.string(),
    password:zod.string()

})
const signin=zod.object({
    username:zod.string(),
    password:zod.string()
})
const updatebody=zod.object({
    password:zod.string().optional(),
    firstname:zod.string().optional(),
    lastname:zod.string().optional()
})
const fooditem=zod.object({
    itemname:zod.string(),
    description:zod.string(),
    price:zod.number()
})
const modifyfoodItems=zod.object({
    itemname:zod.string(),
    newitemname:zod.string().optional(),
    description:zod.string().optional(),
    price:zod.number().optional()
}).refine(data=> {
    return data.newitemname || data.description || typeof data.price==="number"
},{message : "Atleast any one should be provided"}
)
const beautysalon=zod.object({
    servicename:zod.string(),
    description:zod.string(),
    price:zod.number()
})
const modifysalonItems=zod.object({
    servicename:zod.string(),
    newservicename:zod.string().optional(),
    description:zod.string().optional(),
    price:zod.number().optional()
}).refine(data=> {
    return data.newservicename || data.description || typeof data.price==="number"
},{message : "Atleast any one should be provided"}
)
const fitness=zod.object({
    programname:zod.string(),
    description:zod.string(),
    price:zod.number()
})
const modifyprograms=zod.object({
    programname:zod.string(),
    newprogramname:zod.string().optional(),
    description:zod.string().optional(),
    price:zod.number().optional()
}).refine(data=> {
    return data.newprogramname || data.description || typeof data.price==="number"
},{message : "Atleast any one should be provided"}
)
const stationery=zod.object({
    materialname:zod.string(),
    description:zod.string(),
    price:zod.number()
})
const modifystationerys=zod.object({
    materialname:zod.string(),
    newmaterialname:zod.string().optional(),
    description:zod.string().optional(),
    price:zod.number().optional()
}).refine(data=> {
    return data.newmaterialname || data.description || typeof data.price==="number"
},{message : "Atleast any one should be provided"}
)
const partyhall=zod.object({
    hallname:zod.string(),
    description:zod.string(),
    price:zod.number(),
    numberofguests:zod.number(),
    eventdate: zod.string().regex(/^\d{2}-\d{2}-\d{4}$/, {
        message: "Invalid date format. Use dd-mm-yyyy."
    }),
    starttime: zod.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
        message: "Invalid time format. Please use H:MM or HH:MM format."
    }),
    endtime: zod.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
        message: "Invalid time format. Please use H:MM or HH:MM format."
    }),
    eventtype: zod.enum(['Wedding', 'Conference', 'Birthday', 'Corporate Event', 'Other'])
    
})
const modifypartyhalls=zod.object({
    hallname:zod.string(),
    newhallname:zod.string().optional(),
    description:zod.string().optional(),
    price:zod.number().optional(),
    numberofguests:zod.number().optional(),
    eventdate:zod.string().regex(/^\d{2}-\d{2}-\d{4}$/,{
        message:"invalid date format use dd-mm-yyyy"
    }).optional(),
    starttime: zod.string().regex(
        /^([01]\d|2[0-3]):([0-5]\d)$/,
        {
          message: "Invalid time format. Please use H:MM or HH:MM format.",
        }
      ).optional(),
    endtime: zod.string().regex(
        /^([01]\d|2[0-3]):([0-5]\d)$/,
        {
          message: "Invalid time format. Please use H:MM or HH:MM format.",
        }
      ).optional(),
    eventtype: zod.enum(['Wedding', 'Conference', 'Birthday', 'Corporate Event', 'Other']).optional()
}).refine(data=> {
    return data.newhallname || data.description || typeof data.price==="number" || data.numberofguests || data.eventdate || data.starttime || data.endtime || data.eventtype
},{message : "Atleast any one should be provided"}
)
const movieticket=zod.object({
    moviename:zod.string(),
    description:zod.string(),
    ticketprice:zod.number().optional(),
    screeningdate:zod.string().regex(/^\d{2}-\d{2}-\d{4}$/,{
        message:"invalid date format use dd-mm-yyyy"
    }),
    starttime:zod.string().regex(
        /^([01]\d|2[0-3]):([0-5]\d)$/,
        {
          message: "Invalid time format. Please use H:MM or HH:MM format.",
        }
    ),
    numberofseats:zod.number()
})
const modifymovieticket=zod.object({
    moviename:zod.string(),
    description:zod.string().optional(),
    ticketprice:zod.number().optional(),
    screeningdate:zod.string().regex(/^\d{2}-\d{2}-\d{4}$/,{
        message:"invalid date format use dd-mm-yyyy"
    }).optional(),
    starttime:zod.string().regex(
        /^([01]\d|2[0-3]):([0-5]\d)$/,
        {
          message: "Invalid time format. Please use H:MM or HH:MM format.",
        }
    ).optional(),
    numberofseats:zod.number().optional()
}).refine(data=>{
    return data.description || typeof data.ticketprice==="number" || data.screeningdate || data.starttime || typeof data.numberofseats==="number"
},{message : "Atleast any one should be provided"})
const ObjectIdSchema=zod.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId format")
const foodcart=zod.object({
    userId:ObjectIdSchema,
    fooditems:zod.array(
        zod.object({
            fooditemid:ObjectIdSchema
        })
    )
})
const saloncart=zod.object({
    userId:ObjectIdSchema,
    salonitems:zod.array(
        zod.object({
            salonitemid:ObjectIdSchema
        })
    )
})
const stationerycart=zod.object({
    userId:ObjectIdSchema,
    stationeryitems:zod.array(
        zod.object({
            stationeryitemid:ObjectIdSchema
        })
    )
})
const fitnesscart=zod.object({
    userId:ObjectIdSchema,
    fitnessitems:zod.array(
        zod.object({
            fitnessitemid:ObjectIdSchema
        })
    )
})
const partyhallcart=zod.object({
    userId:ObjectIdSchema,
    partyhallitems:zod.array(
        zod.object({
            partyhallitemid:ObjectIdSchema
        })
    )
})
const movieticketcart=zod.object({
    userId:ObjectIdSchema,
    movieticketitems:zod.array(
        zod.object({
            movieticketitemid:ObjectIdSchema
        })
    )
})
module.exports={
    signup,
    signin,
    updatebody,
    fooditem,
    modifyfoodItems,
    beautysalon,
    modifysalonItems,
    fitness,
    modifyprograms,
    stationery,
    modifystationerys,
    partyhall,
    modifypartyhalls,
    movieticket,
    modifymovieticket,
    foodcart,
    stationerycart,
    fitnesscart,
    movieticketcart,
    partyhallcart,
    saloncart
}