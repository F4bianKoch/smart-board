import datetime
import time
import pytz

def current_time():
    now = datetime.datetime.now(pytz.timezone('Europe/Berlin'))  #current time
    time = now.strftime("%H:%M")
    return time

def timer(m, s):
 
    # Calculate the total number of seconds
    total_seconds = m * 60 + s
    while total_seconds > 0:
 
        # countdown represents time left on countdown
        countdown = datetime.timedelta(seconds = total_seconds)
        
        # Prints the time left on the timer and deletes it next loop
        print(countdown, end="\r")
 
        # Delays the program one second
        time.sleep(1)
 
        # Reduces total time by one second
        total_seconds -= 1
 
    print("Bzzzt! Timer is up!")

def stop_watch(status):
    total_seconds = 0
    while status == True:
        
        countdown = datetime.timedelta(seconds = total_seconds)
        
        # Prints the time and deletes it next loop
        print(countdown, end="\r")
 
        # Delays the program one second
        time.sleep(0.1)
 
        total_seconds += 0.1

#m = 0
#s = 2
# Inputs for minutes, seconds on timer
#timer(int(m), int(s))
#stop_watch(True)S
