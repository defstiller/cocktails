function sessionStorage() {
    const setSessionStorage = (name, value) => {
        // store data in LocalStorage 
        window.sessionStorage.setItem(name, JSON.stringify(value));
    };
    const getSessionStorage = (name) => {
        const data = window.sessionStorage.getItem(name);
        if (!data) {     // if no value exists in sessionStorage return null
            return null;
        }
     
        const item = JSON.parse(data);
        return item;
    };
    return {setSessionStorage, getSessionStorage}
}

export default sessionStorage;