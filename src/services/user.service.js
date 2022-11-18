import User from "../models/user.model.js";

class UserService {
    list(req,res){
        User.find().then((data) => {
            res.send(data);
        });
    }

    get(req,res){
        User.findById(req.params.id).then((data)=>{
            res.send(data);
        })
    }

    delete(req,res){
        User.findByIdAndDelete(req.params.id).then((data)=>{
            res.send("Deleted Successfully");
        })
    }

    update(req,res){
        User.findByIdAndUpdate(req.params.id,req.body).then((data)=>{
            res.send(data);
        })
    }
}

export default new UserService();