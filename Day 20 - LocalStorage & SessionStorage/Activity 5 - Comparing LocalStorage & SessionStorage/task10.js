function clearAllStorage() {
    // Clear all data from localStorage and sessionStorage
    localStorage.clear();
    sessionStorage.clear();

    // Verify that both storages are empty
    const localStorageIsEmpty = localStorage.length === 0;
    const sessionStorageIsEmpty = sessionStorage.length === 0;

    console.log("Is localStorage empty?", localStorageIsEmpty);
    console.log("Is sessionStorage empty?", sessionStorageIsEmpty);
}

clearAllStorage();