// export type User = {
//     id: string
//     email: string
//     password: string
//     firstName: string
//     lastName: string
//     role: string
//     isBlocked: boolean
//     info: string
//     responds: string[]
// }

export default class User {

    constructor({ id, email, password, role = 'user', isBlocked = false, firstName, lastName, info = "", responds = [] }) {
        this.id = id
        this.email = email
        this.password = password
        this.firstName = firstName
        this.lastName = lastName
        this.role = role
        this.isBlocked = isBlocked
        this.info = info === "" ? `Hello! I'm ${lastName} ${firstName}!` : info
        this.responds = responds
    }

}