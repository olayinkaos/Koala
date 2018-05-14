const Koala = require('../models/Koala')

module.exports = {
    /**
     * Retrieve all the attributes of a koala
     */
    index: async (ctx) => {
        const koala_attribute = await Koala.find({})

        return ctx.render('index', {
            attributes: koala_attribute
        })
    },

    /**
     * View koala attributes edit page
     */
    edit: async (ctx) => {
        const koala_attribute = await Koala.find({})

        return ctx.render('edit', {
            attributes: koala_attribute
        })
    },

    /**
     * Add a new koala attribute
     */
    add: (ctx) => {
        const requestBody = ctx.request.body

        if ( !requestBody.meta_name || !requestBody.meta_value ) {
            //return toast error on page
        }

        const koala_attribute = Koala.create({
            meta_name: requestBody.meta_name,
            meta_value: requestBody.meta_value
        });

        return ctx.redirect('/edit')
    },
    
    /**
     * Update the value of the koala attribute
     */
    update: (ctx) => {
        const requestBody = ctx.request.body

        const bodyKeys = Object.keys(requestBody)

        bodyKeys.forEach( (key) => {

            const key_value = requestBody['' + key + '']

            Koala.findOneAndUpdate({
                meta_name: key
            }, {
                meta_value: key_value
            }, (err, attribute) => {
                if (err)
                    //do something
                console.log(attribute)
            })
        })

        return ctx.redirect('/edit')        
    }
}