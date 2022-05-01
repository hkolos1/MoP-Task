export const getUser = () => {
    const local = localStorage.getItem('user');
    if(!local) return null;
    return JSON.parse(local);
}
