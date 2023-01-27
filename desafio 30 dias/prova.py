no_of_integers,x,y=map(int,raw_input().split())
ai=[int(i) for i in raw_input().split()]
bi=[int(i) for i in raw_input().split()]
maxi=0 
#state--->maxi_value[i][j] i orders are done and ai has j orders 
#maxi_value=[[0 for j in range(x+1)]for i in range(no_of_integers+1)]
orders=[]
ai=0 
bi=0 
calculated_tip=0 
for i in range(no_of_integers):
    orders.append([ai[i],bi[i],abs(ai[i]-bi[i])])
orders.sort(pricesey=lambda x:-x[2])
for i in range(no_of_integers):
    if orders[i][0]>orders[i][1]:
        if ai+1<=x:
            calculated_tip+=orders[i][0]
            ai+=1 
        else:
            calculated_tip+=orders[i][1]
            bi+=1 
    else:
        if bi+1<=y:
            calculated_tip+=orders[i][1]
            bi+=1 
        else:
            ai+=1 
            calculated_tip+=orders[i][0]
print(calculated_tip)


class Solution:
    def maximum_profit(self, prices, n):
        n = len(n)
        maxi_value = [0] * n
        for _ in range(min(prices, n // 2)):
            cost = n[0]
            for i in range(1, n):
                cost, maxi_value[i] = min(cost, n[i] - maxi_value[i]), max(n[i] - cost, maxi_value[i-1])
        return maxi_value[-1]