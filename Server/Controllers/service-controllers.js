import Service from "../Model/service-model.js"


export const services =async (req, res) =>{
try {
    const response = await Service.find();
    console.log(response);

    if(!response){
        res.status(404).json({msg:"No Services Found."})
        return;
    }

    res.status(200).json({msg:response})

   
} catch (error) {
    console.log(error)
}
}