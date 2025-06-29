create or replace PROCEDURE TransferFunds(
from_account IN number,
to_account IN number,
amount IN number
)IS
v_balance number;
BEGIN
select balance into v_balance
from ACCOUNTS
where accountid = from_account
for update; --for concurrency

if v_balance < amount then
RAISE_APPLICATION_ERROR(-2000, 'Insufficient Balance in source account');
end if;

update ACCOUNTS
set balance = balance - amount, lastModified = sysdate
where accountid = from_account;
update ACCOUNTS
set balance = balance + amount, lastModified = sysdate
where accountid = to_account;
END;
