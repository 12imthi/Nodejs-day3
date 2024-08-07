import Employee from "../Models/empSchema.js"

export const createEmployee = async(req,res) => {

    try {
        const newEmployee = new Employee(req.body)

        await newEmployee.save()

        res.status(200).json({message:"employee added successfully",data:[newEmployee]})

    
        
    } catch (error) {
    console.log(error);

    res.status(500).json({massage: 'Inernal server error'})
        
    }

}