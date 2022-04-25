"""
As you can see, the code is broken.
Create the missing functions, use default arguments.
Sometimes you have to use 'return' and sometimes you dont.
Start by creating the functions
//이전 것임.
"""


def get_x(days=[],type=""):
 for i in days :
  print(i)
    
def is_on_list(days=[],type=""):
  for i in range(len (days)) :
    if get_x[i] in days:
         print(True)
    else :
        print(False)

def add_x(days=[],type=""):
  days.append() 

def remove_x(days=[],type=""):
  days.pop()
  print()

# \/\/\/\/\/\/\  DO NOT TOUCH AREA  \/\/\/\/\/\/\ #

days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

print("Is Wed on 'days' list?", is_on_list(days, "Wed"))

print("The fourth item in 'days' is:", get_x(days, 3))

add_x(days, "Sat")
print(days)

remove_x(days, "Mon")
print(days)


# /\/\/\/\/\/\/\ END DO NOT TOUCH AREA /\/\/\/\/\/\/\ #




