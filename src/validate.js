//This validate function was entirely reused from the previous CRUD Js implementation with a very little addition to the code below
export const VALIDATE = {
        error:{
            name:"",
            email:"",
            age:"",
        },
        name: (name) => {
            if (/^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/.test(name)) {
                VALIDATE.error["name"]=""
                return true;
            } else {
                console.error("Name is not valid")
                VALIDATE.error["name"]="Name is not VALID"
                return false
            }
        },
        email: (email,data) => {
            email = email.toLowerCase()
            if (data.every((item) => (item.email !== email))) {
                // eslint-disable-next-line
                if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)) {
                   VALIDATE.error["email"]=""
                    return true
                } else {
                    VALIDATE.error["email"]="E-mail is not valid"
                    return false
                }
            } else {
                VALIDATE.error["email"]="E-mail already exists"
            }
        },
        age: (age) => {
            if (age < 100 && age >= 18) {
                VALIDATE.error["age"]=""
                return true
            } else {
                VALIDATE.error["age"]="Invalid age input"
                return false
            }
        },
        gender: (gender) => {
            gender = gender.toLowerCase();
            if (gender === "male" || gender === "female") {
                return true
            } else {
                return false
            }
        },
        inputValidator : (userInfo) => {
            const { name, email, age, gender } = userInfo;
            if (VALIDATE.name(name)
                && VALIDATE.email(email.toLowerCase())
                && VALIDATE.age(age)
                && VALIDATE.gender(gender.toLowerCase())) {
                return true;
            } else {
                return false;
            }
        }
}
