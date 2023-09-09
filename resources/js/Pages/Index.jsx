import Authenticated from "@/Layouts/AuthenticatedLayout"
import Guest from "@/Layouts/GuestLayout"

export default function Index({ auth }) {

    if (auth.user) {
        return (
            <Authenticated user={auth.user}>
                <h1>Olá {auth.user.name}</h1>
            </Authenticated>
        )
    }

    return (
        <Guest>
            <h1>HELLO HOME PAGE</h1>
        </Guest>
    )
}