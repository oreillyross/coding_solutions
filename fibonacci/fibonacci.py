def fibonacci(n):
    a,b = 0,1
    while b < n:
        print(b)
        a,b = b, a+b
        
fibonacci(10)        