import cv2

print("写真の枚数を入力")
num = input()
for i in range(1,num+1):
    im = cv2.imread('park_{0:01d}.jpg".format(i)')
    cv2.imwrite("park_{0:01d}.png".format(i))
