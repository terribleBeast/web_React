import {faker} from '@faker-js/faker'
import UserModel from '../UserModel'

export function createMockUser() {

    const responds = []

    for (let index = 0; index < 5; index++) {
        responds.push(faker.lorem.paragraph({ min: 1, max: 3 }))
    }

    return new UserModel({
        firstName: () => faker.name.firstName(),
        lastName: () => faker.name.lastName(),
        email: () => faker.internet.email(),
        password: () => faker.name.password({ length: 5 }),
        role: () => 'user',
        information: () => faker.lorem.words(10),
        responds: responds
    })
};