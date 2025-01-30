
from rembg import remove
import sys
import base64
import socket
import os
from PIL import Image
from PIL import ImageFile
ImageFile.LOAD_TRUNCATED_IMAGES = True
import io

def remove_background(image):
    try:
        image_data2 = io.BytesIO(image)
        input_image = image_data2.getvalue()
        output_image = remove(input_image)
        return (output_image)
    except:
        print(f"Error")
        return (image)
   
    

socket_path = "/tmp/mysocket"

if os.path.exists(socket_path):
    os.unlink(socket_path)

server_socket = socket.socket(socket.AF_UNIX,socket.SOCK_STREAM)
server_socket.bind(socket_path)
server_socket.listen(1)

print(f"Socket created at {socket_path}, waiting for connection...")
client_socket,client_address = server_socket.accept()
image_data = bytearray()

while True:
    chunk = client_socket.recv(1*1024*1024)
    image_data.extend(chunk)

    if not chunk:
        break

processed_image = remove_background(image_data)
client_socket.send(processed_image)
client_socket.close()
 

