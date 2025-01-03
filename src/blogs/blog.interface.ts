export interface User {
    username : string,
    email : string,
    password : string
}

export interface UnitUser extends User {
    id : string
}

export interface Users {
    [key : string] : UnitUser
}

export interface EnumServiceGetOrderBy {
    [index: number]: { id: number; email: string; name: string };
}

export interface EnumServiceItems extends Array<EnumServiceGetOrderBy>{
    id : string
}
