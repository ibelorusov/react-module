import { createSlice } from "@reduxjs/toolkit";

const entranceSlice = createSlice({
    name: 'entrance',
    initialState: {
        isLoginValid: true,
        isPasswordValid: true,
        entrance: {},
        textErrorLogin: "",
        textErrorPassword: "",
        textErrorSubmit: "",
        isCorrectEnter: false,
        isEntrance: true,
        registrationData: {},
        isLoginValidRegistration: true,
        isPasswordValidRegistration: true,
        isCorrectRegistered: false,
        textErrorLoginRegistration: "",
        textErrorPasswordRegistration: "",
        usersData: JSON.parse(localStorage.getItem('userData'))===null ? [] : JSON.parse(localStorage.getItem('userData')),
    },
    reducers: {
        addRegistrationData(state, action) {
            state.registrationData = (action.payload);

            if (state.registrationData.login.length < 4 && state.registrationData.login.length > 0) {
                state.isLoginValidRegistration = false;
                state.textErrorLoginRegistration = 'Логин должен содержать не менее 4-х символов';
            } else if (state.registrationData.login.length === null || state.registrationData.login.length === 0) {
                state.isLoginValidRegistration = false;
                state.textErrorLoginRegistration = 'Поле не должно быть пустым';
            } else {
                state.isLoginValidRegistration = true;
                state.textErrorLoginRegistration = '';
            }

            if (state.registrationData.password.length < 4 && state.registrationData.password.length > 0) {
                state.isPasswordValidRegistration = false;
                state.textErrorPasswordRegistration = 'Пароль должен содержать не менее 4-х символов';
            } else if (state.registrationData.password.length === null || state.registrationData.password.length === 0){
                state.isPasswordValidRegistration = false;
                state.textErrorPasswordRegistration = 'Поле не должно быть пустым';
            } else {
                state.isPasswordValidRegistration = true;
                state.textErrorPasswordRegistration = '';
            }

            if (state.isLoginValidRegistration && state.isPasswordValidRegistration) {
                state.usersData.push(state.registrationData);
                state.isCorrectRegistered = true;
                localStorage.setItem("userData", JSON.stringify(state.usersData));
                state.isEntrance = true;
            }
        },
        correctData(state, action) {
            state.entrance = (action.payload);

            if (state.entrance.login.length === 0 || state.entrance.login === '') {
                state.isLoginValid = false;
                state.textErrorLogin = "Поле не должно быть пустым";
            } else {
                state.isLoginValid = true;
                state.textErrorLogin = '';
            }

            if (state.entrance.password.length === 0 || state.entrance.password === '') {
                state.isPasswordValid = false;
                state.textErrorPassword = "Поле не должно быть пустым";
            } else {
                state.isPasswordValid = true;
                state.textErrorPassword = '';
            }

            if (state.isLoginValid && state.isPasswordValid) {
                if (!state.usersData.some(user => user.login === state.entrance.login && user.password === state.entrance.password)) {
                    state.isCorrectEnter = false;
                    state.textErrorSubmit = "Логин или пароль неверен";
                } else {
                    state.isCorrectEnter = true;
                    state.textErrorSubmit = '';
                }
            }
        },
        changeEntranceWindow(state, action) {
            state.isEntrance = action.payload;
        },
        logout(state, action) {
            state.isCorrectEnter = false;
        }
    }
});

export const { addRegistrationData, correctData, changeEntranceWindow, logout } = entranceSlice.actions;
export default entranceSlice.reducer;