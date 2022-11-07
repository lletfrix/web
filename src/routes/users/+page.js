import { error } from "@sveltejs/kit"

export const load = ({ params }) => {
    return {
        users: [{
            name: 'Rafa',
            email: 'rafa@lletfrix.com'
        }, {
            name: 'Carmen',
            email: 'carmen@lletfrix.com'
        }]
    }
}