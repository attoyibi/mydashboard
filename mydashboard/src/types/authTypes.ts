// src/types/authTypes.ts
export interface LoginResponse {
    status: string;
    code: number;
    message: string;
    data: {
        token?: string;
        userId?: number;
        email?: string;
        username?: string;
    };
    error: {
        field?: string;
        issue?: string;
        message?: string;
    };
}
// src/types/authTypes.ts
export interface RegisterResponse {
    status: string;
    code: number;
    message: string;
    data: {
        token?: string;
        userId?: number;
        email?: string;
    };
    error: {
        field?: string;
        issue?: string;
        message?: string;
    };
}
