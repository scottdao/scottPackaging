#coding=gbk

# i = 1
# try:
#     year = int(input('inpit year:'))
# except ValueError:
#     print('����������:')

# try:
#     print(1/'a')
# except Exception as e:
#     print(e, '%s, %e')

# NameError
# try:
#     raise NameError('hello Error')
# except NameError:
#     print('my code error!')

# file �ļ������쳣����
try:
    a = open('files/name.txt')
except Exception as e:
    print(e)
finally:
    a.close()