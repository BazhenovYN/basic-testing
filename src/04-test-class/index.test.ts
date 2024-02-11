import { random } from 'lodash';
import {
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
  getBankAccount,
} from '.';

jest.mock('lodash', () => {
  const originalModule = jest.requireActual<typeof import('lodash')>('lodash');
  return {
    __esModule: true,
    ...originalModule,
    random: jest.fn(),
  };
});

afterEach(() => {
  (random as jest.Mock).mockReset();
});

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const initialBalance = 100;
    const account = getBankAccount(initialBalance);
    expect(account.getBalance()).toBe(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const initialBalance = 100;
    const account = getBankAccount(initialBalance);

    expect(() => account.withdraw(initialBalance + 1)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring more than balance', () => {
    const initialBalance = 100;
    const account = getBankAccount(initialBalance);
    const anotherAccount = getBankAccount(initialBalance);

    expect(() => account.transfer(initialBalance + 1, anotherAccount)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    const initialBalance = 100;
    const account = getBankAccount(initialBalance);

    expect(() => account.transfer(initialBalance, account)).toThrow(
      TransferFailedError,
    );
  });

  test('should deposit money', () => {
    const initialBalance = 100;
    const amount = 10;
    const account = getBankAccount(initialBalance);

    account.deposit(amount);

    expect(account.getBalance()).toBe(initialBalance + amount);
  });

  test('should withdraw money', () => {
    const initialBalance = 100;
    const amount = 10;
    const account = getBankAccount(initialBalance);

    account.withdraw(amount);

    expect(account.getBalance()).toBe(initialBalance - amount);
  });

  test('should transfer money', () => {
    const initialBalance = 100;
    const amount = 10;
    const account = getBankAccount(initialBalance);
    const anotherAccount = getBankAccount(initialBalance);

    account.transfer(amount, anotherAccount);

    expect(account.getBalance()).toBe(initialBalance - amount);
    expect(anotherAccount.getBalance()).toBe(initialBalance + amount);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    (random as jest.Mock).mockReturnValue(1);
    const initialBalance = 100;
    const account = getBankAccount(initialBalance);

    const balance = await account.fetchBalance();

    expect(typeof balance).toBe('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const mockValue = 200;
    (random as jest.Mock).mockReturnValue(mockValue);
    const initialBalance = 100;
    const account = getBankAccount(initialBalance);

    await account.synchronizeBalance();

    expect(account.getBalance()).toBe(mockValue);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    (random as jest.Mock).mockReturnValue(0);
    const initialBalance = 100;
    const account = getBankAccount(initialBalance);

    await expect(account.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
