
class DoctorNameNotProvided extends Error{
    constructor(){
        super("Doctor's name not provided");
        this.statusCode = 400;
    }
}

class DoctorSurnameNotProvided extends Error{
    constructor(){
        super("Doctor's surname not provided");
        this.statusCode = 400;
    }
}

class DoctorSpecialityNotProvided extends Error{
    constructor(){
        super("Doctor's speciality not provided");
        this.statusCode = 400;
    }
}

class DoctorTelephoneNotProvided extends Error{
    constructor(){
        super("Doctor's telephone not provided");
        this.statusCode = 400;
    }
}

export {
    DoctorNameNotProvided,
    DoctorSurnameNotProvided,
    DoctorSpecialityNotProvided,
    DoctorTelephoneNotProvided
}