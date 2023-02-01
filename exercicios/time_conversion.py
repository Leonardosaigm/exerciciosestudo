import math
import os
import random
import re
import sys

def timeConversion(s):
    temp = ""
    ampmid = s[-2]
    daynight = s[0]+s[1]
    makeint = int(s[0])*10 + int(s[1])
    if ampmid == "A" and daynight == "12":
        temp += "00"
        temp += s[2:]
        return temp[:-2]
    elif ampmid == "P" and daynight != "12":
        a = makeint + 12
        b = str(a)
        temp += b
        temp += s[2:]
        return temp[:-2]
    else:
        temp = s
        return temp[:-2]   
   
tempo = "11:59:59PM"
timeConversion(tempo)

# link do exercício
# https://www.hackerrank.com/challenges/one-month-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

#Material de apoio
# https://note.nkmk.me/en/python-str-remove-strip/