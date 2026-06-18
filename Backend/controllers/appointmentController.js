const Appointment =
require(
"../models/Appointment"
);

const createAppointment =
async (req,res)=>{

const appointment =
await Appointment.create(
req.body
);

res.status(201).json(
appointment
);

};

const getAppointments =
async(req,res)=>{

const appointments =
await Appointment.find()
.populate("patientId")
.populate("doctorId");

res.json(
appointments
);

};

const updateAppointment =
async(req,res)=>{

const appointment =
await Appointment.findByIdAndUpdate(
req.params.id,
req.body,
{
new:true
}
);

res.json(
appointment
);

};

const deleteAppointment =
async(req,res)=>{

await Appointment.findByIdAndDelete(
req.params.id
);

res.json({
message:
"Appointment Deleted"
});

};

module.exports={
createAppointment,
getAppointments,
updateAppointment,
deleteAppointment
};