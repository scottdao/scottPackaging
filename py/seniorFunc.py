# 高级特性
# 1. 切片
# list  = ['ldy', 1,35 ,6 ,7 ];
# a = list[0:3]
# b = list[:2]
# print(a, b);
# c= 'awirnb';
# print(c[:1]);
# print(c[-2:])
# d = ' tr ';
# print(d.strip())
# print(len(d))
# print(''+'4')
# 利用切片操作，实现一个trim()函数，去除字符串首尾的空格，注意不要调用str的strip()方法：
# def trim(str):
#     b = ''
#     for i in str:
#         if i != ' ':
#             b += i
#     return b


# print(trim(' dr'))
# print(trim(' dr') == 'dr')
# print(trim('dr ') == 'dr')
# print(trim(' dr ') == 'dr')
# print(trim('    ') == '')

# 迭代
# 1.
# d = {'a':1,'b':2,'c':3,'f':4};
# for key in d:
#         print(key)
# 2.
# for ch in 'abc':
#     print(ch)
# 判断可迭代对象
# from collections import Iterable
# isinstance('abc', Iterable);
# 3.
# for x,y in [(1,2),("l","d")]:
#     print(x,y)s
# from collections.abc import  Iterable,Iterator;


def findMinAndMaxValue(L):
    for item in L:
        print(item)
    return()


findMinAndMaxValue([1, 2, 3, 12, 8, 11, 10, 0])
