
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginUserService } from "../../services";
import { setAccessToken } from "@/utils/token-service";
import backend_paths from "../../config/backend-route-path"
import axios from "axios";
import { url } from "@/api";

const initialState = {
    isAuthenticated: false,
    user: null,
}


export const LoginUser = createAsyncThunk("/auth/login", async (formData, { rejectWithValue }) => {
    try {
        // api call
        const response = await LoginUserService(formData);
        return response?.data;
    } catch (error) {
        return rejectWithValue(
            error.response?.data ?? {
                message: "Something went wrong",
            }
        );
    }
})

export const refreshToken = async () => {
    const response = await axios.post(`${url}${backend_paths.auth.refereshToken}`,
        {},
        {
            withCredentials: true,
        }
    );

    console.log(response, "response 123")

    const accessToken = response.data.data.accessToken;

    setAccessToken(accessToken);

    return accessToken;
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // some extra reducers for small cases
        setRole: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(LoginUser.pending, (state, action) => {
            state.isAuthenticated = false,
                state.user = null

        }).addCase(LoginUser.fulfilled, (state, action) => {
            state.isAuthenticated = true,
                state.user = action.payload?.user,
                setAccessToken(action?.payload?.accessToken)

        }).addCase(LoginUser.rejected, (state, action) => {
            state.isAuthenticated = false,
                state.user = null
        })
    }
})

export const { setUser, setauth } = authSlice.actions
export default authSlice.reducer