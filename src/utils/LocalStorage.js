export function setItem(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log(error);
    }
}

export function getItem(key) {
    try {
        const user = localStorage.getItem(key);
        return JSON.parse(user);
    } catch (error) {
        console.log(error);
    }
}

export function userLogin(email) {
    try {
        const user = localStorage.getItem(`User${email}`);
        return user? JSON.parse(user) : null;
    } catch (error) {
        console.log(error);
    }
}

export function userRegister(user) {
    try {
        localStorage.setItem(`User${user.email}`, JSON.stringify(user));
    } catch (error) {
        console.log(error);
    }
}

export function updateUser(oldEmail, user) {
    try {
        localStorage.removeItem(`User${oldEmail}`);
        localStorage.setItem(`User${user.email}`, JSON.stringify(user));
    } catch (error) {
        console.log(error);
    }
}
