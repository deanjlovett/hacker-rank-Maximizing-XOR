# hacker-rank-Maximizing-XOR
Given two integers, L and R, find the maximal value of a xor b ( written a^b in C/C++, and Javascript ) where a and b satisfy the following condition: 
L ≤ a ≤ b ≤ R,  in pseudo code L <= a <= b <= R


For example, if L=11  and L=12 , then
11^11 = 0
11^12 = 7
12^12 = 0
Max is 7, from the pair (11,12)

if L=10  and L=15 , then
10^10 = 0
10^11 = 1
10^12 = 6
10^13 = 7
10^14 = 4
...
14^15 = 1
15^15 = 0
Max is 7, from the pairs (10,13) and (11,12)

if L=11  and L=100 , then
max is 127
