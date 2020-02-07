import {VALIDATE,data} from './validate'
const inputValidator = (userInfo) => {
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
export const CRUD = (() => {
    return {
        create: (name, email, age, gender) => {
            if (inputValidator({ name, email, age, gender })) {
                data.push({
                    name: name,
                    email: email.toLowerCase(),
                    age: age,
                    gender: gender.toLowerCase()
                })
            } else {
                console.error("Cannot create new entry due to input error(s)")
            }
        },
        read: (email) => {
            let uNode = data.filter((item) => item.email === email)
            console.log(uNode)
        },
        update: (email, key, value) => {
            if (VALIDATE[key](value)) {
                let uNode = data.filter((item) => item.email === email)
                uNode[0][key] = value;
            } else {
                console.error(`${key} couldn't be updated`)
            }
        },
        delete: (email) => {
            let newData = data.filter((item) => item.email !== email)
            data = newData
        },
        sort: (key) => {
            let sortedData = [...data]
            sortedData.sort((a, b) => (a[key] === b[key]) ? 0 : (a[key] > b[key] ? 1 : -1))
            console.log(">>>>>>>>>>SORTED USER LIST<<<<<<<<<<<")
            sortedData.forEach((item,i)=>{
                console.log(`============================== User ${i} ====================================\n`)
                console.log("Name:",item.name);
                console.log("Email:",item.email);
                console.log("Age:",item.age);
                console.log("Gender:",item.gender);
                console.log("\n");
            })
            console.log(">>>>>>>>>>END OF USER LIST<<<<<<<<<<<");
        }
    }
})();