
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

class UserNameProvided extends Error {
    constructor(){
        super("User name not provided");
        this.statusCode = 400;
    }
}

class UserMailProvided extends Error {
    constructor(){
        super("User email not provided");
        this.statusCode = 400;
    }
}

class UserPasswordNotProvided extends Error{
    constructor(){
        super("User password not provided");
        this.statusCode = 400;
    }
}

class UserRoleIncorrect extends Error{
    constructor(){
        super("User role is not correct, must be pacient o doctor");
        this.statusCode = 400;
    }
}

class UserEmailAlreadyExists extends Error{
    constructor(){
        super("User email already exists");
        this.statusCode = 400;
    }
}

class UserInvalidCredentials extends Error{
    constructor(){
        super("Invalid credencials");
        this.statusCode = 401;
    }
}

export {
    DoctorNameNotProvided,
    DoctorSurnameNotProvided,
    DoctorSpecialityNotProvided,
    DoctorTelephoneNotProvided,
    UserNameProvided,
    UserMailProvided,
    UserPasswordNotProvided,
    UserRoleIncorrect,
    UserEmailAlreadyExists,
    UserInvalidCredentials
}