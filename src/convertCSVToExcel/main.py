import pandas as pd


read_file = pd.read_csv (r'C:\Users\Ron\Desktop\Test\Product_List.txt')
read_file.to_csv (r'C:\Users\Ron\Desktop\Test\New_Products.csv', index=None)

read_file = pd.read_csv (r'C:\Users\Ron\Desktop\Test\Product_List.csv')
read_file.to_excel (r'C:\Users\Ron\Desktop\Test\New_Products.xlsx', index = None, header=True)