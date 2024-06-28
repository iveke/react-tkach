export const getBalance = (state) => state.account.balance;

export const selectorsList = (state) => state.todos.list;
export const selectorsTitle = (state) => state.form.title;
export const selectorsLevel = (state) => state.form.level;
export const selectorsTheme = (state) => state.theme.color;
export const selectorsLoading = (state) => state.todos.isLoading;
export const selectorsError = ( state) => state.todos.error;