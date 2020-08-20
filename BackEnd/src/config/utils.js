const TOKEN_KEY = "todo-token";

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
}

export const isAuth = () => {
    return getToken() !== null;
}
