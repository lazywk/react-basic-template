import React, { ReactElement } from "react";


export interface ChildrenFunctionProp {
    children: React.ReactNode
}
export interface ChildrenHtmlProp {
    children: React.ReactNode
}



export interface AppRouteProp {
    component: React.FC
}

export interface PublicRouteProp {
    signedIn: boolean
}
export interface ProtectedRouteProp {
    signedIn: boolean
}
export interface AuthorityGuardProp {
    authority: string[],
    userAuthority: string,
    children: ReactElement<any, any>
}