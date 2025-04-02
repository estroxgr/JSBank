

export default class Account {
    constructor(data) {
        this.accounts = data;
    }

    /**
     * Fetches a account object based on the provided account code.
     *
     * @param {string} code - The unique code of the account to fetch.
     * @returns {Object|null} The account object if found, otherwise null.
     */
    fetchaccount(code) {
        return this.accounts.find(account => account.code === code) || null;
    }

    /**
     * Deposits a specified amount into the account of a account identified by their code.
     *
     * @param {string} code - The unique identifier for the account.
     * @param {number} amount - The amount to deposit. Must be greater than 0.
     * @returns {string} A message indicating the new balance for the account, or an error message if the transaction is invalid.
     */
    deposit(code, amount) {
        const account = this.fetchaccount(code);
        if (account && amount > 0) {
            account.balance += amount;
            return `New balance for ${account.name}: ${account.balance}`;
        }
        return "Invalid transaction.";
    }

}


