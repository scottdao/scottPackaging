# coding=GBK
# װ����
import time


# print(time.time())

def timer(func):
    def wrapper():
        start_time = time.time()
        func()
        stop_time = time.time()
        print("ʱ��%s=" % (start_time - stop_time))

    return wrapper


@timer
def my_sleep():
    time.sleep(3)


timer(my_sleep())
