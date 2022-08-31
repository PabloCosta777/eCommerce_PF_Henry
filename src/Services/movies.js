const movies =require('../Models/movie')
const genres =require('../Models/genre')
module.exports={
    findAllMovies:async()=>{
        const response = await movies.findAll()
        return response
    },
    findByPk:async(id)=>{
        const response = await movies.findByPk(id, {
          include: {
            model: genres,
            attributes: ["name"],
            through: {
              attributes: []
            }
          }
        });
        return response 
    },
    deleteMovie:async(id)=>{
     await movies.destroy({where:{id}})
     
    },
    editMovie:async(mov,title,comment,image)=>{
      
      mov.update({title,comment,image}).then(e=>e)
    },
    addMovie:async(title,comment,image,genres)=>{
      const movie= await movies.create({title,comment,image})
      movie.addGenres(genres)
    }

}