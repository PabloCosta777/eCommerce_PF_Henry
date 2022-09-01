const user =require('./user')
const product =require('./product')
const brand =require('./brand')
const os =require('./os')

user.sync()

product.hasOne(brand)
product.hasOne(os)

brand.hasMany(product)
os.hasMany(product)