export const VALIDATE = {
        name: (name) => {
            if (/^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/.test(name)) {
                return true;
            } else {
                console.error("Name is not valid")
                return false
            }
        },
        email: (email,data) => {
            email = email.toLowerCase()
            if (data.every((item) => (item.email !== email))) {
                // eslint-disable-next-line
                if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)) {
                    return true
                } else {
                    console.error("E-mail is not valid")
                    return false
                }
            } else {
                console.error("E-mail already exists")
            }
        },
        age: (age) => {
            if (age < 100 && age >= 18) {
                return true
            } else {
                console.error("Invalid age input")
                return false
            }
        },
        gender: (gender) => {
            gender = gender.toLowerCase();
            if (gender === "male" || gender === "female") {
                return true
            } else {
                console.error("Invalid gender input")
                return false
            }
        },
}
