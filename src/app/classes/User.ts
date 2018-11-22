export class User {

    name: string;
    profile: string;
    password: string;
    email: string;
    sexo: string;

    constructor(name: string, profile: string, email, sexo: string, password= null) {
        this.name = name;
        this.profile = profile;
        this.email = email;
        this.password = password;
        this.sexo = sexo;
    }

}
