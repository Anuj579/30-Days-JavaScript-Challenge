function saveToStorage(key, value) {
    localStorage.setItem(key, value)
    sessionStorage.setItem(key, value)

    const localStorageValue = localStorage.getItem(key);
    const sessionStorageValue = sessionStorage.getItem(key);

    console.log(`Value from localStorage for key "${key}":`, localStorageValue);
    console.log(`Value from sessionStorage for key "${key}":`, sessionStorageValue);
}

saveToStorage('name', 'Anuj')