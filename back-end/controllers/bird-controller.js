const Bird = require('../models/bird')



 //get bird by ID
 const getBirdById = async(req,res) => {
    const id = req.params.id
    let bird;
    try {
        bird = await Bird.findById(id)
    } catch (error) {
        console.log(error);
    }

    if (!bird) {
        return res.status(404).json( {message: "cant find that bird"} )
    }
   res.status(200).json( { bird } )
} 




//create a bird
const addBird = async (req,res) => {
    const {species, gender, location, dateOfCatch, authorName, image} = req.body;
    let bird;
    try {
        bird = new Bird({
          species,
          gender,
          location,
          dateOfCatch,
          authorName,
          image,

        });
        await bird.save(); // el metodo save() guarda los datos del req en la DB
    } catch (error) {
        console.log(error);
    }
    if (!bird) {
        return res.status(500).json({message:"Unable to add"})
    }
    return res.status(201).json({ bird })
}



// get birds
const getBirds = async (req,res) => {
    
    let birds;
    try {
        birds = await Bird.find()
    } catch (error) {
        console.log(error);
    }

    if (!birds) {
      return  res.status(404).json ( {message:"There are no birds in our data base"} )
    }
     return   res.status(202).json({ birds })
    
}

const updateBird = async(req,res) => {
    const id = req.params.id
    const {species, gender, location, dateOfCatch, authorName, image} = req.body;
let bird;
try {
    bird = await Bird.findByIdAndUpdate(id,{
        species,
        gender,
        location,
        dateOfCatch,
        authorName,
        image
    })
    bird = await Bird.save()
} catch (error) {
    console.log(error);
}
if (!bird) {
    return  res.status(404).json ( {message:"Could`t get that bird"} )
  }
   return   res.status(200).json({ bird })
}

const deleteBird = async(req,res) => {
    const id = req.params.id
    let bird;
    try {
        bird = await Bird.findByIdAndDelete(id)
      
    } catch (error) {
        console.log(error);
    }
    if (!bird) {
       return res.status(404).json({message: "could`t find that bird"})
    }
    return res.status(202).json({ bird })
}



module.exports = { addBird, getBirds, getBirdById, updateBird, deleteBird }