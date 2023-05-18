import { DisplayUser } from "./IDisplayUser";

export interface DecodedJWT {
    user : DisplayUser;
    exp: number,
    iat: number,
}