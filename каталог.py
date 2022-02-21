import os

# cur_dir = os.getcwd()
# print(cur_dir)
# os.mkdir("New file")
# contents = os.listdir()
# print(contents)
# text_file = open("new_file.py", "w", encoding="utf-8")
# text_file.write("a =" "'Hi'\n")
# text_file.write("print(a)")
os.replace("new_file.py", "New file/new_file.py")
# print("Размер файла:", os.stat("New file/new_file.py").st_size)
