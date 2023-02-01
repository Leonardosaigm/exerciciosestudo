import math
import os
import random
import re
import sys

# Complete the 'lonelyinteger' function below.
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY a as parameter.

def lonelyinteger(a):
    temp = []
    for c in a: 
        if c not in temp: temp.append(c)
        else:
            temp.remove(c)
    #Para retornar o valor como integer        
    return temp[0]
    #Para enxergar o resultado de fato
    #print(temp[0])
    
listinha = [1, 2, 3, 4, 3, 2, 1]
lonelyinteger(listinha)

# Link do exercício
# https://www.hackerrank.com/challenges/one-month-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one
