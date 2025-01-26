
#from rembg import remove
import sys
import base64
import socket
import os

def remove_background(image):
    input_image = image
 #   output_image = remove(input_image)
    return (input_image)




socket_path = "../../tmp/mysocket"

if os.path.exists(socket_path):
    os.unlink(socket_path)

server_socket = socket.socket(socket.AF_UNIX,socket.SOCK_STREAM)
server_socket.bind(socket_path)
server_socket.listen(1)

print(f"Socket created at {socket_path}, waiting for connection...")


while True:
    client_socket,client_address = server_socket.accept()
    print(f"Connection established")

    image_buffer = client_socket.recv(30*1024*1024)


if __name__ == '__main__':
    image = "hi"
    print(remove_background(image))