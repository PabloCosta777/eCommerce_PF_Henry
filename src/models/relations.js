const user =require('./user')
const product =require('./product')
const brand =require('./brand')


user.sync()

product.hasOne(brand)
brand.hasMany(product)
