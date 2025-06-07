import React from "react"

export type AuthPageProps = {
    isRegistration: boolean,
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    errors: { name?: string, email?: string, password?: string },
}