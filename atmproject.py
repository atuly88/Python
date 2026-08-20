'''PYTHON PROJECT'''
# MINI ATM SYSTEM

account = {
    "name": "ATUL YADAV",
    "balance": 50000,
    "pin": 1234,
    "type": "savings"
}

print("WELCOME TO ATM SYSTEM")

pin = int(input("Enter your pin: "))

if pin == account["pin"]:
    while True:
        print("\n****ATM MENU****")
        print("1. Check Balance")
        print("2. Withdraw Money")
        print("3. Deposit Money")
        print("4. ACCOUNT DETAILS")
        print("5. Exit")
        choice = int(input("Enter your choice: "))

        if choice == 1:
            print("YOUR BALANCE IS: ", account["balance"])

        elif choice == 2:
            ammount = int(input("Enter amount to withdraw: "))

            if ammount > 0:
                account["balance"] = account["balance"] - ammount
                print("money withdrawn successfully")
                print("YOUR UPDATED BALANCE IS: ", account["balance"])
                print("NEW BALANCE IS: ", account["balance"])
                print("THANK YOU FOR USING ATM SYSTEM")

            else:
             print("Invalid amount. Please enter a positive value.")

        elif choice == 3:
                ammount = int(input("Enter amount to deposit: "))

                if ammount < 0:
                    print("Invalid amount. Please enter a positive value.")
                elif ammount > account["balance"]:
                    print("Insufficient balance. Please enter a valid amount.")
                else:
                    account["balance"] = account["balance"] + ammount
                    print("money deposited successfully")
                    print("YOUR UPDATED BALANCE IS: ", account["balance"])
                    print("NEW BALANCE IS: ", account["balance"])
        elif choice == 4:
            print("ACCOUNT DETAILS")
            print("Account Holder Name: ", account["name"])
            print("Account Type: ", account["type"])
            print("Account Balance: ", account["balance"])
        elif choice == 5:
            print("THANK YOU FOR USING ATM SYSTEM")
            break
        else:
            print("Invalid choice. Please try again.")
else:
    print("Invalid pin. Please try again.")