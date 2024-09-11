int limit = 4000000;
int sum = 0;
int a = 1;
int b = 2;

while (b <= limit)
{
    if (b % 2 == 0)
    {
        sum += b;
    }
    int temp = a + b;
    a = b;
    b = temp;
}

Console.WriteLine("The sum of the even-valued terms in the Fibonacci sequence below four million is: " + sum);