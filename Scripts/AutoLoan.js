/**
 * Created by Kushee on 10/19/15.
 */

/*Formula to calculate the monthly auto loan payment.
* Assuming there is no down payment.
*                                 n
*        ( P × (r/12) × (1+(r/12)) )
* EMI = ---------------------------
*                        n
*             ( (1+(r/12) − 1 )
*/
function calculateLoanPaymentAndInterest()
{
    var period = document.getElementById("loanPeriod").value;
    var rate = document.getElementById("annualInterestRate").value/100;
    var principal = document.getElementById("principal").value;

    var annualInterestRate = rate/12;
    var y = Math.pow((1+annualInterestRate),period);

    var payment = (principal * annualInterestRate * y / (y - 1)).toFixed(2);
    var interest = ((payment * period) - principal).toFixed(2);

    document.getElementById("monthlyPayment").value = payment;
    document.getElementById("interestPaid").value = interest;
}

function clearFields()
{
    document.getElementById("loanPeriod").value = "";
    document.getElementById("annualInterestRate").value = "";
    document.getElementById("principal").value = "";
    document.getElementById("monthlyPayment").value = "";
    document.getElementById("interestPaid").value = "";
}