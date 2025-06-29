create or replace PROCEDURE ProcessMonthlyInterest IS
begin
update ACCOUNTS
set BALANCE = BALANCE + (BALANCE * 0.01)
WHERE ACCOUNTTYPE = 'Savings';
end;