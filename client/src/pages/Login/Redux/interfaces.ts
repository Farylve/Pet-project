export interface ILoginQuery {
    login: string
    password: string
}

export interface ILoginQuerySuccess {
    login?: string
    password?: string
    json?: any
}
