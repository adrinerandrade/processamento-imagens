import cv2
 
captura = cv2.VideoCapture(0)
 
while(1):
    ret, img = captura.read()

    mask = cv2.inRange(img, (20, 0, 0), (255, 255, 127))
    target = cv2.bitwise_and(img, img, mask=mask)

    cv2.imshow("Video", target)

    k = cv2.waitKey(30) & 0xff
    if k == 27:
        break
 
captura.release()
cv2.destroyAllWindows()