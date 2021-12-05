let balance = 500.00;

class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    this.account.balance += this.amount;
  }
}

class Withdrawal extends Transaction {
  get value() {
    return (-this.amount);
  }

}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account('snow-petrol');

t1 = new Deposit(120.00, myAccount);
t1.commit();
console.log('Transaction 1: ', t1);
console.log('===================================');

t2 = new Withdrawal(100.00, myAccount);
t2.commit();
console.log('Transaction 2: ', t2);
console.log('===================================');

t3 = new Deposit(300.00, myAccount);
t3.commit();
console.log('Transaction 3: ', t3);
console.log('===================================');