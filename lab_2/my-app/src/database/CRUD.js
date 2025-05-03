import axios from 'axios';
import { toLog } from '../features/utils';


const port = "3001"
const host = `http://localhost:${port}`


class User {

    constructor({ email, password, id, info = "", responds = [] }) {
        this.id = id
        this.email = email
        this.password = password
        this.info = info === "" ? `Hello! I'm good!` : info
        this.responds = responds
    }

}

// GET
export async function getUser(email) {

    return await axios.get(`${host}/users?email=${email}`)
        .then(response =>
            response.data[0]
        )
        .catch(error => console.error(error));
}

// POST
export async function createUser(email, password) {
    try {
        const data = await getUser(email)

        if (data === undefined) { // there is no user with that email address
            console.log("create User", data)
            const newUser = new User({ email: email, password: password })

            await axios.post(`${host}/users`, newUser)
            console.log(`User ${newUser.email} is created`)

            return true;
        } else {
            console.log(`User ${email} already exists`);
            return false;
        }
    } catch (error) {
        console.error("Error creating user:", error);
        return false; // Возвращаем false в случае ошибки
    }
}

// PUT
export async function updateUser({email, data}) {

    toLog(updateUser, email);

    const userData = await getUser(email)

    const updatedUser = new User({
        ...userData, 
        data
    })

    console.log(updatedUser)

    return await axios.put(`${host}/users/${userData.id}`, updatedUser)
        .then(response =>
            response.data[0]
        )
        .catch(error => console.error(error));
}

export async function getUsers() {

    return await axios.get(`${host}/users`)
        .then(response =>
            response.data
        )
        .catch(error => console.error(error));
}

export async function updateUserRespond(email, newRespond) {

    const userData = await getUser(email)
    // console.log(userData)
    userData.responds.push(newRespond)

    const updatedUser = new User({
        email: userData.email,
        password: userData.password,
        id: userData.id,
        info: userData.info,
        responds: userData.responds
    })
    console.log(updatedUser)

    return await axios.put(`${host}/users/${userData.id}`, updatedUser)
        .then(response =>
            response.data[0]
        )
        .catch(error => console.error(error));
}

export async function deleteUserRespond(email, indexRespond) {

    const userData = await getUser(email)
    // console.log(userData)
    userData.responds.splice(indexRespond, 1)

    const updatedUser = new User({
        id: userData.id,
        email: userData.email,
        password: userData.password,
        info: userData.info,
        responds: userData.responds
    })

    await axios.put(`${host}/users/${userData.id}`, updatedUser)
        .then(response =>
            console.log(`put ${email}`, response.status)
        )
        .catch(error => console.error(error));

}



export async function deleteUser(email) {

    const userData = await getUser(email)

    return await axios.delete(`${host}/users/${userData.id}`)
        .then(response =>
            console.log(`delete user ${email}`, response.status)
        )
        .catch(error => console.error(error));
}
