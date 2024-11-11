// src/types/apiTypes.ts
export interface ApiResponse<T> {
    status: string;        // e.g., "success"
    code: number;          // e.g., 200
    message: string;       // e.g., "Items retrieved successfully for user with ID: 5"
    data: T;               // Type for data (in this case, an array of ItemData)
    error: string | null;  // Can be null or a string with error details
}
